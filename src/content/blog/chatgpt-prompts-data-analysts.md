# ChatGPT Prompts for Data Analysts: SQL, Reports, Stakeholder Comms, and Insight Narratives

Data analysts sit at the intersection of two worlds that don't always speak the same language: the technical reality of data, and the business decisions that depend on it. The work isn't just querying databases — it's translating numbers into stories that actually get acted on.

AI accelerates both sides. This guide covers how data analysts use ChatGPT to write better SQL faster, turn messy data into clear narratives, communicate findings to non-technical stakeholders, and document their work in a way that actually gets read.

## SQL and Query Writing

### Drafting Complex Queries

Even experienced analysts hit walls with complex joins, window functions, or CTEs they don't write every day. AI doesn't replace SQL knowledge — but it removes the friction of starting from a blank page or debugging syntax.

**Example prompt:**

> Write a SQL query for [a PostgreSQL database]. I need to [calculate 30-day rolling retention for a SaaS product, by cohort month]. Tables: [users (user_id, created_at), events (user_id, event_type, occurred_at)]. A user is "retained" if they performed [any event] in [month N+1 after signup]. Return: [cohort_month, retention_month, cohort_size, retained_users, retention_rate]. Include [comments explaining each CTE].

The more context you give — table structure, business definition of the metric, desired output format — the more usable the output is.

### Explaining Queries to Non-Technical Stakeholders

Data analysts frequently need to explain what a query does without losing their audience in syntax.

**Example prompt:**

> Explain the following SQL query in plain English for a non-technical business stakeholder who understands the concept of "customer retention" but not SQL:

> [paste query here]

> Keep it under [150 words]. Focus on what the query is measuring, not how it works technically.

### Debugging and Optimizing

**Example prompt:**

> I'm getting an error when running this PostgreSQL query: [paste query]. Error message: [paste error]. What's causing it, and what's the fix? Also, if there are any performance improvements (e.g., index suggestions, rewriting CTEs), flag those too.

### Writing Data Documentation

**Example prompt:**

> Write a data dictionary entry for the following table in our analytics warehouse: [table name: fct_orders]. Columns: [order_id (PK), customer_id, created_at, status (values: pending, confirmed, shipped, delivered, cancelled), gmv, discount_amount, net_revenue]. Include: [column descriptions, data types, business definitions for non-obvious columns, and any known quirks or caveats]. Format for [Notion].

## Analysis and Insight Narratives

### Structuring an Analysis Summary

The hardest part of analysis isn't finding the insight — it's communicating it clearly to people who didn't do the work.

**Example prompt:**

> I ran an analysis and found the following: [our customer churn rate increased from 3.2% to 5.1% MoM in February. The increase was concentrated in customers with fewer than 90 days tenure. Customers using 3+ features churned at 1.8% vs 7.4% for those using 1-2 features.]. Write an executive summary of this finding. Include: [1-2 sentence headline insight, supporting data points, likely root cause hypothesis, and 2-3 recommended actions]. Audience: [VP of Product and VP of Customer Success]. Tone: [direct and action-oriented — not academic].

### Turning Data into a Narrative

Numbers without narrative rarely change behavior. The analyst who can tell a story with data is the one who gets heard in leadership meetings.

**Example prompt:**

> Help me write a data story for a business review. The key finding is: [customers who complete our onboarding checklist within the first 7 days have 3x higher 6-month retention]. Context: [we currently have a 34% checklist completion rate at Day 7]. I want to make a case for [investing engineering resources in improving the onboarding flow]. Structure the narrative as: [hook → insight → so what → proposed action → expected impact]. Keep it under [300 words].

### Hypothesis Generation

**Example prompt:**

> I'm seeing [a 22% drop in daily active users for our mobile app over the past 3 weeks]. What are the most likely hypotheses I should investigate? Consider: [we shipped a new onboarding flow 25 days ago, a competitor launched a free tier last month, and we changed our notification cadence 2 weeks ago]. List the top 5 hypotheses ranked by likelihood, and for each, suggest [what data I'd need to confirm or rule it out].

### A/B Test Write-Ups

**Example prompt:**

