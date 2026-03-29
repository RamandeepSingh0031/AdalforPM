# PawPrint Vet Summit 2026: GTM Handoff Document
**Date:** March 18, 2026  
**Status:** Draft for Review  
**Project:** Module 4 — Asset Generation  

## 1. Asset Inventory

| File Name | Intended Use | Target Channel / Owner |
| :--- | :--- | :--- |
| `speaker_card_foster.png` | Speaker Announcement | Social Media (LinkedIn/X) / Dr. Foster |
| `speaker_card_chen.png` | Opening Keynote Promo | Social Media (LinkedIn/X) / Dr. Chen |
| `speaker_card_webb.png` | Regulatory Session Promo | Social Media (LinkedIn/X) / Marcus Webb |
| `speaker_card_nair.png` | Industry Analysis Promo | Social Media (LinkedIn/X) / Dr. Nair |
| `speaker_card_federer.png` | Speaker Announcement | Social Media (LinkedIn/X) |
| `vet_summit_email_banner.png` | Hero Visual | Email Marketing / CRM Team |
| `vet_summit_email_header.html` | Email Component | Email Marketing / CRM Team |
| `social_copy_vet_summit.md` | Post Copy & Hooks | Social Media / Content Team |

## 2. Usage Notes

### Speaker Cards (PNGs)
*   **Visual Style:** Cinematic, high-contrast portraits with consistent branding.
*   **Constraint:** These are AI-generated representations. **Usage Note:** Must include a small "AI-assisted portrait" disclaimer in the post copy or as an alt-text attribute to maintain transparency with the veterinary community.
*   **Format:** Optimized for 1:1 aspect ratio (standard for LinkedIn/X).

### Email Assets (HTML/Banner)
*   **HTML Structure:** The `vet_summit_email_header.html` contains embedded CSS for dark mode support and VML fallbacks for Outlook.
*   **CSS Requirement:** Do NOT strip the `<style>` block. Most modern ESPs (Mailchimp, HubSpot) handle this, but manual injection requires keeping the `<head>` section intact.
*   **Image Hosting:** The `vet_summit_email_banner.png` is currently referenced locally. It must be uploaded to the CDN/ESP and the `src` attribute updated in the HTML before deployment.

### Social Copy
*   **Hook Logic:** Each post is paired with a specific data-backed hook (e.g., the 29.2% adoption rate). Do not swap hooks between speakers as they are tied to their specific session expertise.

## 3. Open Items (Human Decisions Required)
1.  **Registration Link:** All `[link]` placeholders in the social copy and the `href` in the HTML need the final tracking URL (UTMs) for the registration site.
2.  **Speaker Approval:** While assets are ready, Dr. Chen and Dr. Foster should provide final "OK" on their specific hook wording.
3.  **Venue Finalization:** The banner lists San Francisco, CA. If the specific venue is confirmed (e.g., Moscone Center), the banner may need a text update.

## 4. Next Steps & Timeline (Q3 Event Focus)

| Priority | Action Item | Owner | Suggested Deadline |
| :--- | :---: | :--- | :--- |
| **P0** | Update HTML with live CDN links & UTMs | Email Specialist | April 1 (Event - 4 months) |
| **P1** | Final approval on copy hooks from speakers | Product Marketing | April 5 |
| **P1** | Set up LinkedIn Campaign/Organic Schedule | Social Lead | April 10 |
| **P2** | A/B test email subject lines using hooks | CRM Team | April 15 |

---
*Handoff complete. All files located in `Module Resources/module 4/`.*
