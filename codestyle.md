# Code Style Guide

## Overview

This document describes the coding style and development conventions used in the frontend project.

The frontend follows standard HTML, CSS, and JavaScript practices to improve readability and maintainability.


---

# HTML Style


## Structure

HTML code should use semantic elements where possible.

Examples:

- header
- main
- section
- button
- footer


## Formatting

HTML should maintain:

- Proper indentation
- Clear nesting structure
- Meaningful element names


Example:

```html
<button id="calculateButton">
    Calculate
</button>
JavaScript Style
Variable Naming

JavaScript variables use camelCase.

Examples:

calculationResult

historyList
Function Naming

Functions use camelCase.

Examples:

calculateExpression()

loadHistory()

deleteHistory()
Code Organization

JavaScript responsibilities:

API Communication

Responsible for:

Sending HTTP requests
Receiving JSON responses
User Interaction

Responsible for:

Button events
Input handling
Updating page content
Error Handling

The frontend should handle:

Failed backend requests
Invalid user input
Network errors

Users should receive clear error messages.

Comments

Comments should explain important logic.

Good:

// Load calculation history from backend

Avoid unnecessary comments:

// Add two numbers
a + b
Development Principles

Frontend code should focus on:

- Readability
- Maintainability
- Clear structure
- Separation between UI and API communication