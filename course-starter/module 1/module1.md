# Module 1: Fundamentals — Student Instructions

**Work Setting:** You had a chat with VP, Growth and he thinks it's time to start attending conferences to increase Pawprint's visibility and generate leads. You agree and decide to research a list of conferences Pawprint should attend this year or next year.

**Learning Objectives:** In this module, you’ll get a tour of Adal CLI, learn how to use files for context and use search agents to perform research.

## 1.1 — Read Core Context Files

As Jordan, you'd want to start by grounding yourself in the company and user context.

**Prompt in AdaL**
```bash
Refer to @course-starter/Pawprint/01_Company_Brief.md Summarize in 6-8 bullets: Pawprint business model, current product stage, and top company constraints.
```
---

## 1.2 — Multi-File Synthesis with @ Mentions

Let's combine context across files into one decision-ready artifact. Our goal is traceable synthesis, not generic summary.

**Prompt in AdaL**
```bash
Refer @course-starter/Pawprint/01_Company_Brief.md @course-starter/Pawprint/02_Personas.md files to create module1_2_persona_insights.md with: top three pain points for Emma, top three purchase/usage drivers for Marcus, one shared need, one critical difference that should influence roadmap decisions. Cite source file + section heading for each claim.
```

## 1.3 — Conference Research (1-Page Brief)

Now, we will use search agents to research industry conferences and make  a memo document.

**Prompt in AdaL**
```bash
Reference @course-starter/Pawprint/01_Company_Brief.md and @course-starter/Pawprint/03_OKRs_Roadmap.md for context. Search the web and research 3 veterinary or pet industry conferences happening in 2026 or 2027 that would be relevant for Pawprint to attend as a sponsor or exhibitor.

For each conference, find and report:
- Conference name and organizing body
- Date and location
- Estimated attendance and whether vets, vet techs, or practice owners attend
- Sponsorship or exhibitor tiers available and rough cost if public
- Why it's relevant for Pawprint's vet partner acquisition goals
- Estimated ROI potential - new vet leads we could realistically generate

Format your output as a single-page conference research report and use a clean table for the comparison and add a short recommendation at the bottom on which conference to prioritize first and why.

```

---
