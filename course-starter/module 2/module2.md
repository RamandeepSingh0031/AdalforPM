# Module 2: Advanced PM Workflows

**Work Setting:** You presented your conference research to the CEO and CTO. They liked the idea but pushed back on the cost and asked you to evaluate four options: Sponsor, Exhibit, Host, or No Conference. They want a recommendation memo by tomorrow.

**Learning Objectives:** In this module, we’ll use Adal CLI for PM deliverables: PRDs, competitive intelligence, strategic decisions, and stakeholder communication.

## 2.1 — Skills/Plugins

 ***Skills*** are reusable tools that provide Agents with domain-expertise in workflows, industry best practices and transform them into specialists.
 
 Each skill has three components: 
 - Instructions (Skills.MD, etc.)
 - Code (Scripts)
 - Resources (Reference Materials like Templates, License, API documentation, etc.)


**External Skills have a three-level hierarchy**
```
Marketplace (GitHub repo, e.g., anthropics/skills)
    └── Plugin (skill group, e.g., document-skills)
            └── Skill (individual skill, e.g., xlsx, docx, pdf)
```
**Example of how to use skills**

```
/plugin marketplace add anthropics/skills     # Add marketplace
/plugin                                       # Browse & install via dialog
/skills                                       # See installed skills
> Create a memo doc (2.2)                     # Agent uses docx skill automatically  
```

## 2.2 — Thinking Mode- Conference Arc Part 2

 ***Thinking Mode*** or extended reasoning focuses on deeper step by step reasoning/ chain of thought for complex problems. It is useful for debugging, tricky refactoring or tasks that require critical thinking, problem-solving, and decision-making. It's 'ON' by default, is often token intensive and can be toggled mid-task without cancelling the query simply by pressing the TAB key. 

**Prompt in AdaL**
```bash
Before evaluating any options, search the web to gather current data on:
- Typical sponsorship and exhibitor costs for mid-size veterinary conferences
- Average vet leads generated per exhibitor booth at industry events
- Cost benchmarks for hosting a small industry side event (venue, A/V, catering)
- Timeline requirements for conference logistics (lead time, deposits, staffing)

Then, using @course-starter/Pawprint/01_Company_Brief.md, @course-starter/Pawprint/03_OKRs_Roadmap.md,
@conference_research_report.md, and the data you just gathered, formally evaluate four Q2 conference options: Sponsor, Exhibit, Host, or No Conference.

Think hard and list tradeoffs across cost, vet lead potential, resource burden, and timeline feasibility before writing. Consider failure modes and which option best advances the OKRs. Document your synthesis in a word document. 

The memo document should lead with a recommendation, compare all four options, justify the choice, flag key risks, and close with next steps.
```
***If you want to push the reasoning harder, try these follow-up prompts after the initial memo:***
 
> *"What's the weakest part of this recommendation? Where are you most uncertain?"*

> *"If our vet lead target were 100 instead of 50, does the recommendation change?"*

> *"What's the cost for doing nothing?"*


## 2.3 — Competitive Intelligence

**Prompt in AdaL**

```bash
Launch concurrent agents to research different competitors simultaneously from @course-starter/Pawprint/01_Company_Brief.md

For each competitor, research:
- Product features and capabilities
- Pricing tiers and packaging
- Target market and positioning
- Recent updates (last 6 months)
- User reviews and sentiment

Then using PDF skill, synthesize a @competitive-analysis.pdf with:
- Feature comparison matrix
- Pricing comparison
- Positioning map
- Gaps and opportunities
```

***Note: This will take 5-10 minutes to complete***

## 2.4 - PRD with custom agent skill

**Copy the prd-writer skill to your project directory (~.AdaL/Skills/prd-writer)**

**Prompt in AdaL**

```bash
Using the prd-writer skill and the @course-starter/Pawprint/01_Company_Brief.md and @course-starter/Pawprint/03_OKRs_Roadmap.md, draft a feature-level PRD for the AI Symptom Checker. The checker is a Q3 beta launch. It returns urgency levels only — no diagnosis. It needs regulatory sign-off before shipping. Primary success metric ties to Monthly Consultation Volume. Use Jordan's persona constraints throughout.
```
