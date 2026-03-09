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
- **vibe-coding-project** — Pawprint web app students run locally for software development tasks

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
| 0.4 | Your First Conversation — Explore the Repo | Student uses Adal to explore the Pawprint course-starter repo and ask questions about the company |

---

## Module 1 🔵 — Fundamentals: A Tour of Adal CLI
> *Master file ops, research, image work, and PM-focused workflows using Pawprint as your practice company.*

**Goal:** Build comfort with core Adal features through realistic PM tasks. Every lesson produces a tangible output.

| Lesson | Title | Description |
|--------|-------|-------------|
| 1.1 | Welcome to PM Lab | Introduction to Pawprint as a practice company. Tour of the course-starter repo: company brief, personas, OKRs |
| 1.2 | File Operations & @-mentions | Read, write, and edit PM docs using `@file` mentions. Exercise: summarize a persona and update a field in the OKRs doc |
| 1.3 | Web Search for PM Research | **[Conference Arc — Part 1]** PM researches 3 veterinary/pet industry conferences to potentially sponsor. Output: single-page report with conference details and estimated ROI for Pawprint |
| 1.4 | Skills & Plugins — Install Document Skills | Install PDF, Excel, PowerPoint, and Word document skills. Exercise: export the conference report as a formatted PDF |
| 1.5 | MCP Overview — What It Is and Why It Matters | Conceptual primer on MCP. Introduction to the MCPs used throughout the course (including Paper). Forward-reference to Module 3. No hands-on exercise — orientation only |

---

## Module 2 🟣 — Advanced PM Work
> *Apply everything to real PM deliverables: PRDs, competitive intelligence, strategic decisions, and stakeholder communication.*

**Goal:** Simulate the core output of a founding PM — documents and decisions that move the company forward.

| Lesson | Title | Description |
|--------|-------|-------------|
| 2.1 | Write a PRD — Using Custom Agent Skills | Build a full PRD for a Pawprint feature using a custom agent skill. Exercise: write the PRD for the AI Symptom Checker v2 (Q1 roadmap item) |
| 2.2 | Competitive Intelligence — Parallel Research + Strategic Synthesis | Use parallel web research to inform Pawprint's competitive landscape. Exercise: research four competitors (e.g. Dutch or Vetster) and synthesize findings into a competitive doc |
| 2.3 | Plan Mode / Think Mode — Deep Reasoning for Complex PM Decisions | **[Conference Arc — Part 2]** CEO + CTO push back on the conference idea and ask the PM to formally evaluate all options: Sponsor, Exhibit, Host, or No Conference. Student uses Think Mode to reason through tradeoffs and produce a recommendation memo |
| 2.4 | Product Strategy Deck — Generate a PowerPoint via Document Skills | Use the PowerPoint document skill to generate a strategy deck. Exercise: build a Series B readiness narrative deck for Pawprint leadership |

---

## Module 3 🟡 — Adal for Software Development & Data Analysis
> *Connect Adal to the engineering tools PMs use every day. Do lightweight prototyping and data analysis.*

**Goal:** Give the founding PM fluency in the technical surface area they own — without needing an engineer or analyst on call.

| Lesson | Title | Description |
|--------|-------|-------------|
| 3.0 | Design from Terminal | Install and configure the Paper MCP. Brief intro to Paper as a web builder tool. Sets up the environment for 3.1 |
| 3.1 | Build the Conference Homepage | **[Conference Arc — Part 3]** Management approved hosting. PM uses Paper MCP via Adal to build the Pawprint conference landing page |
| 3.2 | Analyze Data — Attendee Analysis & Leads | Work with synthetic conference attendee data. Exercise: load a CSV, run analysis, and produce a post-conference leads summary |
| 3.3 | GitHub Integration — Bridge Product and Engineering | Connect Adal to GitHub. Exercise: Write a bug ticket|

---

## Module 4 🍌 — Adal for Content Creation
> *Use Adal's image generation to create PM visuals without a designer.*

**Goal:** Enable the founding PM to produce launch-quality visual assets independently — persona cards, journey maps, and GTM materials.

**Note:** Image generation in this module is powered by Gemini Nano Banana — Adal's built-in image generation feature. Lesson 4.0 covers what it is and how to prompt it effectively.

| Lesson | Title | Description |
|--------|-------|-------------|
| 4.0 | Introduction to Gemini Nano Banana | What it is and how to write effective image prompts for PM use cases |
| 4.1 | Generating User Persona Cards | Create visual persona cards for Emma, Marcus, Sarah, and David using the Pawprint persona doc as source material |
| 4.2 | Creating Journey Map Visuals | Generate a visual journey map for the core Pawprint user flow: symptom → triage → consult → prescription |
| 4.3 | Marketing & Launch Assets for GTM | Create a set of launch assets for the Pawprint conference — social card, announcement banner, and email header |

---

## Appendix: Pawprint Reference Files

All context files live in the `course-starter` repo under `/pawprint`:

| File | Purpose |
|------|---------|
| `01_Company_Brief.md` | Company overview, business model, metrics, org chart |
| `02_Personas.md` | 4 pet owner personas + 1 vet persona |
| `03_OKRs_Roadmap.md` | Quarterly OKRs and product roadmap (Mar 2026 — Feb 2027) |

---

## Founding PM Responsibility Coverage

| Founding PM Responsibility | Covered In |
|---|---|
| Core product ownership (onboarding, symptom checker) | 2.1 |
| Vet-facing tools (dashboard, intake) | 2.1 |
| Roadmap coordination | 1.2, 2.1 |
| Competitive research | 2.2 |
| Strategic decision-making under ambiguity | 2.3 |
| Stakeholder communication | 2.4 |
| Light data analysis (no dedicated analyst) | 3.2 |
| Engineering collaboration (no TPM) | 3.3 |
| GTM assets (no dedicated designer) | 4.1–4.3 |
| Conference / growth initiatives | 1.3, 2.3, 3.1 |

---

*Structure version 1.0 — subject to change as lesson files are authored*