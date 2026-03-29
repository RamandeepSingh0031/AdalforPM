# Module 5: AdaL for Data Analysis

**⏱️ Estimated Time:** 75–90 minutes
 
**Work Setting:** The Vet Summit 2026 was a hit. The floor was packed, the invite-only Office Hours (Session 09A) hit its maximum capacity of 20 practice owners, and the team is riding the high. It's Monday morning. Your first task is to process the attendee data and send the high-potential leads to Sales.
 
**Learning Objectives:** In this module you'll use AdaL to perform data analysis.
 
> 🛑 **Prerequisites**
> - AdaL CLI installed and running
> - No additional skills or MCPs needed for this module

---
 
## 5.1 Build the Post-Summit Lead Dashboard
 
The attendee data just landed in your inbox. Before you hand anything to Sales, you want to visualise who showed up and surface the highest-intent leads. You'll build a quick dashboard — then decide what to send Rachel, VP Business Management.
 
**Prompt in AdaL**
```bash
Read @course-starter/Pawprint/05_conference_attendees.csv and
@course-starter/Pawprint/06_Lead_Scoring_Logic.md.
 
Build a self-contained HTML dashboard (post_summit_leads.html) that gives
me a fast read on the attendee data. Chart.js via CDN, dark background,
clean and scannable. Include:
 
1. Three KPI cards: Total Registrants, Show Rate, Hot Leads
   (Hot = LeadScore >= 85 per the scoring doc)
 
2. A lead segment breakdown (donut chart):
   Hot (>=85) / Warm (60-84) / Cold (40-59) / Inactive (<40)
 
3. A table of all Hot leads showing: Name, Practice, State,
   Practice Size, Telehealth Status, LeadScore — sorted by score descending
 
4. A funnel showing: Registered → Checked-In → Applied OH → Attended OH
```

The dashboard renders. The table looks like a clean list. You fire off a Slack to the sales team.

## 5.2 In the Weeds
 
Two hours later, your Slack goes off.
---
 
> 🟡 **Rachel Torres** · VP, Business Management · 11:43 AM
>
> Hey Jordan, pausing on this list. Three calls in and the quality isn't quite matching the "Hot" label. Ruby Foster and Clara Mendez were engaged on the call but didn't seem close to a decision. Ezra Stone said she applied for Office Hours but didn't end up attending. Not urgent, but worth a second look at how these were selected before we go further.
---
 
**Time to go back to the data and figure out where the selection logic broke down.**

### Step 1: Form Your Hypotheses
 
Before you touch the data, write down every possible explanation. This is the most important step — if you jump to a conclusion, you'll fix the wrong thing.
 
**Prompt in AdaL**
```bash
Read @course-starter/Pawprint/05_conference_attendees.csv and
@course-starter/Pawprint/06_Lead_Scoring_Logic.md.
 
I exported 33 Hot leads (LeadScore >= 85) from the post-summit dashboard
and sent them to Sales. Three calls in, Rachel is flagging that some leads
feel less ready than the score suggests engaged on the call but not close
to a decision, and one mentioned she applied for Office Hours but did not attend.
 
Before I investigate, list every possible reason why a lead
could score Hot but not behave like one:
 
- Could the scoring logic be rewarding the wrong signals?
- Could there be a data quality issue inflating certain fields?
- Could the Hot threshold itself be miscalibrated?
- Could it be something else entirely?
 
For each hypothesis, tell me exactly what I would need to check to
confirm or rule it out. Do not investigate yet just map the possibilities.
```

> 💡 **Why this step?** A PM who jumps straight to the answer fixes the loudest symptom and misses the root cause. Listing hypotheses forces you to consider multiple failure modes.

### Step 2: Pull the Flagged Records
 
Start with the three leads Rachel called. See what the data actually says about them.
 
**Prompt in AdaL**
```bash
Read @course-starter/Pawprint/05_conference_attendees.csv.
 
Pull the full records for these attendees and display them in a table:
Ruby Foster, Clara Mendez and Ezra Stone
 
For each person, write one sentence describing their engagement at the Summit
based purely on what the data shows — sessions attended, demo requested,
Office Hours attendance, check-in status.

```

### Step 3: Audit the Scoring Model

Let's take a closer look at the scoring logic.

**Prompt in AdaL**
```bash

Using @course-starter/Pawprint/06_Lead_Scoring_Logic.md, manually calculate
the expected score for each person — show every component and how many
points each field contributes.
 
Then answer:
1. Which single field is contributing the most points for these
   low-engagement attendees?
2. How many total attendees have that field set to TRUE?
3. How many of those actually attended Office Hours
   (Session09A_OfficeHoursAttended = TRUE)?
4. What does the ratio of applicants to actual attendees tell you about
   whether applying is a reliable signal of intent?
```

### Step 4: Confirm the Root Cause
 
You have a clear suspect. Prove it.
 
