---
name: prd-writer
description: >
  Use this skill whenever a Product Manager needs to draft, review, or improve a
  Product Requirements Document (PRD). This is a global skill for defining feature
  specs and product initiatives across any project. TRIGGER this skill whenever 
  the user mentions `"PRD`", `"product requirements`", `"feature spec`", `"one-pager for [feature]`", 
  or `"technical requirements for [feature]`". You MUST use this skill for formally
  defining any new feature or improvement, even if the user doesn't explicitly use 
  the word `"PRD.`" Do NOT use for high-level strategy memos or roadmap documents 
  unless a feature-level spec is required.
---

This skill guides the creation of clear, actionable, and well-structured PRDs that
give engineering, design, and business stakeholders everything they need to build the
right thing — without over-engineering the document.

Think of a PRD like a map before a road trip: it doesn't drive the car, but without it,
the team ends up somewhere different from where they intended. A good PRD is specific
enough to align decisions, flexible enough to survive contact with reality.

The user provides a feature idea, initiative brief, or partial draft. They may include
context from a company brief, OKRs, user personas, or competitive research.

### Bundled Resources
- **Template Script**: `scripts/generate_prd_template.py` - Run this script via BashTool to generate a clean markdown skeleton for a new PRD. Use it to ensure consistency across all product documentation.

---

## Step 1 — Understand Before Writing

Before drafting, internalize:

- **The problem**: What user pain or business gap does this feature address? Is it clearly defined?
- **The `"why now`"**: What OKR, metric, or strategic priority makes this the right time to build?
- **The scope**: Is this a project-level PRD (covers many features) or a feature-level PRD (covers one)?
- **The audience**: Who reads this? Engineers need clarity on behavior and edge cases. Execs need the `"so what.`" Design needs user scenarios.
- **What success looks like**: If you can't name a metric that moves, the PRD isn't ready.

> **If any of the above are unclear, ask before drafting.** A PRD built on a fuzzy problem will produce precise requirements for the wrong thing.

---

## PRD Structure

### 1. Header Block

Every PRD starts with a metadata table. Keep it short — this is for searchability and accountability, not prose.

```
Title:        [Feature or Initiative Name]
Author:       [PM Name]
Status:       [Draft / In Review / Approved / Backlog]
Last Updated: [Date]
Team:
  - PM:              [Name]
  - Engineering Lead: [Name]
  - Designer:        [Name]
Approvers:    [Names]
Epic Link:    [Link to Jira/Linear/etc.]
```

---

### 2. One-Pager (Executive Summary)

Four subsections, each 2–5 sentences max. This section should be readable in under 2 minutes.

**Overview**
What is the feature or product initiative? Who is it for? What does it do at a high level?
Avoid jargon. Write for someone who doesn't know the product deeply.

**Objectives**
What goals does this feature advance? List 2–4 concrete objectives tied to existing OKRs or strategy.

**Success Metrics**
Must be formatted as a table with quantifiable targets. Include qualitative guardrails if applicable (e.g., user sentiment).
| Type | Metric | Target |
|---|---|---|
| Primary | [North star impact] | [Specific # or %] |
| Secondary | [Leading indicators] | [Specific # or %] |
| Guardrail | [What must NOT get worse] | [Specific # or %] |
| Guardrail | [Qualitative metric, e.g., user anxiety survey] | [Baseline or specific target] |

---

### 3. GTM & Rollout Strategy

Define exactly how the user discovers the feature and how it is rolled out.
- **Discovery:** Where is the entry point? (e.g., Homepage CTA, SEO landing page).
- **Friction/Access:** Is it gated behind login? Are there hurdles for first-time use?
- **Rollout Phases:** Internal beta -> Canary (e.g., 10%) -> Full GA.

---

### 4. User Scenarios

Bring requirements to life through 2–4 short narrative scenarios. Think of these as `"day in the life`" vignettes — named characters using the feature in realistic ways.

Each scenario should:
- Name a persona (use project-specific personas if available)
- Show the trigger (what prompted them to use the feature)
- Walk through the key interaction steps
- End with the outcome (what changed for them)

---

### 5. Features In

List features included in this release. Use a simple priority tag system:

- **[M]** — Must have. MVP blocker. Do not ship without it.
- **[S]** — Should have. High value, but not a blocker.
- **[C]** — Could have. Nice to have if time permits.

Organize by category. You MUST include considerations for the following categories if applicable:
- **Core Flow & UX**
- **Logged-In vs. Guest Experience** (Account transitions, saved states)
- **Trust & Safety** (Accuracy, edge cases, disclaimers)
- **Analytics & Tracking**
- **Admin & Ops Tooling** (Dashboards, internal review queues)

Within each category, list Must-Haves first.

---

### 6. Features Out

Explicitly list what is NOT in scope. This prevents scope creep and sets expectations with engineering.

For each exclusion, you MUST explicitly label it and provide a brief rationale:
- **Deferred to [v2 / timeline]**: (e.g., `"Adds UX complexity with low MVP value`")
- **Permanently Out of Scope**: (e.g., `"Regulatory risk`")

---

### 7. Open Issues

A live list of unresolved questions that must be answered before or during development.

**CRITICAL TRANSLATION CHECKS (Do not skip):**
1. **Ops Ownership:** If you included Admin/Ops features (like review queues or flagging), who manages them day-to-day? If there is no clear human owner, ADD IT AS AN OPEN ISSUE.
2. **Data Compliance:** If the feature stores session data, PII, or health records, is it legally compliant? If legal hasn't cleared it, ADD HIPAA/VCPA/GDPR COMPLIANCE AS AN OPEN ISSUE.

Format as a table:
| Question | Owner | Status |
|---|---|---|
| [Pending decision] | [Name] | [Open / Blocked / In Discussion] |

> Never leave this section empty. If there are no open issues, you haven't thought hard enough.

---

### 8. Feature Timeline & Phasing

For project-level PRDs or multi-phase features, include a timeline table tracking accountability.

Format as a table:
| Milestone | Owner | Target Date | Status |
|---|---|---|---|
| [e.g., PRD Approved] | [Name] | [Date] | [Not Started / In Review] |

---

### 9. PM Checklist (Append to Output)

**CRITICAL**: When drafting the PRD, you MUST append this checklist at the very bottom of the document for the team to use as a self-audit tool.

```markdown
## PM Checklist Before Sharing
- [ ] Problem statement is crisp — one paragraph max
- [ ] Primary success metric is named with a quantifiable target
- [ ] Every `"Must Have`" feature has a scenario that justifies it
- [ ] Features Out section anticipates the top `"what about...?`" questions
- [ ] Open Issues are assigned to specific owners
- [ ] Ops Ownership & Data Compliance blind spots are covered
- [ ] Risks (regulatory, legal, security) are surfaced
- [ ] An engineer could read this and start asking the right questions
```

---

## Writing Quality Standards

**Be specific, not vague.**
❌ `"The system should respond quickly.`"
✅ `"The system should return a result within 2 seconds on a 4G connection.`"

**Describe behavior, not implementation.**
❌ `"Use a decision tree model for logic.`"
✅ `"The system should return a result based on user-provided inputs. Engineering owns the approach.`"

**Separate what from how.**
The PRD defines *what* the feature must do and *why*. It does not specify *how* engineering builds it unless there's a hard constraint.

**Keep it lean.**
- Feature-level PRD: 2–5 pages
- Project-level PRD: 5–10 pages
- One-pager / initiative brief: 1 page
