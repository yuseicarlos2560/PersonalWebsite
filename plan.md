# Implementation Plan: Personal Website Improvements for Big Tech Recruiters in China

## Context & Goal
Target: Recruiters at international/foreign big tech firms in mainland China (e.g., Google China, Microsoft China, Apple China, Tesla China, ByteDance, Tencent, Alibaba, Ant Group, etc.) seeking Product Management roles.

## Expert Persona: The Recruiter + Senior PM Conversation

**What a Senior PM at a big tech firm in China would say:**
- "We need someone who can own a problem end-to-end, not just execute tasks."
- "Show me the user/business problem, your process, and the outcome. Quantify everything."
- "Cross-functional collaboration is table stakes. Tell me HOW you aligned stakeholders."
- "I want to see product thinking, not just engineering output."
- "For China roles, cultural fluency and bilingualism are massive differentiators."

**What a Recruiter at a big tech firm in China would say:**
- "I scan 200 resumes a day. Make it easy for me to see your impact in 10 seconds."
- "Keywords matter for ATS. 'Product Manager', 'A/B testing', 'roadmap', 'metrics' — use them."
- "I share links on WeChat. Your link preview and mobile experience must be perfect."
- "A downloadable PDF is non-negotiable for our internal process."
- "Chinese recruiters prefer structured, scannable content."

---

## Section 1: Product Case Studies (HIGHEST PRIORITY)

### Why This is #1
A case study format is the gold standard for PM portfolios. It demonstrates:
1. **Problem-first thinking** — PMs don't just build; they identify problems worth solving.
2. **Process rigor** — Shows you can work through ambiguity using frameworks.
3. **Quantified outcomes** — Big tech loves metrics. $500K and $1.5M are attention-grabbing numbers.
4. **Stakeholder management** — Critical for China tech where cross-team alignment is notoriously difficult.

### Case Study 1: Billing Anomaly Detection ($500K Recovery)
**Framing:** Not "I wrote Python scripts" but "I identified a systemic revenue leakage problem and built a solution."

**Structure:**
- **Problem:** AWS had a billing discrepancy pattern across large-scale usage datasets that was costing ~$500K annually. No systematic monitoring existed.
- **My Role:** Led the data analysis and remediation effort. Owned the quantitative validation and cross-functional coordination with Finance and Engineering.
- **Process:**
  - Used SQL + Python to analyze telemetry and identify anomaly patterns.
  - Quantified the financial impact to secure buy-in from Finance leadership.
  - Coordinated remediation across Engineering (to fix root cause) and Finance (to reconcile accounts).
- **Outcome:** Recovered ~$500K in billing discrepancies. Established ongoing monitoring practices.
- **Skills demonstrated:** Data analysis, financial acumen, cross-functional leadership, problem identification.

### Case Study 2: Time-Series Forecasting for Cloud Capacity ($1.5M CapEx Savings)
**Framing:** Not "I built a model" but "I used ML to optimize a business-critical resource allocation problem."

**Structure:**
- **Problem:** Cloud capacity was either over-provisioned (wasting CapEx) or under-provisioned (risking outages). Annual waste estimated in the millions.
- **My Role:** Built and validated forecasting models. Owned the feature engineering pipeline and back-testing methodology.
- **Process:**
  - Applied feature engineering on telemetry data to improve model inputs.
  - Built and back-tested time-series forecasting models in Python.
  - Validated model accuracy against historical data before production deployment.
- **Outcome:** Reduced annual CapEx by ~$1.5M through optimized capacity planning.
- **Skills demonstrated:** ML/AI application to business problems, data-driven decision making, cost optimization, technical depth.

### Case Study 3: AWS Lambda Managed Instances (Supporting Experience — NOT a "directed" claim)
**The user's concern:** "I didn't direct the whole thing but I worked owning part of the infrastructure for the core service and I worked across several teams."

**Expert PM advice:** This is actually a STRENGTH for a PM candidate. PMs rarely "direct everything" — they influence without authority. The key is framing it as **cross-functional ownership and stakeholder alignment**.

**Framing:** "Core Infrastructure Ownership in Cross-Functional Launch"
- **Context:** AWS Lambda Managed Instances was a major product launch requiring coordination across multiple service teams.
- **My Role:** Owned a critical piece of the core infrastructure. Acted as the subject matter expert (SME) for my domain.
- **Process:**
  - Resolved blocking dependencies across teams to keep the launch on track.
  - Authored internal best practices that were adopted organization-wide.
  - Served as the go-to expert for cross-team questions and integration issues.
- **Outcome:** Successful launch of a major AWS feature. My best practices became organizational standards.
- **Skills demonstrated:** Cross-functional collaboration, technical ownership, influence without authority, knowledge sharing.