**Prompt in AdaL**
```bash
Read @course-starter/Pawprint/05_conference_attendees.csv and
@course-starter/Pawprint/06_Lead_Scoring_Logic.md.
 
Test this hypothesis: the scoring model awards too many points for
ApplyForOfficeHours regardless of whether the person actually attended.
 
1. Recalculate the LeadScore for each of the three flagged attendees
   with ApplyForOfficeHours contributing 0 points.
   What segment do they fall into now?
 
2. Across the full dataset, how many attendees score Hot (>=85) under
   the current model?
 
3. How many would score Hot if ApplyForOfficeHours contributed 0 points?
 
4. State the root cause in one clear sentence.
```
 
> 💡 **The Office Hours Illusion:** 97 of 137 attendees applied for Office Hours — 71% of the room clicked that checkbox. But we only had 20 seats. The model awards +40 points for clicking, the same it would award for actually attending. That single flaw inflated scores across 77 people who never set foot in Room A.

### Step 5: Fix the Scoring Model
 
You know the problem. Fix it — and justify every decision.
 
**Prompt in AdaL**
```bash
Propose a corrected scoring model based on your findings.
 
The fix must:
- Meaningfully separate applying for OH from attending OH
- Reflect that attending is capacity-constrained (20 seats, 97 applicants)
  and is therefore a much stronger signal of intent
- Keep all other scoring components unchanged
- Maintain the 0–100 scale and Hot threshold (>=85)
 
Justify each changed weight in one sentence.
 
Then manually rescore the three flagged attendees under the new model.
What segment are they in now?
```

### Step 6: Rescore the Full Dataset
 
Apply the fix to all 137 attendees and quantify the damage.
 
**Prompt in AdaL**
```bash
Read @course-starter/Pawprint/05_conference_attendees.csv.
 
Using the corrected scoring weights, recalculate the LeadScore for all
137 attendees. Save the results as summit_attendees_rescored.csv with a
new column LeadScore_v2 alongside the original LeadScore.
 
Then report:
1. New segment counts: Hot, Warm, Cold, Inactive
2. How many attendees moved DOWN from Hot to a lower tier?
3. What do the true Hot leads have in common — what is their profile?
4. How many corrected Hot leads attended Office Hours vs did not?
```

## 5.3 The Follow-Up

### Step 1: Build a new dashboard
The original scores were wrong. Build a corrected executive dashboard
that tells the honest story — including the correction.
 
**Prompt in AdaL**
```bash
Using summit_attendees_rescored.csv, build a self-contained executive
dashboard saved as post_summit_report.html.
 
Single HTML file, Chart.js via CDN. Must open in any browser with no server required.
 
Color scheme:
- Background: Deep Black (#050505)
- Primary accent: Muted Gold (#9A8E4E)
- Secondary accent / Warm segment: Sage Green (#7B9E87)
- Text: Crisp White (#FFFFFF)
 
Add an amber banner at the very top:
"Scoring corrected — ApplyForOfficeHours reweighted.
[N] leads reclassified from Hot. Original list recalled."
 
Include the following sections:
 
1. Header KPI cards: Total Registrants (137), Show Rate (94%),
   Corrected Hot Leads (use recalculated count).
 
2. Attendee funnel: Registered → Checked-In → Portal Activated →
   Demo Requested → OH Applied vs OH Attended (split bar — make the
   97 applied / 20 attended gap impossible to miss).
 
3. Lead segment donut + action table (Hot / Warm / Cold / Inactive).
   Insight: how many were reclassified and what that means for pipeline.
 
4. Telehealth readiness horizontal bar.
 
5. Hot lead geography — top states by corrected Hot count.
 
6. What leads want — OH Goals grouped bar, Hot vs Warm side by side.
 
7. Session engagement ranked by attendance.
 
8. ROI Scenario Modeler with four sliders:
   - Hot close rate (default 30%, range 5–60%)
   - Warm close rate (default 12%, range 2–30%)
   - Avg Annual Vet LTV (default $12,000, range $8K–$20K)
   - Event cost (default $35,000, range $20K–$60K)
   Live outputs: Closed Hot, Closed Warm, Total Partners,
   Year-1 Revenue, ROI Multiplier (green >=3x, amber 1–3x, red <1x).
 
One-line insight below each chart. Executive-grade, fully responsive.
```

### Step 2: Reply to Rachel

The investigation is done. The model is fixed. The dashboard is rebuilt.
Now close the loop — before Rachel burns through 72 more bad calls.
 
## 🚩 Checkpoint
 
**What you practised:**
- Identifying the difference between a signal and a proxy for intent
- Forming hypotheses before touching data — the discipline that prevents wrong fixes
- Peer communication under pressure: owning a mistake clearly and moving straight to the fix
 
## 💭 Reflection
 
AI amplifies Clean output feels authoritative. Fast output skips the scrutiny. Before any AI model touches a business decision, ask:
 
- *What behaviour am I rewarding — and does it actually predict the outcome I care about?*
- *Have I stress-tested the edges, or just checked that the happy path looks right?*
 
**`The speed AI gives you is an asset. The judgement it runs on is your responsibility.`**
