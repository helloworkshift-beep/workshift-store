<!-- Meta: How lawyers can use AI for contract review, research, drafting, and client work — without the risk. Practical prompts and a responsible AI practice guide. -->

# How Lawyers Can Use AI to Work Smarter (Without the Risk)

Every large law firm in the world is now experimenting with AI. Some are spending millions on proprietary tools. Others are quietly discovering that Claude, Anthropic's large language model, is already doing a significant portion of what those expensive systems promise.

But alongside legitimate excitement is legitimate caution. AI hallucinations, unverified citations, and confidentiality risks are real. The lawyers winning with AI right now aren't the most enthusiastic — they're the most disciplined. They've figured out exactly where AI adds value, where it introduces risk, and how to build a practice that captures the benefits without the landmines.

This guide covers both sides: where to use AI aggressively, where to hold the line, and how to do it without compromising your professional obligations.

---

## The Core Question: What Can AI Actually Do for Lawyers?

**AI can dramatically accelerate information processing, first-draft creation, and research organization. It cannot replace attorney judgment, verify its own citations, or carry professional responsibility.**

That's the whole framework. Everything else follows from it.

The tasks where AI earns its keep in a legal practice are tasks that require intelligence but not legal judgment: reading documents and extracting information, producing structured first drafts from provided facts, organizing research, drafting client communications, and synthesizing large amounts of material into manageable summaries.

The tasks where AI is dangerous are tasks where unverified output could harm a client, expose you to bar complaints, or embarrass you in front of a judge: citing cases without verification, submitting AI-generated work product without review, giving legal advice based on AI output.

---

## How Lawyers Are Using Claude Today

### 1. Contract Review and Analysis

This is the clearest win in legal AI. Contract review is information-intensive, structured, and well-defined — which makes it ideal for AI assistance.

**What Claude can do:**
- Read a contract and extract every instance of a specific clause type (indemnification, limitation of liability, termination for convenience, change-of-control, etc.)
- Compare contract language to a standard baseline and flag deviations
- Identify obligations, deadlines, and notice requirements
- Produce a structured summary organized by clause category
- Flag potentially one-sided or unusual provisions for attorney review

**What you provide:**
- The contract (or portion of it)
- A clear extraction brief or checklist
- Your standard language for comparison (optional but useful)

**A real prompt structure for contract review:**

```
You are reviewing a commercial services agreement on behalf of [party type]. 
Review the attached contract and produce a structured analysis covering:

1. Key parties and effective date
2. Scope of services (summarize precisely)
3. Payment terms (amounts, timing, late fees)
4. Indemnification clauses (quote relevant language, flag if it's unilateral)
5. Limitation of liability (caps, carve-outs)
6. Termination rights (for cause, for convenience, notice periods)
7. IP ownership and license grants
8. Governing law and dispute resolution
9. Any non-standard or unusual provisions that warrant attorney attention

For each section, indicate: [Standard / Slightly Non-Standard / Flag for Review].
Do not interpret legal consequences — surface and organize; attorney will advise.
```

**The output:** A structured summary that would have taken an associate 2–3 hours to produce. Now it takes 15 minutes to review and verify. The associate's time goes to judgment, not extraction.

**Caveats:** Claude will occasionally misread ambiguous language or miss nuances in complex cross-referenced definitions. Every flagged clause requires attorney review. Do not rely on AI analysis as the final read.

---

### 2. Legal Research Summaries

AI doesn't replace Westlaw or Lexis. It doesn't have reliable access to current case law, and it will hallucinate citations with disturbing confidence. This is a hard line.

**Where AI helps in research:**

**Synthesizing research you've already done.** Once you have 15 cases pulled from Westlaw, Claude can read the cases you upload and produce a synthesized summary of how courts have treated a specific issue, organized by jurisdiction, outcome, or key distinguishing factors. This is legitimate and useful.

**Explaining concepts and generating issue frameworks.** Asking Claude to explain the elements of a cause of action, outline the key issues in a contract dispute, or identify the questions an attorney should research — this is useful as a starting point and doesn't rely on Claude knowing current law.

**Drafting research memos from verified sources.** Provide verified cases, statutes, and regulations; ask Claude to draft the memo. The AI does the writing; you supply the verified authorities.

**What you must never do:**
- Cite a case Claude mentioned without verifying it in Westlaw or Lexis
- Assume a statute Claude quoted is current or correctly worded
- Submit a brief, memo, or filing with citations you haven't personally verified

The Mata v. Avianca case (2023), where attorneys were sanctioned for submitting ChatGPT-hallucinated citations, is not a cautionary tale — it's a bright line. Any AI-generated legal citation requires independent verification. Always.

---

### 3. Document Drafting

AI-assisted drafting is one of the highest-value applications for law firms. The efficiency gains are real.

**What works:**