**Why this framing works:** It shows humility (didn't claim to "direct everything") while highlighting the exact PM skills recruiters want: stakeholder management, unblocking teams, and establishing best practices.

### Implementation Notes
- Add a new "Case Studies" section in the nav between "Experience" and "Publications."
- Use a card-based layout with clear visual hierarchy.
- Each case study should have: title, role tag, metrics highlight, brief narrative, and skills tags.
- Keep it scannable — recruiters spend 10-30 seconds per section.

---

## Section 2: Skills & Tools Section

### Why This Matters
- **ATS optimization:** Recruiters search for keywords like "SQL", "Python", "A/B testing", "Jira", "roadmapping."
- **Quick scanning:** A consolidated skills section lets recruiters verify fit in seconds.
- **Keyword density:** Helps with both human scanning and automated filtering.

### What to Include (categorized)
- **Product Management:** Product Strategy, Roadmapping, A/B Testing, User Research, PRD Writing, Stakeholder Management, Metrics & Analytics (DAU, Retention, LTV)
- **Data & Engineering:** Python, SQL, Data Analysis, Machine Learning, Deep Learning, Time-Series Forecasting, AWS (Lambda, S3, etc.)
- **Tools:** Jira, Confluence, Git, Tableau/PowerBI (if applicable), Excel
- **Languages:** English (Native), Spanish (Native), Mandarin Chinese (Professional — HSK 4)
- **Soft Skills:** Cross-Functional Leadership, Bilingual Communication, Global Team Collaboration

### Implementation Notes
- Add between "Awards" and "Fun Facts" (or restructure as "Personal Brand").
- Use a categorized grid or tag cloud.
- Preserve ALL existing certifications — this section is additive, not replacement.

---

## Section 3: Transform "Fun Facts" → "Personal Brand / Beyond the Code"

### Why This Matters for China Tech Recruiters
- **Cultural fit is huge in China:** Companies want to know who you are as a person.
- **Differentiator:** A trilingual breakdancer who has lived in 3 countries is memorable. In a stack of 200 resumes, this gets you remembered.
- **Foreign firms in China specifically need cultural bridges:** Your background signals you can work across Western and Chinese business cultures.
- **Authenticity:** Recruiters can spot generic "interests" sections. Yours is genuinely unique.

### Framing
- Rename section to "Beyond the Code" or "About the Person Behind the Product."
- Write 2-3 sentences connecting each interest to professional skills:
  - **Breakdancing:** "3+ years of competitive breakdancing taught me discipline, creativity under pressure, and performing in high-stakes environments."
  - **Global living:** "Living across Asia and the Americas shaped my ability to navigate cultural differences — a skill I apply daily in cross-functional product teams."
  - **Mandarin:** "Learning Mandarin to professional fluency (HSK 4) reflects my commitment to deep cultural immersion, not just surface-level adaptation."

### Implementation Notes
- Keep the circular photos but add the narrative text.
- Make it feel personal but professional — not a resume, but a story.

---

## Section 4: Chinese Translation Optimization

### Why This Matters
- **Trust signal:** Native-sounding Chinese builds immediate credibility.
- **Industry terminology:** Chinese tech has specific jargon. Using the right terms signals insider knowledge.
- **Recruiter psychology:** A mainland recruiter reading polished Chinese feels "this person gets China."

### Key Optimizations
- Ensure all PM-related terms use standard Chinese tech industry language:
  - "Product Manager" = "产品经理" (not just "产品专家")
  - "A/B Testing" = "A/B测试" or "灰度测试"
  - "Roadmapping" = "产品路线图规划"
  - "Cross-functional" = "跨部门协同" (already good)
  - "Metrics" = "数据指标" / "核心指标"
  - "Stakeholder management" = "利益相关方管理"
  - "User research" = "用户调研"
- Review all case study translations for natural flow.
- Keep the tone professional but approachable — Chinese business writing tends to be slightly more formal than English.

---

## Section 5: On the Mandarin Learning Platform (WIP Project)

### Recommendation: SKIP for now, but prepare for later.

**Reasoning:**
- A backend-only project is hard to showcase visually. Recruiters want to see and interact.
- "Work in progress" signals unfinished thinking. Better to launch it when it's complete.
- **However:** You can mention it briefly in the case studies or personal brand section as "currently building a Mandarin learning platform" to show ongoing product initiative.
- **When to add:** Once you have a frontend + demo video or live link.

### Alternative: Add a "Currently Building" teaser
- A small card in the case studies section: "Mandarin Learning Platform — In Progress"
- 1 sentence about the problem you're solving.
- No link yet. Just signals initiative.

---

## Summary of Changes

| Section | Action | Priority |
|---------|--------|----------|
| Product Case Studies | Add 3 case studies (Billing, ML CapEx, Lambda cross-functional) | 🔴 Critical |
| Skills & Tools | Add new categorized section | 🔴 High |
| Personal Brand | Rename and reframe Fun Facts | 🟡 Medium |
| Chinese Translation | Optimize terminology and flow | 🟡 Medium |
| WIP Project | Skip for now, add teaser if desired | 🟢 Low |

---

## Files to Modify
1. `index.html` — Add new sections, update nav, add case study HTML
2. `style.css` — Style new sections (case study cards, skills grid, personal brand)
3. `translations.json` — Add all new text keys in EN and ZH, optimize existing ZH
4. `script.js` — No changes needed (translation system already supports data-key)
