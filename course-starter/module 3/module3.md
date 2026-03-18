# Module 3: Adal for Software Development

**Work Setting:** You've shared your recommendation memo. The leadership team is optimistic and has set an ambitious goal of 75+ vet leads. Instead of just exhibiting at two conferences, they agreed to hosting a small conference and exhibiting at one industry conference in Q3. 

**Learning Objectives:** In this module, you'll learn how to use Adal CLI for software development and data analysis. 

> 🛑 **Prerequisites**
> - `frontend-design` skill installed — needed for 3.1 (`/plugin marketplace add anthropics/skills`, then `/plugin` to install)
> - **Paper desktop app** — download from [paper.design](https://paper.design) and create a free account before 3.1
> - **GitHub account** — needed for 3.2. Have your credentials ready.

# 3.0 MCP Overview — What It Is and Why It Matters

In Lesson 2.2, we installed the **docx skill** — that lets Adal create and edit Word documents without leaving the terminal. We gave Adal a prompt, and it used the skill to produce a formatted `.docx` file on our machine.
 
That's Skills. They live inside Adal, travel with it, and work entirely within its own environment.
 
Let's introduce **MCP** : a way for Adal to reach *outside* itself and connect to tools and systems it doesn't own.

## What Is MCP?
 
***MCP stands for Model Context Protocol.***
 
It's an open standard that lets an AI agent like Adal communicate with external tools — file systems, browsers, databases, design tools, APIs — using a common language both sides understand.

## Why MCP when we have Skills?
 
The clearest way to understand the difference is to look at the same job done two different ways.
 
**The job:** Jordan needs the conference research report saved as a formatted Word document on the machine.

 
### Option A — The docx Skill
 
What happens under the hood
 
```
Jordan's prompt
      │
      ▼
   Adal CLI
      │  (reads the skill's instructions internally)
      ▼
 docx Skill
      │  (runs docx-js, generates the XML structure,
      │   writes the file to disk)
      ▼
 conference_report.docx  ← appears in your working directory
```
 
The docx skill is **bundled with Adal**. It knows how to construct a `.docx` file. It handles the formatting, the XML under the hood, all of it inside its own environment.
 
 
### Option B — The Filesystem MCP

Imagine Jordan wants to save that report in a new folder with a custom file name which syncs to the rest of the team.
 
With **Filesystem MCP**, Adal gets a live, structured connection to the local file system, it can navigate directories, read and write files to precise locations. Add the MCP server:

```bash
/mcp add filesystem 
```

> ⚠️ The Filesystem MCP only accesses directories you explicitly grant. It cannot read or write anywhere else on your machine. So, edit your `~/.adal/settings.json` to add the custom location:


```json
{
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "<path_to_your_current_directory>"
    "<~/new_folder>"
  ]
}
```

What happens under the hood
 
```
Jordan's prompt
      │
      ▼
   Adal CLI
      │  (sends a request over the MCP protocol)
      ▼
 Filesystem MCP Server   ← runs locally on Jordan's machine
      │  (handles: list_directory, read_file, write_file)
      ▼
 ~/new_folder/custom_file_name.docx  ← saved exactly how and where Jordan needs it
```
**Prompt in Adal**

```bash
Using the Filesystem MCP, read the following files:
- course-starter/Pawprint/01_Company_Brief.md
- course-starter/Pawprint/03_OKRs_Roadmap.md

Search the web and research 3 veterinary or pet industry conferences happening in 2026 or 2027 that would be relevant for Pawprint to attend as a sponsor or exhibitor as of today.

For each conference, find and report:
- Conference name and organizing body
- Date and location
- Estimated attendance and whether vets, vet techs, or practice owners attend
- Sponsorship or exhibitor tiers available and rough cost if public
- Why its relevant for Pawprint vet partner acquisition goals
- Estimated ROI potential - new vet leads we could realistically generate

Save the memo as a Word document to: ~/new_folder/custom_file_name.docx

The memo should lead with a one-sentence recommendation, use a clean table for the comparison and add a short recommendation at the bottom on which conference to prioritize first and why.
```

> 💡 **Tip:** The path in prompt `~/new_folder/custom_file_name.docx` is a placeholder.
> Update it to match where you want the file saved on your machine.

### The Comparison at a Glance
 
| | Skills | MCP |
|---|---|---|
| **Lives** | Inside Adal | External server, runs separately |
| **Setup** | MD files with bash files | Configure server(local or remote); often needs authentication |
| **Use Case fit** | Repeatable, custom domain-specific tasks | Heavy integrations with other tools and systems |
| **Resource Use** | Lower, minimal overhead | Higher, network calls, server overhead and potential higher token usage |

 
## Why This Matters for a PM

Reimagine the Product and Engineering handoff 🤝 that happens in external systems from inside the terminal:
 
- Pushing a draft to a web builder → **Paper MCP** *(coming in 3.1)*
- Read and write issues in GitHub → **GitHub MCP** *(3.2)*

# 3.1 Design a Landing Page for PawPrint's Vet Summit 2026
 
We will use **Paper** — an AI-native canvas for turning ideas into seamless design workflows using natural language. And , we'll use it to build a landing page for PawPrint's Vet Summit 2026.

 
### Step 1 — Download Paper desktop app and Login

Download the desktop app from [paper.design](https://paper.design/ ). Create a free account and Complete the login.

### Step 2 — Install Paper MCP

> 💡 Change directory to the vibe-coding project/pawprint-app folder. Before adding the MCP server, make sure that you've a file open in the Paper desktop app. The MCP server needs a valid session token to communicate with Paper's API. 



```bash
/mcp add paper --url http://127.0.0.1:29979/mcp
```
 
### Step 3 — Authenticate and Verify the connection
 
```bash
/mcp                    # Open dialog
# → Select server → Authenticate
# Browser opens → Approve → Done!
# ✓ "19 tools available"
```
 
You should now see both `filesystem` and `paper` listed as active MCP servers.
 
### Step 4 — Run a quick test
 
```bash
Using the Paper MCP, create a new page titled "Test Page" with a 
single heading that says "MCP is working."
```
 
If a page appears in your Paper dashboard, you're ready for experiencing the future of Product Design.

## What we're Building

A six-tab conference landing page:
 
```
- Home
- Schedule
- Speakers
- Register
- Travel
- FAQ
```
 
All content is pre-prepared in `@course-starter/Pawprint/04_Pawprint_Vet_Summit_2026.md` — 13 event cards, speaker roster, registration form fields, and sourced research stats. Use Paper MCP to turn that content into a live, polished web page.
 
 
### Part 1 Build the Home Tab
 
Start with the hero. This is the first thing a vet sees — it needs to communicate the event, the value, and drive them toward registration in seconds.
 
**Prompt in Adal:**
 
```bash
Using the Paper MCP and @course-starter/Pawprint/pawprint_vet_summit_2026.md, design the Conference Landing page for the PawPrint Vet Summit 2026.

Build the Home tab with:
- Hero section: event name, tagline ("The Future of Veterinary Care —  One Day, One Community"), date (Q3 2026), location (San Francisco, CA),  and a prominent "Register Now" CTA button
- A 3-stat highlight bar using research stats from the content file (telehealth adoption drop, burnout cost, market size by 2034)
- A "Why Attend" section with 3 benefit cards targeting independent  practice owners and multi-location clinic owners
- A featured speaker preview showing Dr. Amanda Foster, Dr. Priya Nair, and Marcus Webb with name, title, and session name
- A closing CTA section: "Seats are limited. Register today."  with a Register Now button
```
 
### Part 2 Build the Schedule Tab
 
The schedule is the highest-information page on the site. The goal is clarity — a vet should be able to scan it in 30 seconds and know exactly what their day looks like.
 
**Prompt in Adal:**
 
```bash
Using the Paper MCP and @course-starter/Pawprint/pawprint_vet_summit_2026.md,
add a Schedule tab to the PawPrint Vet Summit page.
 
Build the full day schedule using all 13 event cards from the content file. For each event card include: session name, time, room, presenter, meta description, and tags displayed as pills. For the 2:30 PM parallel tracks (Office Hours, Demo Stations,Peer Roundtables), display them as three side-by-side cards clearly labelled as running simultaneously.
 
Add a tag filter bar at the top so visitors can filter by: All / Keynote / Demo / Networking / Panel / Roundtable / Lightning Talk
```

### Part 3-6 Subsequent Tabs

> 🔁Continue iteration for the remaining tabs. Add the content from the @course-starter/Pawprint/04_Pawprint_Vet_Summit_2026.md file. Use the ***Paper MCP***, and the ***frontend-design Skill*** to create multiple versions of the design on the artboard. 

> ❇️ Get creative and have fun!

## 🚩 Checkpoint 3.1
 
**What you practised:**
- Connecting an external MCP server and authenticating it
- Using Paper MCP to build a real design artifact from a content file
- Understanding the boundary between Skills (internal) and MCP (external)
 
## 💭**Reflection Post**
> *Paper lets you design in natural language. Did you to make better creative decisions? Consider learning about shader components to up your design game!*


# 3.2 GitHub Integration: Write a Bug Ticket

**Prerequisites:** GitHub account exists. Lesson 3.1 complete.

### Step 1 — Generate a Personal Access Token (PAT)
 
1. Go to [github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens)
2. Click **"Fine-grained tokens"**
3. Name it `adal-mcp`, set expiration to 90 days
4. Click **"Generate token"** and copy it immediately
 
> ⚠️ **GitHub won't show this token again.** Copy it before closing the page.

### Step 2 — Set up GitHub MCP

```
# Set token BEFORE starting AdaL
export GITHUB_TOKEN="ghp_xxxx" # macOS / Linux 
# OR
$env:GITHUB_TOKEN="ghp_xxxx" # Windows

adal
/mcp add github
```

### Step 3 — Verify
 
```bash
/mcp
```
 
You should see `github` listed as an active MCP server.

**Prompt in Adal:**
 
```bash
Using the GitHub MCP, create a bug issue in the pawprint/vibe-coding-project repository.
 
The registration form on the Vet Summit conference page lets users submit without filling in any of the required fields — no error shows up, it just goes through. This is a problem because we need clean lead data from conference registrations.
 
Required fields are: Full Name, Email, Practice Name, Practice Size, and Current Telehealth Status.
 
To reproduce: go to the Register tab, leave everything blank, hit Submit — it works when it shouldn't.
 
Please write this up as a proper bug ticket with a clear title,steps to reproduce, what should happen vs what actually happens, 
and flag it as high priority. Assign it to the Frontend Lead.
```
## 🚩Checkpoint 3.2
 
**What you practised:**
- Authenticating a remote MCP server using a personal access token
- Writing a structured bug ticket via GitHub MCP directly from AdaL
- Chaining MCP servers (Filesystem + Paper + GitHub) in the same workflow
 
## 💭**Reflection Post**
> *You wrote a GitHub ticket without opening a browser. What other PM tasks that currently live in external tools could realistically move into AdaL — and what would you need to set up to make that happen?*