# Product Requirements Document: AI Symptom Checker (Beta)

### 1. Header Block
| Field | Details |
| :--- | :--- |
| **Title:** | AI Symptom Checker (Triage Beta) |
| **Author:** | Jordan (Founding PM) |
| **Status:** | Draft |
| **Last Updated:** | March 18, 2026 |
| **Team:** | PM: Jordan <br> Eng Lead: TBD <br> Design: TBD <br> Clinical: Dr. Jennifer (Vet Partner) |
| **Approvers:** | CEO, Legal/Compliance |
| **Epic Link:** | [TBD - Jira/Linear] |

---

### 2. One-Pager (Executive Summary)

**Overview**
When pets show signs of illness, owners often panic and turn to unreliable internet searches. The AI Symptom Checker is a clinically-grounded triage tool that allows pet owners to input their pet's symptoms and receive an immediate **urgency level** (e.g., "Monitor at home", "Consult a Vet", "Emergency"). **Crucially, this tool provides triage guidance only, never a medical diagnosis.** 

**Objectives**
1. Reduce pet owner anxiety through immediate, reliable, clinically-backed triage.
2. Build trust by outperforming generic AI models (currently testing at 81% clinical accuracy).
3. Seamlessly route appropriate, non-emergency cases directly into Pawprint's consultation funnel to drive business growth.

**Success Metrics**
*   **Primary Metric:** Impact on **Monthly Consultation Volume** (Goal: Drive volume toward our 55K/month OKR via a target 20% conversion rate from the tool).
*   **Secondary Metric:** Tool completion rate (percentage of users who finish the triage flow).
*   **Guardrail Metrics:** Regulatory compliance incidents (must be 0); Clinical accuracy score (must maintain >80% safety rating from vet panel).

---

### 3. User Scenarios

**Scenario 1: The "Should I Worry?" Late-Night Panic**
*   **Persona:** Emma (First-time dog owner, highly anxious)
*   **Trigger:** Her golden retriever vomits at 10 PM. She doesn't know if it's a passing issue or a blockage.
*   **Interaction:** Emma opens the Pawprint app, selects the AI Symptom Checker, and types "My dog vomited once but is acting normal." The AI asks two quick clarifying questions about lethargy and diet.
*   **Outcome:** The tool outputs an urgency level of *“Monitor at Home / Low Urgency”* but offers a button to *"Chat with a Vet for peace of mind."* Emma books a virtual consultation, adding to our monthly volume.

**Scenario 2: The True Emergency**
*   **Persona:** Marcus (Experienced cat owner)
*   **Trigger:** His cat is struggling to breathe and hiding.
*   **Interaction:** Marcus inputs "labored breathing, hiding under bed." 
*   **Outcome:** The tool immediately triggers an *“Emergency / High Urgency”* state. It explicitly bypasses the virtual consultation upsell and displays a persistent red banner advising Marcus to take his cat to the nearest 24/7 physical emergency clinic immediately.

---

### 4. Features In

**Core Flow & Triage (Must-Haves)**
*   **[M] NLP Symptom Input:** A simple text box for users to describe the issue naturally.
*   **[M] Dynamic Clarification Questions:** The system asks 1-3 follow-up multiple-choice questions based on the initial input to refine the urgency.
*   **[M] Urgency Level Output:** A clear, color-coded result screen displaying one of three states: *Emergency (Red)*, *Consult Vet (Yellow)*, or *Monitor (Green)*.
*   **[M] Consultation Handoff:** For Yellow/Green states, a frictionless CTA to book a Pawprint virtual consultation, passing the triage context directly to the vet.
*   **[M] Liability Disclaimer:** A mandatory, unskippable acknowledgment that the tool is for triage only, not diagnosis.

**Enhancements (Should-Haves)**
*   **[S] Pet Profile Context:** The tool automatically pulls in the pet’s age, breed, and weight from their Pawprint profile to inform the AI model.
*   **[S] Vet Dashboard Integration:** When a user books a consult, the triage transcript is automatically populated in Dr. Jennifer's (or the attending vet's) dashboard before the call starts.

---

### 5. Features Out

*   **Medical Diagnosis:** The system will *never* state "Your dog has Parvo." It will only state "These symptoms require immediate veterinary attention." (Strict regulatory and liability constraint).
*   **Treatment/Prescription Recommendations:** The system will not recommend specific medications or dosages.
*   **Photo/Video Uploads:** Deferred to v2. The Q3 Beta will rely on text-based inputs to constrain model complexity and scope.

---

### 6. Open Issues

| Question | Owner | Status |
| :--- | :--- | :--- |
| **Regulatory Sign-off:** Have we secured formal clearance from Legal that our disclaimer and "urgency only" approach shields us from medical liability? | Legal / Jordan | 🔴 **BLOCKING** |
| **Clinical Baseline:** What is the exact clinical accuracy threshold required by our Vet Advisory Board to greenlight the Q3 Beta launch? | Dr. Jennifer | 🟡 Open |
| **Emergency Routing:** For "Red" states, do we automatically pull the nearest 24/7 clinic via Google Maps API, or just show a generic warning? | Jordan / Eng | 🟡 Open |

---

### 7. Feature Timeline & Phasing

| Phase | Milestone | Target Date |
| :--- | :--- | :--- |
| **Phase 1** | Internal Alpha (Pawprint team & Vet Advisory Board only) | Q2 2026 |
| **Phase 2** | **Regulatory Sign-off Deadline** | End of Q2 2026 |
| **Phase 3** | Beta Launch (Opt-in for highly engaged users) | Q3 2026 |
| **Phase 4** | GA & Marketing Push (Tied to Consultation Volume OKRs) | Q4 2026 |
