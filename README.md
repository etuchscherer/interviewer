This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Y.A.W.S.A

Yet another weather service app.

This is a [Next.js](https://nextjs.org/) application, that uses react, and axios to fetch local weather information from [Open Meteo](https://open-meteo.com/).

* [System Requirements](#system-requirements)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Local API](#api)

## System Requirements

* Node.js 16.8 or later.
* macOS, Windows (including WSL), and Linux are supported.

## Getting Started

Clone the project, install dependencies, and run the development server:

```bash
cd $PROJECT_FOLDER
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

### Project Structure:

```
- public
- src
  - app
  - components
  - hooks
  - pages/api
```

To see what the different folders do inside of Next.js, [read these docs](https://nextjs.org/docs/getting-started/project-structure#top-level-folders).

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### API

We use the [Open Meteo]() api to do both geolocation, and fetching weather forecast. The Forecast API requires latitude and longitude, so we must do geolocation first.

Due to CORS, we proxy [Open Meteo]() calls through the Next.js built-in API, which is essentially an Express app.
