# IT3040 – ITPM Semester 1  
## Assignment 1 – Automated Testing with Playwright

### Degree Program
BSc (Hons) in Information Technology – Year 3

---

## 📌 Assignment Overview

This project contains automated functional and UI tests developed using **Playwright** to evaluate the accuracy and usability of a real-world language translation system.

The system under test converts:
- **Option 1:** Singlish → Sinhala  
  https://www.swifttranslator.com/
- **Option 2:** Thanglish → Tamil  
  https://tamil.changathi.com/

The focus of this assignment is **functional correctness and UI behavior only**.  
Backend APIs, performance, and security testing are **out of scope**.

---

## 🎯 Objectives

- Validate correct language conversion for a wide range of realistic inputs
- Identify failure scenarios and incorrect system behavior
- Test robustness across different input lengths and formats
- Automate all scenarios using Playwright
- Record execution results using the provided test case template (Appendix 2)

---

## 🧪 Test Coverage Summary

The automated test suite covers:

- ✅ Correct conversion scenarios (24+)
- ❌ Failure or incorrect behavior scenarios (10+)
- Sentence structure variations:
  - Simple, compound, complex
  - Interrogative & imperative
  - Positive & negative
- Daily conversational usage
- Polite vs informal language
- Tense variations (past, present, future)
- Singular/plural & pronoun usage
- Input length robustness:
  - Short (≤ 30 chars)
  - Medium (31–299 chars)
  - Long (≥ 300 chars)
- Mixed-language inputs (Singlish/Thanglish + English)
- English technical terms, brand names, places
- Numbers, dates, currency, time formats
- Punctuation, spacing, and formatting
- Slang and colloquial expressions
- One UI-related scenario (e.g., real-time output update / clearing input)

---

## 🛠️ Technologies Used

- **Node.js**
- **Playwright Test Framework**
- **JavaScript**
- **Chromium Browser (default Playwright setup)**

---

## 📂 Project Structure

