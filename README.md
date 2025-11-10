# Random Words API

A TypeScript + Express API server that generates random words statistics.

## Setup

1. Install dependencies:
```bash
npm i
```

2. Start the development server:
```bash
npm run dev
```

The server will start on port 3000 (or the port specified in your environment).

## API Routes

### GET /get-random-words-map

Generates a map of random words with their frequency counts.

**Endpoint:** `GET http://localhost:3000/get-random-words-map`

**Description:** 
- Fetches 6,000 random words from an external API
- Uses rate limiting (50 concurrent requests) to avoid overwhelming the external service
- Returns a JSON object where keys are words and values are their occurrence counts

**Response Example:**
```json
{
  "hello": 3,
  "world": 1,
  "javascript": 2,
  "typescript": 4
}
```

**Error Response:**
```json
{
  "error": "Failed to fetch random words: [error details]"
}
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## CORS Configuration

The API is configured to accept requests only from `http://localhost:5173`.