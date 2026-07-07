# CineAI

CineAI is an AI-powered movie discovery web application built with React, Redux Toolkit, Tailwind CSS, Supabase, TMDB API, and OpenRouter. Users can securely sign in, browse trending movies, watch trailers, and receive personalized movie recommendations using natural language prompts.

## Live Demo

https://cineai-web.vercel.app/

## Features

- Secure user authentication with Supabase
- AI-powered movie recommendations using OpenRouter
- Browse Now Playing, Popular, Top Rated, and Upcoming movies
- Watch official movie trailers
- Protected routes for authenticated users
- Responsive user interface built with Tailwind CSS
- Loading shimmer states for a smoother user experience

## Tech Stack

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Supabase
- TMDB API
- OpenRouter
- Vite

## Installation

```bash
git clone https://github.com/yuvrajk-dev/CineAI.git
cd CineAI
npm install
```

## Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

## Run Locally

```bash
npm run dev
```

## Author

**Yuvraj Kumar**

- GitHub: https://github.com/yuvrajk-dev
- LinkedIn: https://www.linkedin.com/in/yuvrajkumar01/
- Email: [yuvrajk.dev@gmail.com](mailto:yuvrajk.dev@gmail.com)
