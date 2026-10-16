# Vruksh Ekatra

An integrated educational platform designed for under-served communities, developed during **JPMorgan Chase Code for Good 2025 (Mumbai)** by **Team 50** for the **Vruksh Ecosystem**.

## Overview

Millions of learners in remote and under-served communities face significant barriers to quality education, including limited internet connectivity, device constraints, and lack of structured learning resources.

**Vruksh Ekatra** addresses this challenge by providing an end-to-end platform where NGOs can create and manage modular, bite-sized learning courses. The platform incorporates **Google Gemini AI** to automatically review course submissions for pedagogical quality, clarity, and objective alignment before they are approved by administrators and delivered to students through low-bandwidth channels such as WhatsApp.

## Key Features

- **NGO Course Studio**: Build modular courses with structured lessons, learning outcomes, and target audience details.
- **AI-Powered Course Review**: Uses Google Gemini to automatically analyze submitted courses, evaluate content quality, and generate actionable feedback for reviewers.
- **Admin Governance Portal**: A central hub for administrators to inspect pending submissions, view AI diagnostic reviews, approve or reject courses, and manage registered organizations.
- **Designed for Micro-Learning**: Course content is structured into lightweight modules ideal for learners with limited bandwidth and basic devices.
- **Analytics Dashboard**: Real-time insights into active courses, student participation, and NGO activity.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Radix UI
- **State & Data**: TanStack React Query, Axios
- **AI Integration**: Google Gemini API (`gemini-2.0-flash`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hiren1604/CFG-Vruksh-EcoSystem.git
   cd CFG-Vruksh-EcoSystem
   ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd Frontend
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` in the `Frontend/` folder and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Team 50 (CFG Mumbai 2025)

- Hiren Waghela
- Siya Nair
- Muskan
- Adriteyo
- Sahil Kumar