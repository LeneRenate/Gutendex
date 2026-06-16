# Gutendex

A React web app for browsing, searching, and saving books from [Project Gutenberg](https://www.gutenberg.org/) via the [Gutendex API](https://gutendex.com/).

## Features

- **Browse by category** — Explore books across 13 genres including Fiction, Mystery, Thriller, Romance, Fantasy, Philosophy, and more
- **Search** — Find books by title or author
- **Book details** — View detailed info for any book
- **Favourites** — Save and manage favourite books, persisted in `localStorage`
- **Pagination** — Navigate through large result sets

## Tech Stack

- [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/) for client-side routing
- [Axios](https://axios-http.com/) for API requests
- [Tailwind CSS v4](https://tailwindcss.com/) + CSS Modules for styling
- [Lucide React](https://lucide.dev/) for icons
- [Gutendex API](https://gutendex.com/) — a JSON web API for Project Gutenberg book data

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
src/
├── api/          # Axios instance and API helpers
├── assets/       # Category icons
├── components/   # Reusable UI components (BookCard, Header, Footer, etc.)
├── context/      # FavouritesContext — global favourites state
├── hooks/        # useBookQuery — data fetching hook with cancel support
├── pages/        # Route-level page components
├── routes/       # React Router configuration
├── styles/       # CSS Modules and global styles
└── utils/        # Category definitions, helpers
```

## API

Book data is sourced from [Gutendex](https://gutendex.com/), a third-party REST API that indexes the [Project Gutenberg](https://www.gutenberg.org/) catalogue of over 70,000 free public domain ebooks.
