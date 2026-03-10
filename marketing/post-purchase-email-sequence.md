# Workshift — Post-Purchase Email Sequence

These go out automatically after someone buys a toolkit. Use Resend or another transactional email service.

---

## Email 1 — Immediate (sent at purchase)
**Subject:** Your Workshift toolkit is ready

Hi there,

Your [TOOLKIT NAME] is ready to download.

[DOWNLOAD BUTTON]

A few tips to get the most out of it in the next 10 minutes:

1. **Pick one category** — Don't try to use every prompt at once. Start with the section that solves your most annoying daily task.

2. **Fill in the brackets completely** — The [BRACKETED PLACEHOLDERS] are where your context goes. The more specific you are, the better the output.

3. **Works with any AI** — ChatGPT (GPT-4 or above), Claude, or Gemini. All three work great.

If you run into anything, reply to this email. I read every one.

— Jan
Workshift

P.S. Your download link will work for 30 days. If you need it re-sent after that, just ask.

---

## Email 2 — Day 3 (Check-in)
**Subject:** How's the toolkit going?

Hi,

You grabbed the [TOOLKIT NAME] a few days ago — just checking in.

The most common feedback I get at this stage: "I wasn't sure where to start."

If that's you, here's the shortcut:

**Go to the first section** of your toolkit. Find the prompt for the thing you hate writing most. Use it on one real task today.

That's it. Don't overthink it. One prompt, one task, see how it feels.

If it's not clicking, reply and tell me what you're trying to do. I'll help you get a better result.

— Jan

---

## Email 3 — Day 7 (Upgrade / Cross-sell)
**Subject:** One more thing you might find useful

Hi,

A week in — hope the toolkit has been saving you time.

Quick note: a lot of [TOOLKIT NAME] buyers also find the [RELATED TOOLKIT] useful, especially for [SPECIFIC USE CASE THAT OVERLAPS].

If you're doing work that touches both areas, it might be worth a look: [LINK TO RELATED TOOLKIT]

No pressure — just figured I'd mention it since it comes up a lot.

Also: if the toolkit has been useful, I'd genuinely appreciate a quick reply telling me how you've used it. That kind of feedback helps me build better tools.

— Jan

---

## Email 4 — Day 14 (Value / Referral Ask)
**Subject:** A prompt I didn't include in the toolkit

Hi,

Here's a prompt I've been using a lot lately that didn't make it into the original toolkit:

> "Review what I just wrote and tell me: Is the core message clear? Is the tone right for the audience? Are there any confusing parts? What would you cut? [PASTE YOUR TEXT]"

This is my editing prompt. I use it after I've drafted something to get a fast second opinion before sending. It's surprisingly useful — it catches things I'd miss after staring at text too long.

Hope it's helpful.

One last thing: if the toolkit has been valuable to you, the best thing you can do is tell a colleague or friend who does similar work. Word of mouth is how Workshift grows. I appreciate it more than you know.

— Jan

---

## Mapping: Toolkit → Related Toolkit (for Email 3)

| Bought | Suggest |
|--------|---------|
| Real Estate | Business Owner |
| Product Manager | Scrum Master |
| Scrum Master | Product Manager |
| Marketing | Sales Rep |
| Sales Rep | Marketing |
| HR & Recruiter | Business Owner |
| Financial Advisor | Business Owner |
| Teacher | Customer Success Manager |
| Customer Success | Sales Rep |
| Business Owner | Marketing |
| Mechanic | Contractor |
| Contractor | Mechanic |
| Personal Trainer | Business Owner |
| Restaurant Owner | Marketing |
| UX Research | Product Manager |

---

## Implementation Notes
- Send from: Jan <jan@workshift.store> or helloworkshift@gmail.com via Resend
- Use Resend's API in the webhook handler to trigger the sequence
- Day 1: triggered by Stripe webhook on checkout.session.completed
- Days 3, 7, 14: scheduled sends from Resend or a simple cron + Supabase record of purchase date
- Keep all emails short — under 200 words. These are people who bought a productivity tool. They don't want long emails.
