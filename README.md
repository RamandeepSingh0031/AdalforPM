# Adal CLI for Product Managers — Course Structure

**Course:** Adal CLI for PMs  
**Reference Company:** Pawprint (veterinary telehealth, Series A)  
**Format:** Open source GitHub repo  
**Last Updated:** March 2026

---

## Course Overview

This course teaches product managers how to use Adal CLI through hands-on PM workflows set inside Pawprint — a realistic Series A startup. Students work as the founding PM, owning a broad scope across core product, roadmap coordination, and light analytics.

The course is structured across two directories:

- **course-starter** — Pawprint context files, lesson instructions, and exercise prompts
- **vibe-coding project** — Pawprint web app students run locally for software development tasks

---

## Project Directory Structure

```
adal-for-pm-course/
│
├── README.md (this file)
│
├── 📁 course-starter/
│   ├── Course Content Structure.MD
│   ├── 📁 Pawprint/
│   │   ├── 01_Company_Brief.md
│   │   ├── 02_Personas.md
│   │   ├── 03_OKRs_Roadmap.md
│   │   ├── 04_Vet_Summit_2026.md
│   │   ├── 05_conference_attendees.csv
│   │   └── 06_Lead_Scoring_Logic.md
│   ├── 📁 module 0/
│   │   └── module0.md
│   ├── 📁 module 1/
│   │   └── module1.md
│   ├── 📁 module 2/
│   │   └── module2.md
│   └── 📁 module 3/
│       └── module3.md
│
├── 📁 vibe-coding project/
│   ├── package.json
│   ├── package-lock.json
│   └── 📁 pawprint-app/
│       ├── package.json
│       ├── vite.config.js
│       └── 📁 src/
│           ├── main.jsx
│           ├── App.jsx
│           └── 📁 pages/
│               ├── Home.jsx
│               ├── Conference.jsx
│               ├── ForVets.jsx
│               ├── PetOwners.jsx
│               └── Pricing.jsx
```

---

## Narrative Thread: The Conference Sprint

A story arc runs through Modules 1, 2, and 3 to simulate a realistic PM sprint:

| Step | Module | What happens |
|------|--------|--------------|
| **Research** | 1.3 | PM researches 3 conferences to potentially sponsor. Produces a single-page report with ROI estimates. |
| **Decision under pressure** | 2.3 | Senior management (CEO + CTO) likes the idea but pushes back. PM must evaluate Sponsor vs. Exhibit vs. Host vs. No Conference using deep reasoning mode. |
| **Build** | 3.1 | Management greenlights hosting. PM uses Paper (via MCP) to build the conference landing page. |

---

## Module 0 🟢 — Getting Started: What is Adal CLI?
> *Install Adal, choose your interface, and set up your PM workspace.*

**Goal:** Remove all setup friction. Student ends this module with Adal running and a feel for the tool before any real work begins.

| Lesson | Title | Description |
|--------|-------|-------------|
| 0.0 | Introduction — Why Terminal for PMs? | Overview of why Terminal for knowledge work, and course structure |
| 0.1 | Installation & First Launch | `npm install -g @sylphai/adal-cli` — single command setup |
| 0.2 | CLI vs. Web — Choosing Your Interface | When to use `adal` vs `adal --web` and how to switch |
| 0.3 | Essential Commands & Shortcuts Reference | Quick reference card for the commands used throughout the course |

---

## Module 1 🔵 — Fundamentals: A Tour of Adal CLI
> *Master file ops, research, and PM-focused workflows using Pawprint as your practice company.*

**Goal:** Build comfort with core Adal features through realistic PM tasks. Every lesson produces a tangible output.

| Lesson | Title | Description |
|--------|-------|-------------|
| 1.1 | Welcome to PM Lab | Introduction to Pawprint. Tour of the course-starter repo: company brief, personas, OKRs |
| 1.2 | File Operations & @-mentions | Read, write, and edit PM docs using `@file` mentions. Exercise: summarize a persona and update a field in the OKRs doc |
| 1.3 | Web Search for PM Research | **[Conference Arc — Part 1]** PM researches 3 veterinary/pet industry conferences to potentially sponsor. Output: single-page report with conference details and estimated ROI for Pawprint |

---

## Module 2 🟣 — Advanced PM Work
> *Apply everything to real PM deliverables: PRDs, competitive intelligence, strategic decisions, and stakeholder communication.*

