# Master DevHub

Max Letourneau's public developer profile and project command center. The site presents work across estimating, construction technology, AI automation, project controls, and application development.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

The first release is fully static. It has no database, authentication, API routes, analytics, or runtime secrets.

## Local setup

Requirements:

- Node.js 22 or newer
- npm 10 or newer

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

Run all build checks together:

```bash
npm run check
```

## Content updates

Portfolio content is centralized in `src/data/portfolio.ts`. Keep entries public-safe:

- No credentials, tokens, private URLs, or environment values
- No customer, pricing, estimate, or proprietary employer information
- No unpublished project URLs
- No sensitive screenshots or documents

## Environment variables

Version 1 requires no environment variables. `.env.example` documents this intentionally. Every other `.env*` file is ignored.

If a future feature needs a secret:

1. Add only the variable name and a safe placeholder to `.env.example`.
2. Store the local value in `.env.local`.
3. Store hosted values in Vercel Project Settings.
4. Never commit the value.

## GitHub setup

The intended public repository is:

```text
maxletourneau23-max/master-devhub
```

Recommended workflow after the initial scaffold:

1. Create a feature branch.
2. Open a pull request.
3. Require the `quality` CI job to pass.
4. Review the Vercel preview.
5. Merge to `main` for production.

Enable secret scanning, push protection, Dependabot alerts, and a `main` ruleset in GitHub repository settings.

## Vercel deployment

Create a new Git-integrated Vercel project named `master-devhub-next` from the public repository. Do not connect this checkout to the legacy project.

1. Import the new repository in Vercel.
2. Confirm the framework preset is Next.js.
3. Leave environment variables empty for v1.
4. Deploy and verify the generated `vercel.app` URL.
5. Test desktop, mobile, navigation, metadata, headers, and runtime logs.
6. Only after approval, move the existing custom domain from the legacy project to the new project.

Keep the old Vercel project and its `vercel.app` URL available for rollback for at least 30 days.

## Security notes

- Security headers are configured in `next.config.ts`.
- External links open with `noopener noreferrer`.
- GitHub Actions validates lint, types, and the production build.
- Dependabot checks npm and GitHub Actions dependencies.
- The application makes no third-party browser requests.

## Design

The interface follows an industrial blueprint/editorial system: true-white surfaces, graphite typography, cobalt technical linework, open project rows, a tool matrix, workspace tree, resource index, and roadmap timeline.
