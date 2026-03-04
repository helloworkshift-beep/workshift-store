-- Workshift Course — Supabase Schema
-- Run this in the Supabase SQL editor after creating the project

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enrollments: tracks which products each user has purchased
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  product_slug TEXT NOT NULL, -- 'workshift-course', 'real-estate', 'pm', etc.
  stripe_session_id TEXT UNIQUE,
  amount_cents INTEGER,
  currency TEXT DEFAULT 'usd',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progress: tracks lesson completion per user
CREATE TABLE IF NOT EXISTS progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL, -- e.g. '1-1', '2-3', etc.
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_product ON enrollments(product_slug);
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);

-- Row Level Security
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Users can only see their own enrollments
CREATE POLICY "Users see own enrollments"
  ON enrollments FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can insert enrollments (from webhook)
CREATE POLICY "Service role inserts enrollments"
  ON enrollments FOR INSERT
  WITH CHECK (true); -- controlled by service role key

-- Users can read/write their own progress
CREATE POLICY "Users read own progress"
  ON progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users write own progress"
  ON progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own progress"
  ON progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users delete own progress"
  ON progress FOR DELETE
  USING (auth.uid() = user_id);

-- Function: link enrollment to user after they sign up via magic link
-- When a user first logs in, find any pending enrollments by email and assign them
CREATE OR REPLACE FUNCTION link_enrollments_to_user()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE enrollments
  SET user_id = NEW.id
  WHERE email = NEW.email AND user_id IS NULL;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE link_enrollments_to_user();

-- Also link when user logs in (in case they registered after enrollment was created)
CREATE OR REPLACE FUNCTION link_enrollments_on_login()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE enrollments
  SET user_id = NEW.id
  WHERE email = NEW.email AND user_id IS NULL;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
