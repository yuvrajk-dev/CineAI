# 🎬 CineAI – AI-Powered Movie Discovery Platform


![React](https://img.shields.io/badge/React-19-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

A Netflix-inspired movie discovery platform built with **React.js**, **Redux Toolkit**, **Tailwind CSS**, and **Supabase**. Browse trending movies, watch trailers, and discover personalized movie recommendations using natural language prompts powered by **OpenRouter**.

🔗 **Live Demo:** https://cineai-web.vercel.app

---

## ✨ Features

- 🤖 AI-powered movie recommendations using OpenRouter 
- 🎥 Featured hero section with autoplay YouTube trailer
- 🎞️ Browse **Now Playing**, **Popular**, **Top Rated**, and **Upcoming** movies using the TMDB API
- 🔐 Secure authentication with Supabase Auth
- 🛡️ Protected routes with persistent user sessions
- 🗂️ Global state management using Redux Toolkit
- ⚡ Custom React hooks for reusable data fetching
- 💀 Skeleton loading screens for a smooth user experience
- 📱 Fully responsive design across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React.js, Redux Toolkit, React Router, Tailwind CSS |
| Backend & Database | Supabase (PostgreSQL, Authentication, Storage) |
| APIs | TMDB API, OpenRouter API (Google Gemini), YouTube Embed |
| Build & Deployment | Vite, Git, GitHub, Vercel |

---

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── pages/          # Route-level components
├── store/          # Redux Toolkit slices
├── utils/          # API calls and helper functions
├── assets/
└── App.jsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yuvrajk-dev/CineAI.git
cd CineAI
```

### Install dependencies

```bash
npm install
```

### Create a `.env.local` file

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

### Start the development server

```bash
npm run dev
```
---

## 💡 Why I Built This

I built CineAI to combine modern frontend development with AI-powered recommendations. The project demonstrates authentication, state management, API integration, reusable components, custom hooks, and responsive UI while delivering a smooth movie discovery experience.

---

## 🚀 Deployment

The application is deployed on **Vercel**.

**Live Demo:** https://cineai-web.vercel.app

---

## 👨‍💻 Author

**Yuvraj Kumar**

- GitHub: https://github.com/yuvrajk-dev
- LinkedIn: https://linkedin.com/in/yuvrajkumar01
