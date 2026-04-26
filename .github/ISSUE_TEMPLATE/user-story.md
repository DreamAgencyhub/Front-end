---
name: 🚀 User Story
about: A new feature from the end-user's perspective
title: "[US] - <short goal-oriented title>"
labels: user-story, enhancement
assignees: ''
---

## 📖 User Story
**As a** <role, e.g., guest user / content manager>  
**I want** <the desired feature or action>  
**So that** <the business value or problem solved>  

### 🎯 Why is this important?
<!-- Briefly explain the value: what pain does it solve? -->

---

## ✅ Acceptance Criteria
<!-- Clear, testable criteria. Each line is a checkbox. -->
- [ ] **Happy path**: <step-by-step ideal flow>
- [ ] **Alternative scenario**: <e.g., invalid input, empty state>
- [ ] **Error handling**: <e.g., network failure, limit exceeded>
- [ ] **Messages & notifications**: <success / error message texts>
- [ ] **Responsiveness**: <tested on mobile & tablet viewports> (if applicable)
- [ ] **Accessibility**: <minimum AA compliance, keyboard navigation tested>

---

## 🧠 Technical Notes
<!-- APIs, DB changes, design links, constraints -->
- Endpoint: `GET /api/v1/...`
- Requires new field `is_verified` in `users` table
- Figma link: [here](https://figma.com/...)
- Dependent on package `x` version `2.3+`

---

## 📏 Definition of Done
- [ ] Implementation matches all acceptance criteria
- [ ] Unit tests written and passing
- [ ] Code reviewed by at least one other developer
- [ ] Documentation updated (Swagger, README, Storybook)
- [ ] Tested and approved on staging environment
- [ ] Accessibility checked (WCAG 2.1 AA)

---

## 🔗 Dependencies
<!-- Blocking issues, PRs, or external requirements -->
- Blocked by #42
- Depends on PR #67

## 🏷 Labels & Estimation
- **Size**: S / M / L / XL
- **Priority**: Critical / High / Medium / Low
- **Sprint**: <sprint name or milestone>
