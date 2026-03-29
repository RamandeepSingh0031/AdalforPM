# AGENTS.md

This file provides guidance to agents (i.e., ADAL) when working with code in this repository.

## 1. Essential Commands

The project's primary software component is a React application located in `vibe-coding project/pawprint-app`.

### Pawprint App (React/Vite)
```bash
# Install dependencies (run from root or pawprint-app)
npm install

# Start dev server (must run from pawprint-app directory)
cd 'vibe-coding project/pawprint-app'
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

**Critical Gotchas:**
- **PowerShell Path Handling**: Always wrap paths containing spaces (e.g., `vibe-coding project`) in **single quotes** `'...'`. Double quotes may fail due to internal escaping.
- **Node Version**: React 19 and Vite 8 (beta) require Node.js v18+.

## 2. Non-Obvious Architecture

### Context-First Workflow
Before modifying `vibe-coding project/`, read the corresponding strategy file in `course-starter/`:
- Implementing Conference page → Read `04_Vet_Summit_2026.md` first
- Data analysis tasks → Read `06_Lead_Scoring_Logic.md` first
- Feature work → Read `01_Company_Brief.md` and `02_Personas.md` first

### Tripple-Directory Structure
```
course-starter/     → Strategic layer (PRDs, personas, OKRs) — "what to build"
vibe-coding project/ → Implementation layer (React app) — "how it looks"
solution/           → Reference state (completed deliverables) — "expected outcome"
```

### Component Communication
- **Routing**: `src/App.jsx` uses `react-router-dom`. New pages in `src/pages/` must be added to `<Routes>` in `App.jsx` AND to `Navbar.jsx`.
- **Styling**: Mix of global CSS (`index.css`) and **inline styles** in JSX. Favor inline styles for consistency.
- **Shaders**: `GrainGradient` from `@paper-design/shaders-react` for hero backgrounds.

### Solution Directory
The `solution/` directory contains the completed course state:
- `solution/Module Resources/` — Finished PM deliverables (PRDs, memos, dashboards)
- `solution/vibe-coding project/pawprint-app/` — Fully implemented React app
- Use for debugging or understanding intended final state of tasks

## 3. Domain Context: The Conference Sprint

The course follows a narrative arc across modules:

| Module | Focus | Key Files |
|--------|-------|-----------|
| 1 | Research | `04_Vet_Summit_2026.md`, `conference_research_report.md` |
| 2 | Strategy | `06_Lead_Scoring_Logic.md`, `Conference_Recommendation_Memo.docx` |
| 3 | Build | `src/pages/Conference.jsx`, Paper MCP |
| 4 | Content | Speaker cards, email headers, social copy |
| 5 | Analysis | `05_conference_attendees.csv`, dashboard building |

## 4. Key Entry Points

### Frontend
- **App Entry**: `vibe-coding project/pawprint-app/src/main.jsx`
- **Routing**: `vibe-coding project/pawprint-app/src/App.jsx`
- **Navigation**: `vibe-coding project/pawprint-app/src/components/Navbar.jsx`
- **Pages**: `vibe-coding project/pawprint-app/src/pages/`

### Configuration
- **Vite**: `vibe-coding project/pawprint-app/vite.config.js`
- **Course README**: `README.md` — Full curriculum and module structure

### Strategy Documents
- **Company Context**: `course-starter/Pawprint/01_Company_Brief.md`
- **User Personas**: `course-starter/Pawprint/02_Personas.md`
- **OKRs/Roadmap**: `course-starter/Pawprint/03_OKRs_Roadmap.md`
- **Event Data**: `course-starter/Pawprint/04_Vet_Summit_2026.md`
- **Lead Scoring**: `course-starter/Pawprint/06_Lead_Scoring_Logic.md`
- **Attendee Data**: `course-starter/Pawprint/05_conference_attendees.csv`

## 5. Module Instructions

Each module has detailed instructions in `course-starter/`:
- `module 0/module0.md` — Setup & installation
- `module 1/module1.md` — Fundamentals (file ops, research)
- `module 2/module2.md` — Advanced PM (thinking mode, PRDs)
- `module 3/module3.md` — Software dev (MCP, Paper, Linear)
- `module 4/module4.md` — Content creation (images, HTML, copy)
- `module 5/module5.md` — Data analysis (dashboards, scoring audits)