**First drafts of routine agreements.** NDAs, consulting agreements, service agreements, licensing agreements — for standard transactions, Claude can produce a solid first draft from a detailed brief. An attorney reviews, adjusts, and finalizes. The time saved on the first draft is substantial.

**Demand letters and client correspondence.** Give Claude the facts, the legal claim, and the tone, and it will draft a competent demand letter or client update. Requires review and often adjustment — but the starting point is solid.

**Settlement agreements.** Provide the agreed terms; ask Claude to draft the agreement language. Much faster than starting from scratch; requires careful attorney review of every provision.

**Pleadings — with caution.** Claude can draft a complaint or motion from a detailed brief. Fact accuracy depends entirely on what you provide. Every citation must be verified. This is a first-draft tool, not a filing tool.

**Prompt structure for drafting:**

```
Draft a [document type] for the following transaction:

Parties: [Party A, description] and [Party B, description]
Purpose: [transaction purpose]
Key terms: [list all material terms — don't leave gaps for AI to fill]
Governing law: [jurisdiction]
Tone: [standard commercial / formal / simple/plain language for lay clients]

Include standard provisions for: [list what you want — representations, warranties, 
indemnification, dispute resolution, etc.]

Flag any gaps where you need additional information to complete the draft.
Output a complete draft, clearly labeled as a first draft for attorney review.
```

**The rule:** Every draft requires attorney review. Never send, file, or provide to a client without reading it carefully. AI drafts are starting points, not finished work product.

---

### 4. Client Communication

This is an underutilized but low-risk application. Client communications require clarity, not legal judgment — which makes them good AI territory.

**What AI helps with:**
- Translating legal analysis into plain-English client summaries
- Drafting status update emails from case notes
- Producing plain-language summaries of what complex agreements mean
- Answering routine procedural questions in email form ("what happens next in the process?")

**What it doesn't replace:**
- Legal advice — never draft AI output that constitutes advice without attorney review
- Sensitive communications — bad news, settlement discussions, anything requiring human judgment on tone and relationship

---

### 5. Deposition and Trial Preparation

**Deposition prep summaries.** Provide deposition transcripts; ask Claude to extract key admissions, produce a topic-organized summary, or flag inconsistencies with prior statements. Saves hours of transcript review.

**Document review in discovery.** For large document sets, AI can help categorize, prioritize, and summarize. Privilege review must remain human. Relevance determinations should be AI-assisted but attorney-confirmed.

**Trial exhibit organization.** Claude can help create exhibit summaries, cross-reference exhibit numbers to deposition references, and produce witness examination outlines from provided facts.

---

## What NOT to Let AI Do: The Hard Lines

These are the lines that, if crossed, create professional responsibility risk:

**1. Never cite without verification.**
Every case, statute, regulation, or authority in AI output requires independent verification in a legal database before use. No exceptions.

**2. Never submit unreviewed AI output.**
No AI-generated document should go to a client, opposing counsel, or a court without an attorney reading it carefully. "I used AI" is not a defense to sanctions or malpractice.

**3. Never input confidential client information into a public AI tool without consent and a data policy review.**
Understand where your data goes. Claude's consumer product (Claude.ai) has different data handling than Claude's API with appropriate enterprise agreements. Know which you're using. Consider anonymizing client data before input.

**4. Never let AI make legal judgments.**
AI can surface issues, identify clauses, and organize information. It cannot tell a client what to do, what their legal risk is, or whether to sign an agreement. That's legal advice, and it requires a licensed attorney.

**5. Never skip the final read.**
AI drafts often contain subtle errors — a cross-reference that doesn't exist, an obligation that shifts from one party to another in revision, a defined term used inconsistently. These don't jump off the page. They require careful reading.

---

## How to Build a Responsible AI Practice

### Step 1: Establish a clear AI policy for your firm

Define which tools are approved, under what conditions, and with what data-handling requirements. Address: client consent requirements, confidentiality obligations, verification requirements, and documentation of AI use in work product.

### Step 2: Identify your highest-value AI use cases

Pick 2–3 task types that are high-volume, time-intensive, and information-heavy. Contract review, research synthesis, and routine drafting are usually the winners. Start there.

### Step 3: Build standard prompts for each use case

Don't re-invent the prompt every time. Develop standard, tested prompts for your common tasks. Run them a dozen times, see where they fail, and refine. A good prompt library is a firm asset.

### Step 4: Create a verification workflow

Define how AI output gets verified before use. For document analysis: attorney spot-checks flagged sections against the original. For drafts: attorney reviews all material provisions. For research memos: every citation verified before inclusion.

### Step 5: Track what works

Keep notes on which prompts produce reliable output and which don't. Share what works across the firm. This is how you build institutional AI competency over time.

---

## The Competitive Reality

The lawyers who are not using AI right now are falling behind on economics. Not because AI makes better lawyers — it doesn't — but because AI-assisted lawyers can produce more work product in the same time.

