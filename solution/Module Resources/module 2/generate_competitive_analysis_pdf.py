"""
Generate a professional PDF from the Pet Telehealth Competitive Analysis.
Uses reportlab Platypus for structured document layout.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, Preformatted, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY

OUTPUT = "competitive-analysis.pdf"

# ── Color palette ──────────────────────────────────────────────────────────────
TEAL       = colors.HexColor("#0D7377")
TEAL_LIGHT = colors.HexColor("#E8F6F7")
DARK_GRAY  = colors.HexColor("#2D2D2D")
MID_GRAY   = colors.HexColor("#555555")
LIGHT_GRAY = colors.HexColor("#F5F5F5")
BORDER     = colors.HexColor("#CCCCCC")
ACCENT     = colors.HexColor("#E74C3C")
YELLOW_BG  = colors.HexColor("#FFFDE7")
GREEN      = colors.HexColor("#27AE60")
RED        = colors.HexColor("#E74C3C")

# ── Styles ─────────────────────────────────────────────────────────────────────
def make_style(name, **kwargs):
    return ParagraphStyle(name, **kwargs)

ST_TITLE = make_style("MyTitle",
    fontName="Helvetica-Bold", fontSize=22, textColor=TEAL,
    spaceAfter=4, alignment=TA_LEFT, leading=28)

ST_SUBTITLE = make_style("MySubtitle",
    fontName="Helvetica", fontSize=10, textColor=MID_GRAY,
    spaceAfter=16, alignment=TA_LEFT)

ST_H1 = make_style("MyH1",
    fontName="Helvetica-Bold", fontSize=14, textColor=TEAL,
    spaceBefore=18, spaceAfter=6, leading=18)

ST_H2 = make_style("MyH2",
    fontName="Helvetica-Bold", fontSize=11, textColor=DARK_GRAY,
    spaceBefore=12, spaceAfter=4, leading=14)

ST_H3 = make_style("MyH3",
    fontName="Helvetica-Bold", fontSize=10, textColor=MID_GRAY,
    spaceBefore=8, spaceAfter=3, leading=13)

ST_BODY = make_style("MyBody",
    fontName="Helvetica", fontSize=9, textColor=DARK_GRAY,
    spaceAfter=4, leading=13, alignment=TA_JUSTIFY)

ST_BODY_SMALL = make_style("MyBodySmall",
    fontName="Helvetica", fontSize=8, textColor=MID_GRAY,
    spaceAfter=3, leading=11)

ST_BULLET = make_style("MyBullet",
    fontName="Helvetica", fontSize=9, textColor=DARK_GRAY,
    leftIndent=12, spaceAfter=3, leading=13)

ST_CODE = make_style("MyCode",
    fontName="Courier", fontSize=7.5, textColor=DARK_GRAY,
    backColor=LIGHT_GRAY, leftIndent=10, rightIndent=10,
    spaceBefore=6, spaceAfter=6, leading=11)

ST_TLDR = make_style("MyTLDR",
    fontName="Helvetica", fontSize=9.5, textColor=DARK_GRAY,
    backColor=TEAL_LIGHT, leftIndent=12, rightIndent=12,
    spaceBefore=6, spaceAfter=6, leading=14, alignment=TA_JUSTIFY)

ST_TABLE_HDR = make_style("MyTableHdr",
    fontName="Helvetica-Bold", fontSize=8, textColor=colors.white,
    alignment=TA_CENTER, leading=11)

ST_GAP_LABEL = make_style("MyGapLabel",
    fontName="Helvetica-Bold", fontSize=9, textColor=ACCENT,
    spaceAfter=2, leading=12)

ST_SOURCE = make_style("MySource",
    fontName="Helvetica-Oblique", fontSize=7.5, textColor=MID_GRAY,
    spaceBefore=16, spaceAfter=4, alignment=TA_LEFT)

# ── Helpers ────────────────────────────────────────────────────────────────────
def hr(color=BORDER, thickness=0.5):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceAfter=6, spaceBefore=2)

def bullet(text):
    return Paragraph(f"<bullet>&bull;</bullet> {text}", ST_BULLET)

def base_table_style(header_rows=1):
    return TableStyle([
        ("BACKGROUND",    (0, 0), (-1, header_rows - 1), TEAL),
        ("TEXTCOLOR",     (0, 0), (-1, header_rows - 1), colors.white),
        ("FONTNAME",      (0, 0), (-1, header_rows - 1), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, -1), 8),
        ("ALIGN",         (0, 0), (-1, -1), "CENTER"),
        ("ALIGN",         (0, 1), (0, -1), "LEFT"),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
        ("ROWBACKGROUNDS",(0, header_rows), (-1, -1), [colors.white, LIGHT_GRAY]),
        ("GRID",          (0, 0), (-1, -1), 0.4, BORDER),
        ("LEFTPADDING",   (0, 0), (-1, -1), 5),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 5),
        ("TOPPADDING",    (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ])

# ── Page header/footer ─────────────────────────────────────────────────────────
def on_page(canvas, doc):
    canvas.saveState()
    w, h = letter
    canvas.setFillColor(TEAL)
    canvas.rect(0, h - 28, w, 28, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(36, h - 18, "Pet Telehealth — Competitive Analysis")
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w - 36, h - 18, "February 28, 2026 | Analyst: AdaL")
    canvas.setFillColor(MID_GRAY)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(36, 18, "Confidential — Internal Research")
    canvas.drawRightString(w - 36, 18, f"Page {doc.page}")
    canvas.restoreState()

# ── Story builder ──────────────────────────────────────────────────────────────
def build_story():
    story = []
    P = Paragraph

    # Cover block
    story.append(Spacer(1, 0.2 * inch))
    story.append(P("Pet Telehealth", ST_TITLE))
    story.append(P("Competitive Analysis",
        make_style("X", fontName="Helvetica-Bold", fontSize=18,
                   textColor=DARK_GRAY, spaceAfter=4)))
    story.append(P(
        "Competitors: Chewy &nbsp;|&nbsp; Dutch &nbsp;|&nbsp; Vetster &nbsp;|&nbsp; AirVet",
        ST_SUBTITLE))
    story.append(hr(TEAL, 2))
    story.append(Spacer(1, 0.1 * inch))

    # TL;DR
    story.append(P("<b>TL;DR</b>", ST_H1))
    story.append(P(
        "The veterinary telehealth market (~$307M in 2024, growing at 20% CAGR toward $921M by 2030) is "
        "fragmenting into distinct strategic lanes. <b>Dutch</b> owns the value-subscription B2C lane. "
        "<b>AirVet</b> owns the employer/B2B lane. <b>Chewy</b> dominates via ecosystem lock-in but treats "
        "telehealth as a retention feature. <b>Vetster</b> differentiates on marketplace choice and species "
        "breadth but faces pharmacy trust issues. The biggest unaddressed opportunity: a comprehensive platform "
        "combining AirVet&#39;s employer distribution with Dutch&#39;s clinical depth and integrated pharmacy.",
        ST_TLDR))
    story.append(Spacer(1, 0.15 * inch))

    # ── SECTION 1: Feature Comparison Matrix ──────────────────────────────────
    story.append(P("1. Feature Comparison Matrix", ST_H1))
    story.append(hr())

    YES = "YES"
    NO  = "NO"

    def cell_color(val):
        if val in (YES, "Unlimited", "Full", "Custom", "Personalized", "Fully integrated",
                   "Price-match", "CarePlus", "Primary", "Vet tech chat"):
            return colors.HexColor("#E8F5E9")
        if val in (NO, "No (triage)", "Hidden fees noted"):
            return colors.HexColor("#FFEBEE")
        if val in ("Emerging", "Same-day only", "Video only", "Where permitted",
                   "Embrace partner", "Triage-focused", "Multi-pet disc."):
            return colors.HexColor("#FFF8E1")
        return None

    feature_data = [
        [P("Feature", ST_TABLE_HDR), P("Chewy", ST_TABLE_HDR),
         P("Dutch", ST_TABLE_HDR), P("Vetster", ST_TABLE_HDR), P("AirVet", ST_TABLE_HDR)],
        ["Telehealth Video Calls",      "$49.99/visit",  "Unlimited",         "Per-visit / 4/yr", "Unlimited sub"],
        ["Telehealth Text/Chat",         "Free (vet tech)","Unlimited msg",    "Unlimited msg",    YES],
        ["24/7 Availability",            NO,              "Same-day only",     YES,                YES],
        ["Rx / Prescription Writing",    "Video only",    "Fully integrated",  "Where permitted",  "No (triage)"],
        ["Integrated Online Pharmacy",   YES,             "Price-match",       "Hidden fees noted", NO],
        ["Free Tier",                    "Vet tech chat", NO,                  NO,                 NO],
        ["Pet Insurance",                "CarePlus",      "Embrace partner",   NO,                 NO],
        ["Physical Clinics",             YES,             NO,                  NO,                 NO],
        ["Multi-Pet Coverage",           "Multi-pet disc.","Up to 5 pets",     "All pets",         YES],
        ["Employer / B2B Channel",       NO,              NO,                  "Emerging",         "Primary"],
        ["Exotic/Specialty Animals",     NO,              NO,                  YES,                NO],
        ["Vet Selection (Marketplace)",  NO,              NO,                  YES,                NO],
        ["At-Home Lab Tests",            NO,              YES,                 NO,                 NO],
        ["Veterinary Specialists",       NO,              NO,                  YES,                NO],
        ["Conditions Treated (depth)",   "Moderate",      "150+ conditions",   "Broad (generalist)","Triage-focused"],
        ["Treatment Plans",              YES,             "Custom",            "Personalized",     "Basic"],
        ["Canada Availability",          NO,              NO,                  YES,                NO],
        ["HR/Benefits Integration",      NO,              NO,                  "Emerging",         "Full"],
        ["ROI Reporting for Employers",  NO,              NO,                  NO,                 YES],
    ]

    ts_cmds = [
        ("BACKGROUND",    (0, 0), (-1, 0), TEAL),
        ("TEXTCOLOR",     (0, 0), (-1, 0), colors.white),
        ("FONTNAME",      (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME",      (0, 1), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, -1), 7.5),
        ("ALIGN",         (0, 0), (-1, -1), "CENTER"),
        ("ALIGN",         (0, 0), (0, -1), "LEFT"),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
        ("GRID",          (0, 0), (-1, -1), 0.3, BORDER),
        ("LEFTPADDING",   (0, 0), (-1, -1), 5),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 4),
        ("TOPPADDING",    (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]
    for r in range(1, len(feature_data)):
        bg = colors.white if r % 2 == 1 else LIGHT_GRAY
        ts_cmds.append(("BACKGROUND", (0, r), (-1, r), bg))
    for r in range(1, len(feature_data)):
        for c in range(1, 5):
            val = feature_data[r][c]
            col = cell_color(val)
            if col:
                ts_cmds.append(("BACKGROUND", (c, r), (c, r), col))

    ft = Table(feature_data,
               colWidths=[2.2*inch, 1.2*inch, 1.2*inch, 1.2*inch, 1.2*inch],
               repeatRows=1)
    ft.setStyle(TableStyle(ts_cmds))
    story.append(ft)
    story.append(Spacer(1, 0.1 * inch))

    # ── SECTION 2: Pricing Comparison ─────────────────────────────────────────
    story.append(PageBreak())
    story.append(P("2. Pricing Comparison", ST_H1))
    story.append(hr())

    story.append(P("Direct Pricing Summary", ST_H2))
    pricing_data = [
        [P("Competitor", ST_TABLE_HDR), P("Entry Price", ST_TABLE_HDR),
         P("Best Value Option", ST_TABLE_HDR), P("Per-Visit Equivalent", ST_TABLE_HDR),
         P("Notes", ST_TABLE_HDR)],
        ["Chewy",   "Free (chat only)",      "CarePlus bundle (quote)",  "$49.99/visit",       "Free tier is vet tech only"],
        ["Dutch",   "$11/month",             "$132/year (unlimited)",     "~$0.36/visit*",      "*~1 visit/week assumed"],
        ["Vetster", "$35+/visit",            "$10/month (4 visits)",      "$35-$150",           "Hidden fees on medications"],
        ["AirVet",  "Employer-subsidized",   "Custom B2B contract",       "~$0 (employee)",     "Consumer sub price undisclosed"],
    ]
    pt = Table(pricing_data, colWidths=[0.85*inch, 1.05*inch, 1.55*inch, 1.2*inch, 2.35*inch],
               repeatRows=1)
    pt.setStyle(base_table_style())
    story.append(pt)
    story.append(Spacer(1, 0.12 * inch))

    story.append(P("Annual Subscription Value Analysis", ST_H2))
    val_data = [
        [P("Platform", ST_TABLE_HDR), P("Annual Cost", ST_TABLE_HDR),
         P("Visits Included", ST_TABLE_HDR), P("Pet Coverage", ST_TABLE_HDR)],
        ["Dutch",                "$132/year",       "UNLIMITED",          "Up to 5 pets"],
        ["Vetster Plus",         "$120/year",        "4 visits/year",      "All pets"],
        ["Chewy (4 visits)",     "$199.96/year",     "4 video visits",     "1 pet/visit"],
        ["AirVet (consumer)",    "Undisclosed",       "Unlimited 24/7",     "TBD"],
    ]
    vt = Table(val_data, colWidths=[1.7*inch, 1.3*inch, 2.2*inch, 1.8*inch], repeatRows=1)
    vt.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, 0), TEAL),
        ("TEXTCOLOR",     (0, 0), (-1, 0), colors.white),
        ("FONTNAME",      (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME",      (0, 1), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, -1), 8.5),
        ("ALIGN",         (0, 0), (-1, -1), "CENTER"),
        ("ALIGN",         (0, 1), (0, -1), "LEFT"),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
        ("ROWBACKGROUNDS",(0, 1), (-1, -1), [colors.white, LIGHT_GRAY]),
        ("GRID",          (0, 0), (-1, -1), 0.4, BORDER),
        ("LEFTPADDING",   (0, 0), (-1, -1), 6),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 6),
        ("TOPPADDING",    (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        # Highlight Dutch as best value
        ("BACKGROUND",    (0, 1), (-1, 1), colors.HexColor("#E8F5E9")),
        ("TEXTCOLOR",     (0, 1), (-1, 1), GREEN),
        ("FONTNAME",      (0, 1), (-1, 1), "Helvetica-Bold"),
    ]))
    story.append(vt)
    story.append(Spacer(1, 0.12 * inch))

    story.append(P("Pricing Model Philosophies", ST_H2))
    model_data = [
        [P("Model", ST_TABLE_HDR), P("Companies", ST_TABLE_HDR),
         P("Pros", ST_TABLE_HDR), P("Cons", ST_TABLE_HDR)],
        ["Per-visit",        "Chewy ($49.99), Vetster ($35+)",
         "Low barrier to try",           "Expensive for regular use"],
        ["Flat subscription","Dutch ($11/mo), Vetster Plus ($10/mo)",
         "Predictable cost, loyalty",    "Upfront commitment required"],
        ["B2B employer",     "AirVet (primary), Vetster (emerging)",
         "Low/zero consumer cost",       "Requires employer adoption"],
        ["Ecosystem bundle", "Chewy (insurance + retail + telehealth)",
         "Comprehensive coverage",       "Complex, opaque pricing"],
    ]
    mt = Table(model_data, colWidths=[1.3*inch, 2.0*inch, 1.65*inch, 2.05*inch], repeatRows=1)
    mt.setStyle(base_table_style())
    story.append(mt)

    # ── SECTION 3: Positioning ─────────────────────────────────────────────────
    story.append(PageBreak())
    story.append(P("3. Strategic Positioning", ST_H1))
    story.append(hr())

    story.append(P("Strategic Positioning Summary", ST_H2))
    pos_data = [
        [P("Company", ST_TABLE_HDR), P("Core Position", ST_TABLE_HDR), P("Battle Cry", ST_TABLE_HDR)],
        ["Chewy",   "Ecosystem empire",          '"Everything your pet needs, one place"'],
        ["Dutch",   "Subscription value leader", '"A year of vet care for less than one visit"'],
        ["Vetster", "Marketplace & choice",       '"Your vet, your choice, your species"'],
        ["AirVet",  "Employer benefit",           '"The pet benefit that pays for itself"'],
    ]
    pst = Table(pos_data, colWidths=[1.0*inch, 1.8*inch, 4.2*inch], repeatRows=1)
    pst.setStyle(base_table_style())
    story.append(pst)
    story.append(Spacer(1, 0.15 * inch))

    maps = [
        ("Axis 1: Clinical Depth vs. Convenience",
"""\
  HIGH CLINICAL DEPTH
         |
         |  * Dutch (150+ Rx conditions, integrated pharmacy)
         |
         |       * Vetster (marketplace, specialists)
         |
         |  * Chewy (ecosystem,       * AirVet (triage, speed, employer)
         |    insurance, physical)
         |
  LOW CLINICAL DEPTH
         +--------------------------------------------------
         LOW CONVENIENCE                    HIGH CONVENIENCE"""),
        ("Axis 2: B2C vs. B2B Focus",
"""\
  B2C FOCUSED
    |
    |  * Dutch  (pure-play B2C subscription)
    |
    |      * Chewy  (retail-led, B2C)
    |
    |           * Vetster  (B2C primary, B2B emerging)
    |
    |                         * AirVet  (B2B primary, B2C emerging)
    |
  B2B FOCUSED
    +------------------------------------------------------
    CONSUMER DIRECT                       EMPLOYER CHANNEL"""),
        ("Axis 3: Service Breadth vs. Focus",
"""\
  BROAD SERVICES (insurance, retail, clinics, telehealth)
    |
    |  * Chewy
    |
    |       * Vetster  (multi-species, marketplace)
    |
    |          * Dutch (telehealth+pharmacy)   * AirVet (telehealth+employer)
    |
  NARROW / FOCUSED
    +------------------------------------------------------
    MASS MARKET                           NICHE SPECIALIST"""),
    ]
    for axis_title, ascii_map in maps:
        story.append(P(axis_title, ST_H3))
        story.append(Preformatted(ascii_map, ST_CODE))
        story.append(Spacer(1, 0.06 * inch))

    # ── SECTION 4: Competitive Landscape ──────────────────────────────────────
    story.append(PageBreak())
    story.append(P("4. Competitive Landscape Summary", ST_H1))
    story.append(hr())

    story.append(P("Market Share Indicators (Qualitative)", ST_H2))
    share_data = [
        [P("Metric", ST_TABLE_HDR), P("Chewy", ST_TABLE_HDR), P("Dutch", ST_TABLE_HDR),
         P("Vetster", ST_TABLE_HDR), P("AirVet", ST_TABLE_HDR)],
        ["Brand Awareness",       "***** (5/5)",   "*** (3/5)",      "** (2/5)",           "** (2/5)"],
        ["Customer Base",         "20M+ (retail)", "600K+ members",  "Not disclosed",      "Not disclosed"],
        ["Telehealth Consults",   "1M+",           "Not disclosed",  "Not disclosed",      "11K+ hrs saved"],
        ["Review Volume",         "Limited (new)", "2,000+ reviews", "2,366 (Trustpilot)", "Limited (B2B)"],
        ["Review Sentiment",      "4.5/5 (insur.)","5/5",           "5/5 (Trustpilot)",   "5/5 (employer)"],
    ]
    sht = Table(share_data,
                colWidths=[1.5*inch, 1.35*inch, 1.35*inch, 1.35*inch, 1.45*inch],
                repeatRows=1)
    sht.setStyle(base_table_style())
    story.append(sht)
    story.append(Spacer(1, 0.12 * inch))

    story.append(P("Strategic Moats", ST_H2))
    moat_data = [
        [P("Company", ST_TABLE_HDR), P("Primary Moat", ST_TABLE_HDR)],
        ["Chewy",   "Customer base (20M+), Autoship loyalty, brand recognition, physical clinic Rx authority"],
        ["Dutch",   "Price-value leadership, prescription + pharmacy integration, multi-pet economics"],
        ["Vetster", "Marketplace network effects, species breadth, vet choice differentiation"],
        ["AirVet",  "Employer relationships, HR/benefits integration, B2B distribution channel"],
    ]
    mot = Table(moat_data, colWidths=[1.0*inch, 6.0*inch], repeatRows=1)
    mot.setStyle(TableStyle([
        ("BACKGROUND",    (0, 0), (-1, 0), TEAL),
        ("TEXTCOLOR",     (0, 0), (-1, 0), colors.white),
        ("FONTNAME",      (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME",      (0, 1), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE",      (0, 0), (-1, -1), 8.5),
        ("ALIGN",         (0, 0), (0, -1), "CENTER"),
        ("ALIGN",         (1, 0), (1, -1), "LEFT"),
        ("VALIGN",        (0, 0), (-1, -1), "MIDDLE"),
        ("ROWBACKGROUNDS",(0, 1), (-1, -1), [colors.white, LIGHT_GRAY]),
        ("GRID",          (0, 0), (-1, -1), 0.4, BORDER),
        ("LEFTPADDING",   (0, 0), (-1, -1), 6),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 6),
        ("TOPPADDING",    (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(mot)

    # ── SECTION 5: Gaps & Opportunities ───────────────────────────────────────
    story.append(PageBreak())
    story.append(P("5. Gaps &amp; Opportunities", ST_H1))
    story.append(hr())

    gaps = [
        ("Gap 1: The 'Employer + Full Clinical' Combination",
         "Nobody",
         "AirVet has employer distribution but limited clinical depth (triage-focused, no Rx). "
         "Dutch has clinical depth but no employer channel.",
         "A platform combining AirVet-quality employer distribution with Dutch-quality Rx/pharmacy "
         "could own the most attractive B2B enterprise segment. Employers want real clinical value, "
         "not just triage."),
        ("Gap 2: 24/7 True Unlimited B2C Subscription",
         "AirVet (employer-only; consumer sub undisclosed)",
         "True 24/7 unlimited consumer access does not exist at Dutch's price point. AirVet's "
         "consumer subscription is new and unpriced publicly.",
         "A $15-$20/month unlimited 24/7 subscription targeting working pet owners who need "
         "after-hours access directly addresses the gap between Dutch (same-day) and AirVet."),
        ("Gap 3: Pharmacy Trust &amp; Transparency",
         "Dutch (price-match guarantee, transparent)",
         "Vetster's medication practices are a documented reputation risk (Reddit threads). Chewy's "
         "pharmacy is trusted but not tightly integrated with telehealth visits.",
         "Any entrant that builds radical medication price transparency into telehealth can rapidly "
         "win disaffected Vetster users and cost-sensitive Dutch users."),
        ("Gap 4: Multi-Species / Exotic Animal Telehealth",
         "Vetster only (under-marketed)",
         "Birds, reptiles, rabbits, horses, and small exotics are completely underserved. Vetster "
         "has this capability but does not actively market it as a core differentiator.",
         "Building the 'Dutch for exotic pets' — subscription-based telehealth with Rx for "
         "non-dog/cat species — is wide-open with no dominant player."),
        ("Gap 5: Insurance + Telehealth True Bundle",
         "Chewy (partial — separate products, not integrated)",
         "Chewy has both insurance and telehealth but they are not tightly integrated. Dutch has "
         "an Embrace Insurance partnership but it is not a unified product.",
         "A fully integrated 'one monthly payment covers telehealth + Rx + insurance' product "
         "does not exist. Pet owners seeking complete coverage buy from 2-3 companies."),
        ("Gap 6: Prevention &amp; Longevity Focus",
         "Dutch (longevity plans newly added — nascent)",
         "All competitors are primarily reactive (pet is sick, call vet). Preventive care, "
         "longevity protocols, and wellness monitoring are all nascent.",
         "A proactive health monitoring and preventive care program — potentially integrating "
         "wearable pet health data — is unclaimed territory that commands premium pricing."),
        ("Gap 7: Spanish-Language / Hispanic Market",
         "Nobody",
         "~60M Spanish-speaking pet owners in the US are underserved by English-only platforms.",
         "First mover with bilingual (English/Spanish) telehealth captures a large, loyal, "
         "underserved demographic with strong household pet ownership rates."),
    ]

    opp_style = make_style("OppStyle",
        fontName="Helvetica-Bold", fontSize=8, textColor=GREEN, leading=11)
    opp_body = make_style("OppBody",
        fontName="Helvetica", fontSize=8, textColor=DARK_GRAY, leading=11)

    for title, who, state, opp in gaps:
        block = []
        block.append(P(title, ST_GAP_LABEL))
        block.append(Table(
            [
                [P("<b>Who has it:</b>",     ST_BODY_SMALL), P(who,   ST_BODY_SMALL)],
                [P("<b>Current state:</b>",  ST_BODY_SMALL), P(state, ST_BODY_SMALL)],
                [P("<b>Opportunity:</b>",    opp_style),     P(opp,   opp_body)],
            ],
            colWidths=[1.0*inch, 6.0*inch],
            style=TableStyle([
                ("BACKGROUND",    (0, 0), (-1, -1), YELLOW_BG),
                ("BACKGROUND",    (0, 2), (-1, 2),  colors.HexColor("#F1F8E9")),
                ("GRID",          (0, 0), (-1, -1), 0.3, BORDER),
                ("VALIGN",        (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING",   (0, 0), (-1, -1), 6),
                ("RIGHTPADDING",  (0, 0), (-1, -1), 6),
                ("TOPPADDING",    (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ])
        ))
        block.append(Spacer(1, 0.1 * inch))
        story.append(KeepTogether(block))

    # ── SECTION 6: Strategic Recommendations ──────────────────────────────────
    story.append(PageBreak())
    story.append(P("6. Strategic Recommendations", ST_H1))
    story.append(hr())

    story.append(P("For a New Entrant or Our Platform", ST_H2))
    recs = [
        "<b>Lead with employer distribution</b> (AirVet model) — lowest CAC, highest lifetime value",
        "<b>Match Dutch's clinical depth</b> — 150+ conditions, true Rx, integrated pharmacy",
        "<b>Beat both on 24/7 true instant access</b> — the one dimension Dutch does not fully win",
        "<b>Price-match or beat Dutch</b> at $10-$11/month — be the obvious choice",
        "<b>Add exotic/specialty animal support</b> — differentiates from day one",
        "<b>Build pharmacy transparency</b> as a brand pillar — exploit Vetster's documented weakness",
        "<b>Pursue Chewy ecosystem users</b> with a telehealth-only subscription better "
        "and cheaper than $49.99/visit",
    ]
    for i, rec in enumerate(recs, 1):
        story.append(Paragraph(f"{i}.&nbsp;&nbsp;{rec}", ST_BODY))

    story.append(Spacer(1, 0.15 * inch))
    story.append(P("Watch List: Key Competitive Moves to Monitor", ST_H2))
    watchlist = [
        "AirVet consumer subscription pricing reveal (Q1-Q2 2026)",
        "Chewy CarePlus bundling evolution + clinic expansion pace",
        "Dutch Series funding / expansion into B2B channel",
        "Vetster response to pharmacy reputation issues",
        "Pet insurance + telehealth consolidation M&amp;A activity",
    ]
    for item in watchlist:
        story.append(bullet(item))

    story.append(Spacer(1, 0.25 * inch))
    story.append(hr(TEAL, 1))
    story.append(P(
        "<i>Research methodology: Web search + primary source page extraction (Feb 28, 2026). "
        "Sources include company websites, Trustpilot, Reddit community threads, DVM360, CNBC, "
        "Forbes, MarketWatch, US Chamber of Commerce, Nasdaq press releases, and industry market "
        "reports. Individual deep-dive files: competitor-chewy-research.md, "
        "competitor-dutch-research.md, competitor-vetster-research.md, "
        "competitor-airvet-research.md</i>",
        ST_SOURCE))

    return story


def main():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=letter,
        leftMargin=0.6 * inch,
        rightMargin=0.6 * inch,
        topMargin=0.6 * inch,
        bottomMargin=0.5 * inch,
    )
    story = build_story()
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"PDF created successfully: {OUTPUT}")


if __name__ == "__main__":
    main()