> Write a results summary for an A/B test. Setup: [we tested a new checkout flow (variant) vs the existing flow (control) for 3 weeks, N=12,400 per group]. Results: [conversion rate: control 3.8%, variant 4.5%, p-value 0.03, 90% CI [0.3%, 1.1%]]. Business context: [each percentage point of conversion is worth ~$40K/month in revenue]. Write a results summary including: [test overview, key metrics, statistical significance, business impact, and recommendation]. Audience: [Head of Growth and CTO]. Tone: [crisp and decisive].

## Stakeholder Communication

### Weekly and Monthly Report Templates

**Example prompt:**

> Write a weekly analytics report template for a [B2C e-commerce] business. Sections to include: [top-line metrics (GMV, orders, AOV, conversion rate), week-over-week changes with commentary, top 3 insights this week, upcoming analyses planned]. Format: [concise — under one page — with a traffic-light indicator system (🟢🟡🔴) for each metric based on performance vs targets]. Make it easy for a non-technical exec to skim in under 2 minutes.

### Presenting Findings Without Being Present

Analysts often send findings to stakeholders who read them asynchronously. The document needs to stand on its own.

**Example prompt:**

> I need to write a self-contained analysis doc that explains [why our mobile app's D30 retention is 12 points lower than desktop]. The reader is [a product manager who understands retention metrics but hasn't seen this analysis]. Structure the doc with: [TL;DR at the top (3 bullet points), methodology note (2 sentences), key findings with supporting data, root cause analysis, and recommended next steps]. Assume they won't read every word — design for skimmability.

### Responding to Ad-Hoc Data Questions

**Example prompt:**

> A senior stakeholder just asked me: "[Why did revenue drop 8% last Tuesday?]". I've found that [the drop was caused by a 2-hour payment processing outage between 2-4 PM EST affecting 340 orders]. Write a concise Slack response that: [answers the question directly, explains the root cause in non-technical terms, quantifies the impact, and says what's being monitored going forward]. Under [100 words].

### Pushing Back on Bad Data Requests

One of the most valuable things an analyst can do is push back on requests that will produce misleading results. Doing it well is a communication skill.

**Example prompt:**

> A stakeholder asked me to [compare this month's revenue to last month's, and the month before, to show a trend]. The problem is [this month only has 18 days of data, which will make it look like a drop even if the daily rate is the same or higher]. Write a short Slack reply that: [acknowledges the request, explains why the comparison would be misleading, and proposes a better alternative (daily run rate comparison)]. Tone: [helpful and collaborative, not condescending].

## Documentation and Knowledge Management

### Writing Analysis Documentation

**Example prompt:**

> Write documentation for an analysis I completed: [a churn prediction model built in Python using logistic regression, trained on 18 months of customer data, features include: tenure, product usage score, NPS, support ticket count, plan type]. Document: [what the model predicts, how it was built (high-level, non-technical), how to interpret the output score, known limitations, and when to use/not use the model]. Audience: [customer success managers who will act on the predictions but won't build or maintain the model].

### Creating Data Request Templates

**Example prompt:**

> Write a data request template that stakeholders in our company can fill out when they need analysis from the data team. Include fields for: [business question (not just a metric request), why it matters and by when, data sources they think are relevant, what decisions will be made with the output, and who the analysis is for]. Add brief instructions above each field explaining what good vs bad inputs look like. Keep it short enough that people will actually fill it out.

### Onboarding New Analysts

**Example prompt:**

> Write an onboarding guide section for a new data analyst joining our team. Topic: [how we define and calculate our core retention metric — Day 30 retention]. Cover: [the business definition, the SQL pattern we use, edge cases to watch out for (e.g., users who signed up via trial vs paid), how this metric is used in reporting, and common mistakes new analysts make with it]. Tone: [practical and direct — written by a peer, not a manager].

---

## Why the Analyst Who Communicates Well Wins

The best data analysts aren't the ones who write the most complex SQL. They're the ones who translate complexity into clarity — who can sit in a leadership meeting, explain a counterintuitive finding, and have the room trust them.

AI accelerates the technical side. But the bigger unlock is using it to remove the communication friction: the blank Slack draft, the report that's technically correct but doesn't get read, the analysis that nobody acts on.

The prompts above won't make you a better analyst. They'll free up the time you'd spend on first drafts so you can spend more of it thinking — which is where the real value is anyway.

---

**Looking for a ready-made prompt library for your analytics work?** Browse the [Workshift AI Prompt Toolkits](/products) — built for professionals who want to go faster without starting from scratch.