The math is simple: if an associate using AI can produce a contract review in 45 minutes that used to take 3 hours, the firm that doesn't adopt AI is either billing 4x more for the same work (which is increasingly untenable as clients become aware of AI) or competing with a structural cost disadvantage.

Mid-size and smaller firms have a real opportunity here. The economics of AI tools favor the lean operation. A 5-attorney firm can deploy the same Claude capabilities as a 500-attorney firm — and the smaller firm often moves faster.

The competitive question isn't "should we use AI?" It's "how do we do it more systematically than the firm across the street?"

---

## Practical Prompts for Legal Work

**Contract Clause Extraction:**
```
Extract all indemnification provisions from the attached agreement. For each: 
quote the exact language, identify which party bears the obligation, note any 
carve-outs or caps, and flag if it's mutual or unilateral.
```

**Research Synthesis:**
```
I've attached [X] cases on [legal issue]. Synthesize how courts have treated 
[specific question]. Organize by: (1) majority approach, (2) minority approach, 
(3) key distinguishing factors. Do not cite any cases not in the attached materials.
```

**Plain-Language Client Summary:**
```
The attached agreement is a [document type]. Write a plain-English summary 
for a sophisticated business client (not a lawyer) explaining: what they're 
agreeing to, their key obligations, their key rights, and the 3 most important 
provisions to understand. Avoid legal jargon. Use plain language.
```

**Deposition Summary:**
```
Review the attached deposition transcript. Produce a summary organized by 
topic area. For each topic, quote the key testimony directly (with page/line 
references). Flag any apparent contradictions or admissions that may be significant.
```

---

## Frequently Asked Questions: AI for Lawyers

**Q: Can lawyers use AI for legal research?**
Yes, with critical limitations. AI cannot reliably cite current case law — always verify citations. AI excels at synthesizing research you've already gathered and organizing case materials you provide.

**Q: Is it ethical for lawyers to use AI?**
Yes, generally — and increasingly, competence may require it. Bar associations are issuing guidance, not prohibitions. The key obligations are: competent supervision, client confidentiality, and verification of AI output. Know your jurisdiction's guidance.

**Q: Can AI review contracts?**
Yes, effectively. AI is particularly strong at extracting specific clause types, flagging deviations from standard language, and producing structured summaries of complex agreements. Attorney review of AI output remains required.

**Q: What are the risks of using AI in legal practice?**
Hallucinated citations, unreviewed errors in drafts, confidentiality breaches if client data goes into public AI systems, and reliance on AI analysis without verification. All manageable with proper workflow design.

**Q: How do I handle client confidentiality with AI tools?**
Review the data policies of any AI tool before inputting client information. Enterprise agreements typically offer stronger protections than consumer products. Consider anonymizing sensitive data. Some firms adopt a policy of using AI only with non-confidential information until enterprise agreements are in place.

**Q: Which AI is best for legal work?**
Claude (Anthropic) is generally preferred for legal document work due to its larger context window (essential for long contracts), instruction-following reliability, and prose quality for drafting. See our full comparison: [Claude vs. ChatGPT for Professional Work](./claude-vs-chatgpt-for-work.md).

**Q: Can AI replace legal associates?**
No. AI can make associates significantly more productive. It cannot exercise legal judgment, carry professional responsibility, maintain client relationships, or make the contextual calls that define good lawyering. The associate who uses AI well outcompetes the associate who doesn't. The associate is not replaced by AI.

**Q: How should law firms train lawyers to use AI?**
Start with specific use cases (contract review, research synthesis) rather than general "AI training." Show the win first — demonstrate a workflow that saves 2 hours on a task everyone does. Then systematize.

**Q: What about AI-specific legal tools vs. general AI?**
Legal-specific tools (Harvey, CoCounsel, etc.) have legal databases, citation verification, and compliance features built in. General AI (Claude, GPT-4o) is more flexible, often cheaper, and very capable with the right prompts. Many firms use both.

**Q: Where can lawyers learn to use AI systematically?**
The [Workshift Course](https://workshift.store/course) covers AI for professional services, including practical workflows for document-intensive work. The [Workshift toolkit at workshift.store](https://workshift.store) includes prompt libraries for professional use cases.

---

## The Bottom Line

AI is not going to replace lawyers. It is going to replace lawyers who don't use AI — by making the lawyers who do use it significantly more productive and economically competitive.

The risks are real but manageable. The rules are clear: verify citations, review all output, protect client confidentiality, and keep legal judgment firmly in human hands.

The upside for lawyers who build a responsible, systematic AI practice is substantial: more work product, faster turnaround, lower cost-per-matter, and competitive positioning against firms still doing everything manually.

**Ready to build your legal AI practice systematically?** Start with the tools and frameworks at [workshift.store](https://workshift.store) — or take the full [Workshift Course](https://workshift.store/course) for a complete professional AI curriculum.
