# 🐾 Pawprint App

A modern, high-performance veterinary telehealth platform built with **React 19** and **Vite**. This project serves as a foundational application for students to learn about component modularity, dynamic routing, and single-page webapp (SPA) architecture.

## 🚀 Tech Stack

- **Framework**: React 19 (Production Beta)
- **Build Tool**: Vite 8.0
- **Routing**: React Router 7.1
- **Styling**: Inline CSS with specialized UI components (Paper Design Shaders)
- **Linting**: ESLint 9.39

## 📂 Project Structure

```text
pawprint-app/
├── public/              # Static assets (Vite logo, etc.)
├── src/
│   ├── assets/          # Project images and videos
│   ├── components/      # Reusable UI components (Navbar, etc.)
│   ├── pages/           # Page-level components (Home, Conference)
│   ├── App.jsx          # Root application and Routing
│   └── main.jsx         # Entry point (React 19 createRoot)
├── index.html           # Main HTML template
└── vite.config.js       # Vite configuration
```

## ✨ Key Features

### 1. Dynamic Navigation System
The `Navbar` component is context-aware:
- **Home Mode**: Features smooth-scrolling links to "How it Works," "Pricing," and "Vets" sections.
- **Conference Mode**: Swaps links to show a dedicated "Vet Conference 2026" menu while maintaining Pawprint branding.
- **Smart Logo**: Clicking the "🐾 Pawprint" logo smooth-scrolls to the top when on Home, or navigates back to Home from other routes.

### 2. Student Assignment: Vet Conference Landing Page
Students will develop a secondary single-page landing page within the `/conference` route. 
- **Goal**: Create a compelling event page for veterinarians.
- **Constraints**: Maintain the global Navbar branding while customizing the navigation links for the event.

## 🛠️ Getting Started

### Prerequisites
Ensure you have Node.js installed.

### Installation
```bash
# Navigate to the project directory
cd "vibe-coding project/pawprint-app"

# Install dependencies
npm install
```

### Development
```bash
# Start the Vite development server
npm run dev
```
The application will be available at `http://localhost:5173/`.

