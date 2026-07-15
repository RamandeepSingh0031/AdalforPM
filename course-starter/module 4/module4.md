# Module 4: Content Creation

**⏱️ Estimated Time:** 60–90 minutes

**📹 Module Video:** [Watch the walkthrough](https://youtu.be/PVcpZPf6jtw?si=L2UyY_ywcftxDtis)

**Work Setting:** The Vet Summit is confirmed for Q3 2026. The CEO just gave you the green light and asked you to own the pre-event marketing push. You have the full event programme, a speaker roster, and Pawprint's brand voice. You want to create a polished GTM content package: speaker cards, an email campaign header and more to hand to the Growth team by end of week.

**Learning Objectives:** In this module, you'll produce publication-ready assets.

> 🛑 **Prerequisites**
> - `frontend-design` skill installed — needed for 4.3 (`/plugin marketplace add anthropics/skills`, then `/plugin` to install)
> - Gemini image generation works out of the box — use `/model` to confirm a Gemini model is active before 4.2

## Why GTM Content Is a PM Skill

The best PMs shape the assets with their knowledge of the product, the persona, and the message. In this module, you are setting the brief, generating the first drafts with Adal, and iterating to something the CEO can approve.

---

## 4.1 GTM Brief (Grounding the Campaign)

Before generating a single asset, ground Adal in the campaign strategy.

**Prompt in AdaL**
```bash
Refer to @course-starter/Pawprint/04_Vet_Summit_2026.md and @course-starter/Pawprint/01_Company_Brief.md.

Write a one-page GTM content brief for the PawPrint Vet Summit 2026 pre-event marketing push. Include:
- Campaign goal and success metric: registrations, not impressions
- Primary audience: independent practice owners and multi-location clinic owners
- Brand voice: credible, direct, peer-to-peer — not salesy. Vets trust other vets.
- Core message hierarchy: 1 The telehealth gap is a real revenue opportunity, 2 Peers who have made the switch are sharing real numbers, 3 One day in San Francisco changes how you run your practice
- Asset list for this sprint: speaker cards, email header, LinkedIn/X post copy per speaker, short-form video sourcing
- Key constraints: no stock photo aesthetic, cite real data where used, every asset links back to the registration CTA

```
> 💡 **Why this step?** Every asset will reference this brief. You'll `@gtm_brief.md` to keep tone and message consistent across the whole package for the campaign.

---

## 4.2 Speaker Cards (Gemini Image Generation)
 
Speaker cards are the highest-visibility asset in a pre-event push. Each card surfaces on LinkedIn, in the email, and on the landing page. They need to feel premium — not a Canva template.
 
Adal uses Google's Gemini image models (including `gemini-2.5-flash-image`) to generate images directly from prompts. You'll generate one card per named speaker, then review and iterate.
 
### Step 1 Generate the first speaker card
 
**Prompt in AdaL**
```bash
A 1:1 square speaker card for the PawPrint Vet Summit 2026. Layout: 50/50 vertical split, different from a standard top/bottom split. Color scheme: Deep Black (#050505), Muted Gold (#9A8E4E), and crisp White. 

Visual: Photorealistic, high-end studio portrait of Dr. Priya Nair, a South Asian female veterinary telehealth analyst in her 30s or 40s in professional business attire. 

Lighting: Moody cinematic lighting with soft shadows. 

Expression: Thoughtful, analytical look.

Integrate this text using premium, clean typography (using white and gold for high contrast):
- "Dr. Priya Nair" (Large)
- "Veterinary Telehealth Analyst" (Subtle)
- "The Independent Vet in 2030: Adapting Through the Cycle" (Medium)
- "PawPrint Vet Summit 2026" (Clean Sans-serif)
- "Register at pawprint.com/summit" (Bold CTA)
The aesthetic must be cinematic and avoid stock templates. Save image as speaker_card_nair_v1.png.
```
> 💡 **Tip:** *Change **Lighting** to `Natural window light, bright and airy` and **Expression** to `Approachable, neutral, friendly` to iterate on the image.*

### Step 2 Generate remaining speaker cards

**Prompt in AdaL**
```bash
Using the same visual style as speaker_card_nair_v2.png, generate speaker cards for the remaining named speakers from @course-starter/Pawprint/04_Vet_Summit_2026.md:

1. Dr. Sarah Chen — CEO & Co-Founder, Pawprint — Opening Keynote: "The Telehealth Gap"
2. Marcus Webb — Regulatory Counsel, Pawprint — "Telehealth Regulations by State: Your 2026 Compliance Playbook"
3. Dr. Amanda Foster, DVM — Owner, Foster Veterinary Group — "Beyond the Burnout Ceiling"
4. Jordan Federer — Head of Product, Pawprint — Lightning Talk: "AI Triage in Practice"

For each: generate a photorealistic AI portrait appropriate to their role and description in the file. Keep card layout, typography, and brand colours identical to the Nair card. Save as speaker_card_[lastname].png.
```

> **Iteration tip:** If any card's portrait feels generic or the text overflows, use this follow-up:
> 
> *"Regenerate speaker_card_nair.png — the portrait should read as a South Asian woman, analytical, academic setting background visible behind her. Tighten the session title to one line."*

---

## 4.3 Email Header (HTML Template Output)

The email header is the first thing a vet sees when the campaign lands in their inbox. It needs to work in dark mode, load fast, and drive one action: click to register.

You'll use the `frontend-design` skill to generate a production-ready HTML email header component — not a static image, but a coded block the Growth team can drop directly into Mailchimp or HubSpot.

**Prompt in AdaL**
```bash
Using the frontend-design skill, @gtm_brief.md, and @course-starter/Pawprint/04_Vet_Summit_2026.md, create an HTML email header component for the PawPrint Vet Summit 2026 campaign.

Requirements:
- Dimensions: 600px wide (standard email width), ~280px tall
- Deep Black (#050505), Muted Gold (#9A8E4E), and crisp White for headline and CTA 
- Content: Event name, tagline, date ("Q3 2026 — San Francisco, CA"), and a prominent "Reserve Your Spot" CTA button
- Include a subtle stat below the CTA: "70% of vet practices still don't offer telehealth. That's your window." — styled as a secondary line, muted colour
- Must be inline CSS only (no external stylesheets — email client compatibility)
- Must render correctly in both light and dark mode email clients
- Include a plain-text fallback comment block at the bottom for accessibility

Save as vet_summit_email_header.html
```

> 💡 **PM note:** Email HTML has strict requirements to look professional across clients:
> 1. **Inline CSS:** A hard requirement because Gmail strips `<style>` blocks.
> 2. **Hidden Preheaders:** Add a 1-2 sentence hidden text block at the top of the body to optimize the inbox preview snippet.
> 3. **Dark Mode Protections:** Use `<meta name="color-scheme" content="light dark">` and `@media (prefers-color-scheme: dark)` overrides to prevent email clients from auto-inverting brand colors.
> 4. **Bulletproof Buttons:** Use VML (Vector Markup Language) conditional code `<!--[if mso]>` to ensure CTA buttons render correctly in older desktop versions of Windows Outlook.

**Follow-up — preview check**
```bash
Open vet_summit_email_header.html in the browser and check:
- Does the CTA button have at least 44px tap height?
- Is the headline legible at 600px and also at 375px (mobile preview)?
- Is the stat line visually subordinate to the CTA?

Report what you find and fix any issues directly in the file.
```


## 4.4 Social Copy (LinkedIn + X, Per Speaker)

Social copy lives or dies on specificity. Generic "Join us at our event!" posts get scrolled past. Posts that lead with a real number, a real name, and a real challenge get shared by vets to other vets — which is exactly Pawprint's distribution flywheel.

Adal will search for the cited statistics in the event cards and weave them into the copy, grounding every post in credible data.

**Prompt in AdaL**
```bash
Refer to @course-starter/Pawprint/04_Vet_Summit_2026.md and @gtm_brief.md.

Search the web to verify the following stats cited in the event cards before using them.

For each of the four named speakers (Dr. Sarah Chen, Dr. Amanda Foster, Marcus Webb, Dr. Priya Nair), write:

1. A LinkedIn post (150–200 words): Lead with the single most compelling stat relevant to their session. Name the speaker and their session. Close with a direct CTA and event hashtag #VetSummit2026. Tone: peer-to-peer, not corporate.

2. An X/Twitter post (under 280 characters): Punchy. Stat first, speaker name, CTA link placeholder [link].

Format all eight posts in a single markdown file with clear speaker headers. Save as social_copy_vet_summit.md.
```

> **Thinking mode tip:** Before writing, ask Adal to reason through the message hierarchy first:
> 
> *"Before drafting, identify the single strongest hook for each speaker — the one stat or claim most likely to stop a practice owner mid-scroll. List your reasoning, then write the posts."*


## 4.5 Asset Review & Handoff Package
 
Bundle everything into a clean handoff the Growth team can act on without coming back to you with questions.
 
**Prompt in AdaL**
```bash
Review all assets generated in this module:
- speaker_card_foster.png, speaker_card_chen.png, speaker_card_webb.png, speaker_card_nair.png, speaker_card_federer.png
- vet_summit_email_banner.png
- vet_summit_email_header.html
- social_copy_vet_summit.md
 
Create a handoff document (gtm_handoff.md) that includes:
1. Asset inventory — file name, intended use, and which channel or team member it is for
2. Usage notes — any constraints per asset (e.g. inline CSS requirement for the email, AI portrait disclaimer for speaker cards)
3. Open items — anything that still needs a human decision before the asset ships
4. Next steps — ordered by priority, who owns each, and suggested deadline relative to a Q3 event date
```

## 🚩Checkpoint

**What you practised:**
- Using Gemini image generation for brand-consistent visual assets
- `frontend-design` skill for coded, production-ready HTML output
- Web search for stat verification for the publishable content

## 💭**Reflection Post**
> *You generated both images and HTML from the same brief. Do you feel AdaL followed your creative direction well?*
