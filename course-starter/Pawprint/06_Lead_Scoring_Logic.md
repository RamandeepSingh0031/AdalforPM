# Lead Scoring & Classification Logic
**Version:** 1.0  
**Context:** PawPrint Vet Summit 2026

This document defines how conference attendee engagement data is converted into a numerical **LeadScore** and subsequent sales classification.

---

## 1. Data Dictionary

| Field | Source | Description |
| :--- | :--- | :--- |
| `TelehealthStatus` | Registration | Current maturity of the practice's telehealth offering. |
| `ApplyForOfficeHours` | Registration | High-intent signal; indicates a desire for 1-on-1 consultation. |
| `OfficeHours_Goal` | Registration | Specific pain point: Revenue Projection, Compliance, Onboarding, or Honest Answers. |
| `SessionsAttended` | Event Check-in | List of session IDs attended. Session **09A** is the high-intent Office Hours deep-dive. |
| `DemoRequested` | Live Event | Binary flag indicating if the user requested a product walkthrough. |
| `LeadScore` | Calculated | Weighted aggregate of intent, engagement, and firmographic fit. |

---

## 2. Lead Scoring Algorithm (0–100)

The `LeadScore` is calculated using the following weighted points:

### A. High Intent Boost
*   **+40 pts**: `ApplyForOfficeHours` = `TRUE`.
*   **+10 pts**: `DemoRequested` = `TRUE`.

### B. Engagement Milestones
*   **+10 pts**: `CheckInStatus` = `Checked-In`.
*   **+10 pts**: `PortalAccessStatus` = `LoggedIn`.
*   **+5 pts (per session)**: For every session listed in `SessionsAttended`.

### C. Firmographic Fit (ICP Multiplier)
*   **+10 pts**: Large practice size (`6–10` or `10+` vets).
*   **+5 pts**: Mid-size practice (`2–5` vets).

### D. Penalties/Caps
*   **Cap at 40**: If `CheckInStatus` is "No-Show" or "Registered" (but never attended).

---

## 3. Sales Classification Segments

| Segment | LeadScore Range | Primary Characteristics | Action Plan |
| :--- | :--- | :--- | :--- |
| **Hot** | **85–100** | High-intent practice owners; applied for Office Hours; attended Session 09A. | **Direct Call**: Schedule discovery call within 24 hours. |
| **Warm** | **60–84** | Interested but evaluating; may have requested a demo; active in general keynotes. | **Personalized Email**: Send a recording of the demo and a ROI calculator. |
| **Cold** | **40–59** | Passive attendees; didn't request specific follow-ups; attended only 1-2 sessions. | **Nurture Loop**: Add to the monthly newsletter on industry trends. |
| **Inactive** | **< 40** | Registered no-shows or very low engagement. | **Re-engagement**: Send "Sorry we missed you" kit with summit highlights. |
