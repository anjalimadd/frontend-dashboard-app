# Frontend Dashboard App

A React + TypeScript dashboard with **Preloader, FormBuilder with validation, FloatingWindow, Toolbar with Reset**, and **localStorage persistence**.  

---

## Demo

> Live demo: *(add your Vercel/Netlify link here once deployed)*  

---

## Features

- **Preloader**: 2-second splash screen before dashboard loads  
- **FormBuilder**: Name and Email inputs with live validation  
- **FloatingWindow**: Shows submitted form data in real-time  
- **Toolbar**: Reset button clears form, errors, and localStorage  
- **Persistence**: Form data saved in localStorage automatically  
- **Responsive layout**: Works on different screen sizes  

---

## Tech Stack

- **Framework**: React 18 + Vite + TypeScript  
- **Styling**: CSS Modules  
- **Routing**: React Router v6  
- **State Management**: React Context API + localStorage  
- **Animations**: CSS keyframes for Preloader spinner  

---
## File Structure
src/
├─ components/
│ ├─ FormBuilder/
│ │ ├─ FormBuilder.tsx
│ │ └─ FormBuilder.module.css
│ ├─ FloatingWindow/
│ │ ├─ FloatingWindow.tsx
│ │ └─ FloatingWindow.module.css
│ ├─ Preloader/
│ │ ├─ Preloader.tsx
│ │ └─ Preloader.module.css
│ ├─ Toolbar/
│ │ ├─ Toolbar.tsx
│ │ └─ Toolbar.module.css
├─ context/
│ └─ FormContext.tsx
├─ App.tsx
└─ main.tsx


Getting Started
1. Clone the repository
git clone https://github.com/anjalimadd/frontend-dashboard-app

2. Install dependencies
npm install

or
yarn

3. Start the development server
npm start

or
yarn start

Open http://localhost:3000 in your browser.



