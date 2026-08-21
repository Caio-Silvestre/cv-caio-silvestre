Playwright-only setup (with CI)

Goal: Set up Playwright to test the Caio Silvestre CV (Next.js) at:
http://localhost:3000

What to include
- Install only Playwright test runner (no extra frameworks)
- Configure baseURL to http://localhost:3000 and a reasonable timeout (at most 5 seconds)
- Configure webServer to start the Next.js app for local/CI runs:
  - command: `npm run dev` (or `npm run start` after build in CI, if preferred)
  - url: http://localhost:3000
  - reuseExistingServer: !process.env.CI
- Create a tests/ directory and a first smoke spec using @playwright/test that opens `/` and checks that "Caio Silvestre" is visible
- Add npm scripts: `"test": "playwright test"` and `"test:ui": "playwright test --ui"`
- CI: GitHub Actions workflow that installs and runs only Chromium

Local setup
1) Install dev dependency
	- npm i -D @playwright/test

2) Install only Chromium browser binaries (smaller and faster)
	- npx playwright install --with-deps chromium

3) Optional local run with the app already up
	- ulimit -n 65536 && npm run dev
	- npm test

GitHub Actions (Chromium only)
- Create .github/workflows/playwright.yml with a job that:
  - Checks out the repo
  - Sets up Node.js
  - Runs npm ci
  - Runs npx playwright install --with-deps chromium
  - Runs npm test (Playwright webServer must start Next.js on port 3000)
  - Uploads the HTML report as an artifact on failure

App context (for generators)
- Single-page CV built with Next.js 13 (pages router)
- Main sections: apresentação, experiências com tecnologias, frase motivacional, pilares (Criar / Planejar / Codar), contato
- Contact form fields: email, assunto, mensagem — validated with react-hook-form
- Contact actions: EmailJS submit, WhatsApp, LinkedIn, Baixar/Abrir CV
