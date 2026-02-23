# Functional Requirements Document (FRD)
# Project: Website Builder
# Version: 1.0
# Author: Website Team 

---

## 1. Introduction

### 1.1 Purpose
This document defines the functional requirements for the Website Builder application. The system allows users to visually create and customize websites using drag-and-drop sections without coding.

### 1.2 Scope

The system allows users to:

- Add sections
- Edit sections
- Delete sections
- Reorder sections
- Preview website
- Publish website
- Toggle dark/light mode

---

## 2. User Roles

### Builder User

Permissions:

- Create website
- Add sections
- Edit sections
- Delete sections
- Preview website
- Publish website

---

## 3. Functional Requirements

---

### FR-001 Add Section

Description:
User can add new section.

Trigger:
User clicks "Add Section"

Flow:

1. Click Add Section
2. Select section type
3. Section added to canvas

Expected Result:
Section visible on canvas

Priority: High

---

### FR-002 Delete Section

Description:
User can delete section.

Flow:

1. Select section
2. Click delete
3. Section removed

Priority: High

---

### FR-003 Reorder Section

Description:
User can drag and drop sections.

Expected Result:
Section order updated

Priority: High

---

### FR-004 Edit Section

User can edit:

- text
- image
- button
- layout

Priority: High

---

### FR-005 Preview Website

User clicks preview.

Expected Result:
Preview mode opens.

Priority: High

---
### FR-006 Dark Mode

User can toggle dark/light theme.

Priority: Medium

---

### FR-007 Publish Website

User can publish website.

Expected Result:
Public URL generated

Priority: High

---

## 4. Non Functional Requirements

Performance:
- Load < 2 seconds

Usability:
- Easy to use

Compatibility:
- Chrome
- Firefox
- Edge

Responsive:
- Mobile
- Tablet
- Desktop