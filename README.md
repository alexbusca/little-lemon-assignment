# Little Lemon Booking Web App

A responsive, mobile-first React web application for the "Little Lemon" Mediterranean restaurant. Built as an assignment to demonstrate UI/UX implementation, accessibility, semantics, forms validation, and automated testing.

## Features Let's look at the implementation:
- **Responsive Mobile-First Design**: Implemented matching the provided UI screenshots using a constrained 480px width auto-centered layout.
- **Accessible Semantics**: Semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`) and appropriate ARIA rules (`aria-invalid` for form elements, accessible `<form>` grouping, semantic buttons).
- **Form Validation**: Fully validated booking form using `react-hook-form` and `zod` schema validation to ensure proper user input formats (Name, Phone length, required dates and times).
- **Unit Testing**: Contains Vitest and React Testing Library tests testing React Router navigation and strict form validation rules on submission.
- **Modern Tech Stack**: React 18, TypeScript, Vite, React Router DOM, Vanilla CSS variables for precise matching of design system.

## Setup Instructions

Ensure you have Node.js 20+ installed.

1. **Install dependencies:**
    ```sh
    npm install
    ```

2. **Run the development server:**
    ```sh
    npm run dev
    ```
    Open the local address provided in your browser.

3. **Run Unit Tests:**
    ```sh
    npm run test
    ```
    This will execute the Vitest test suite that verifies the Reservation form logic and App routing.