**Goal:** Simulate the core output of a founding PM — documents and decisions that move the company forward.

| Lesson | Title | Description |
|--------|-------|-------------|
| 2.1 | Skills & Plugins — Install Document Skills | Install PDF, Excel, PowerPoint, and Word document skills.
| 2.2 | Think Mode — Deep Reasoning for Complex PM Decisions | **[Conference Arc — Part 2]** CEO + CTO push back on the conference idea and ask the PM to formally evaluate all options: Sponsor, Exhibit, Host, or No Conference. Student uses Think Mode to reason through tradeoffs and produce a recommendation memo |
| 2.3 | Competitive Intelligence — Parallel Research + Strategic Synthesis | Use parallel web research to inform Pawprint's competitive landscape. Exercise: research four competitors (e.g. Dutch or Vetster) and synthesize findings into a PDF |
| 2.4 | Write a PRD — Using Custom Agent Skills | Build a full PRD for a Pawprint feature using a custom agent skill. Exercise: write the PRD for the AI Symptom Checker |

---

## Module 3 🟡 — Adal for Software Development
> *Connect Adal to the engineering tools PMs use every day. Do lightweight prototyping.*

**Goal:** Give the founding PM fluency in the technical surface area they own.

| Lesson | Title | Description |
|--------|-------|-------------|
| 3.0 | MCP Overview — What It Is and Why It Matters | Conceptual primer Comparing Docx Skill vs FileSystem MCP. Install and configure the Paper MCP. Brief intro to Paper as a web builder tool. Sets up the environment for 3.1 |
| 3.1 | Build the Conference Homepage | **[Conference Arc — Part 3]** Management approved hosting. PM uses Paper MCP via Adal to build the Pawprint conference landing page |
| 3.2 | GitHub Integration — Bridge Product and Engineering | Connect Adal to GitHub. Exercise: Write a bug ticket |


---

## Module 4 🍌 — Adal for Content Creation
> *Use Adal as your creative studio to generate a full Go-To-Market (GTM) content package.*

**Goal:** Enable the founding PM to produce launch-quality visual and written assets independently — from briefs to speaker cards, HTML emails, and social copy.

| Lesson | Title | Description |
|--------|-------|-------------|
| 4.1 | GTM Brief | Grounding the campaign strategy using existing PM docs |
| 4.2 | Speaker Cards | **[Conference Arc — Part 4]** Generate photorealistic speaker cards using Gemini image models |
| 4.3 | Email Header | Generate a production-ready HTML email header using the `frontend-design` skill |
| 4.4 | Social Copy | Draft data-backed LinkedIn and X posts for the event speakers |
| 4.5 | Asset Review & HandOff Package | Create a HandOff package for the Growth team |

---

## Module 5 📊  — Adal for Data Analysis
> *Use Adal's data analysis capabilities to uncover hidden flaws in your data, correct business logic, and produce accurate reporting.*

**Goal:** Enable the founding PM to use data analysis to solve a high-stakes business problem and communicate the resolution effectively.

| Lesson | Title | Description |
|--------|-------|-------------|
| 5.1 | Build the Post-Summit Lead Dashboard | Build an initial dashboard from the unverified attendee data to surface the highest-intent leads for Sales. |
| 5.2 | In the Weeds | **[Conference Arc — Part 5]** Sales flags that "Hot" leads are cold. Student forms hypotheses, audits the scoring model, discovers a massive flaw, and recalculates scores for the full pipeline. |
| 5.3 | The Follow-Up | Turn the corrected data into a self-contained, interactive HTML dashboard and draft accountable Slack communications to close the loop with Sales. |

---

## Appendix: Pawprint Reference Files

All context files live in the `course-starter` repo under `/Pawprint`:

| File | Purpose |
|------|---------|
| `01_Company_Brief.md` | Company overview, business model, metrics, org chart |
| `02_Personas.md` | 4 pet owner personas + 1 vet persona |
| `03_OKRs_Roadmap.md` | Quarterly OKRs and product roadmap (Mar 2026 — Feb 2027) |
| `04_Vet_Summit_2026.md` | Strategic context for the upcoming Vet Summit conference |
| `05_conference_attendees.csv` | Synthetic conference attendee dataset for Module 5 analysis |
| `06_Lead_Scoring_Logic.md` | Logic for classifying conference leads (Hot, Warm, Cold) |


---
