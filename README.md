# Kettlebell Command Center App

A React-based web application for managing kettlebell workouts and tracking fitness progress.

## Features

�� Authentication & User Management
Google Sign-In Integration - Secure authentication using Firebase Google Auth
User Profile Management - Access user information and preferences
Demo Mode Support - App works without authentication for testing
🏋️ Workout Tracking
Live Workout Logging - Real-time tracking during active sessions
Manual Workout Entry - Log completed workouts after the fact
Session Setup - Configure weight, target rounds, and session notes
Round Counter - Track completed rounds with easy increment/decrement
Workout Timer - Built-in timer with pause/resume functionality
Session Notes - Add personal notes and observations to each workout
📊 Progress Analytics
Interactive Dashboard - Comprehensive overview of training progress
Progress Charts - Visualize rounds completed over time (weekly/monthly views)
Personal Records Tracking - Monitor personal bests for rounds, weight, and duration
Training Streaks - Track current and longest training streaks
Volume Calculations - Automatic calculation of total weight lifted per session
Statistics Overview - Total sessions, rounds, and volume metrics
📈 Data Management
Session History - Complete log of all past workouts
Advanced Filtering - Filter by date range, rounds, weight, and duration
Multiple Sort Options - Sort by date, rounds, or duration (ascending/descending)
Data Export - Export workout history and settings as JSON
Local Storage - Persistent data storage across sessions
⚙️ Customization & Settings
Training Targets - Set daily and weekly round goals
Notification Preferences - Configure reminder settings and frequency
Default Weight Setting - Set preferred kettlebell weight
Auto-Save Options - Automatic session saving preferences
User Preferences - Customizable app behavior and display options
�� Workout Features
Armor Building Complex Focus - Specifically designed for Dan John's ABC program
Weight Configuration - Support for single or dual kettlebell setups
Target Round Setting - Set goals for each session
Progress Tracking - Visual progress indicators during workouts
Session Pausing - Pause and resume workouts as needed
Workout Validation - Ensure minimum requirements are met before completion
📱 User Experience
Responsive Design - Mobile-friendly interface for gym and home use
Intuitive Navigation - Clean, simple interface with minimal friction
Loading States - Smooth loading indicators and transitions
Error Handling - Comprehensive validation and error messaging
Confirmation Dialogs - Safe deletion and session management
🔄 Session Management
Session Summary - Detailed post-workout analysis
Personal Best Recognition - Automatic detection and celebration of achievements
Session Editing - Modify or delete completed sessions
Quick Actions - Start new sessions directly from summary
Workout Statistics - Average round time, total volume, and efficiency metrics
📋 Educational Content
Program Information - Detailed explanation of the Armor Building Complex
Dan John Philosophy - Background on the training methodology
Exercise Breakdown - Clear explanation of the 2-1-3 sequence
Training Benefits - Information about functional strength development
This comprehensive feature set makes Armor Builder a complete solution for tracking progress through the Armor Building Complex, with both immediate workout tracking and long-term progress analysis capabilities.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/kettlebell-command-center-app.git
   cd kettlebell-command-center-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used
- React 19
- Vite
- ESLint




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
