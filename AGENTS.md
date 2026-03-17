# AGENTS.md

This file provides guidance to agents (i.e., ADAL) when working with code in this repository.

## 1. Essential Commands

The project's primary software component is a React application located in `vibe-coding project/pawprint-app`.

### Pawprint App (React/Vite)
- **Install Dependencies**: `npm install` (run from root or `vibe-coding project/pawprint-app`)
- **Start Dev Server**: `npm run dev` (run from `vibe-coding project/pawprint-app`)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

**Critical Gotchas:**
- **PowerShell Path Handling**: When using `BashTool` in this environment, always wrap paths containing spaces (e.g., `vibe-coding project`) in **single quotes** `'...'`. Double quotes may fail due to internal escaping.
- **Node Version**: The project uses React 19 and Vite 8 (beta). Ensure a modern Node.js environment (v18+).

## 2. Non-Obvious Architecture

### Dual-Directory Workflow
The repository is split into two distinct areas that work in tandem:
- **`course-starter/`**: The "Source of Truth" for business logic. Contains PRD templates, personas, and OKRs. This is where research and strategic documentation live.
- **`vibe-coding project/`**: The implementation layer. The `pawprint-app` is a React frontend that should be updated to reflect the requirements defined in `course-starter`.

### Component Communication
- **Routing**: `src/App.jsx` uses `react-router-dom`. New pages created in `src/pages/` must be manually added to the `<Routes>` block in `App.jsx` and the `Navbar.jsx` component.
- **Styling**: The project uses a mix of global CSS (`index.css`) and high-density **inline styles** within JSX files. 
- **Shaders**: The `GrainGradient` shader component from `@paper-design/shaders-react` is used for the cinematic hero backgrounds.

## 3. Domain Context: The Conference Sprint
The project follows a specific narrative arc:
1. **Research**: `course-starter/Pawprint/04_Vet_Summit_2026.md` contains the raw event data.
2. **Strategy**: `course-starter/Pawprint/06_Lead_Scoring_Logic.md` defines how to process attendee data.
3. **Execution**: The `src/pages/Conference.jsx` file is the target for building out the Summit landing page.

## 4. Key Entry Points

### Frontend Entry Points
- **Main App**: `vibe-coding project/pawprint-app/src/App.jsx`
- **Main Layout**: `vibe-coding project/pawprint-app/src/components/Navbar.jsx`
- **Logic Root**: `vibe-coding project/pawprint-app/src/main.jsx`

### Configuration
- **Vite Config**: `vibe-coding project/pawprint-app/vite.config.js`
- **Course README**: `README.md` (Root) — Contains the full curriculum and narrative overview.
