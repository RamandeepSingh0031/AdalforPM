import sys
import datetime

def generate_template(title="[Feature Name]", author="[PM Name]"):
    template = f"""Title:        {title}
Author:       {author}
Status:       Draft
Last Updated: {datetime.date.today().isoformat()}
Team:
  - PM:              {author}
  - Engineering Lead: [Name]
  - Designer:        [Name]
Approvers:    [Names]
Epic Link:    [Link]

---

## 1. One-Pager (Executive Summary)

**Overview**
[2-5 sentences on what this is and who it's for]

**Objectives**
- [Goal 1]
- [Goal 2]

**Success Metrics**
- Primary: [Metric]
- Secondary: [Metric]
- Guardrail: [Metric]

---

## 2. User Scenarios
### [Scenario Title]
[Narrative walk-through featuring a specific persona]

---

## 3. Features In
- [M] [Must-have feature]
- [S] [Should-have feature]
- [C] [Could-have feature]

---

## 4. Features Out
- [Out of scope item 1]
- [Out of scope item 2]

---

## 5. Open Issues
| Question | Owner | Status |
|----------|-------|--------|
| [Question] | [Owner] | Open |

---

## 6. Timeline & Phasing
| Milestone | Target Date |
|-----------|-------------|
| [Milestone] | [Date] |
"""
    return template

if __name__ == "__main__":
    title = sys.argv[1] if len(sys.argv) > 1 else "[Feature Name]"
    print(generate_template(title))
