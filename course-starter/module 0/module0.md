# AdaL Installation & Setup Guide

## Prerequisites
*   **Node.js**: Version 20.0.0 or newer
    * Check: `node -v`  
    * Download: [Node.js](https://nodejs.org/)
*   **npm or yarn**: Package manager (npm comes with Node.js)
    * Check: `npm -v` or `yarn -v`
*   **Operating System**: 
    *   macOS 10.15+
    *   Windows 10 (1903+) / 11
    *   Linux (GLIBC 2.28+)

## One-Line Setup
```bash
npm install -g @sylphai/adal-cli
```

## Installation Guide
1.  **Install globally**: Run the one-line setup command above.
2.  **Verify**: Check version with `adal -v`.
3.  **Launch**: Run `adal` in your working directory to start.
4.  **Update**: AdaL auto-updates by default. To manually update, run `npm update -g @sylphai/adal-cli`.

## AdaL Web (Preview)
AdaL Web is a browser-based interface for AdaL that provides a graphical UI for your AI R&D tasks. It shares the same agent engine as the CLI, ensuring consistency across both interfaces.

### Launching AdaL Web
Open any terminal, navigate to your project directory, and run:
```bash
adal --web
```
This automatically opens AdaL in your default browser at `http://localhost:xxxx`.

### Why Adal web
*   **Easy Snipping**: Paste screenshots directly without saving an image file (CLI supports this only on macOS).
*   **Easy Toggle**: Quickly switch between auto-approve edits and plan mode.
*   **Sidebar Mentions**: Easy file mentions directly from the sidebar.
*   **Smooth Experience**: Full tool access with a smooth scroll diff viewer.

## Common Commands
| Command | Action |
| --- | --- |
| `adal` | Start AdaL CLI |
| `adal --web` | Start AdaL Web (UI) |
| `/help` | Show all commands |
| `/init` | Generate project context (AGENTS.md) |
| `/model` | Switch AI model |
| `/quit` | Exit session |

## Shortcuts & Prefixes
| Shortcut | Action |
| --- | --- |
| `?` | Show all shortcuts |
| `Ctrl+C` | Cancel agent action (hit twice to exit session) |
| `Ctrl+P` | Toggle plan mode |
| `Shift+Tab` | Toggle auto-accept edits |
| `ESC` | Clear current input |
| `@` | Target specific file for context |
| `!` | Run shell command from the input tray|

### Latest Updates
Please check [AdaL Documentation](https://docs.sylph.ai/) for more details and latest updates.