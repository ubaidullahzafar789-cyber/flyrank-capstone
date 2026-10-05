# FlyRank Capstone

A Next.js foundation for the FlyRank capstone project. It uses the App Router, JavaScript, and Tailwind CSS. Pages are Server Components by default; add a Client Component only when browser-side interactivity is needed.

## Routes

- `/` - Project home
- `/dashboard` - Dashboard foundation
- `/projects` - Projects foundation
- `/settings` - Settings foundation
- `/health` - Live GitHub service status check

The health page fetches status data from the public GitHub Status API on each request. It reports GitHub's upstream status, not FlyRank application health. No API key or environment variables are currently required; `.env.example` is included as a template for future configuration.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Run the checks before deployment:

```bash
npm run lint
npm run build
```

The project is ready to deploy to Vercel using the standard Next.js settings.
