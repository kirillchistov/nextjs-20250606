# nextjs-20250606
This is a [Next.js](https://nextjs.org/) learning project. 

### HW - 1
* [x] Create a public [GitHub] (https://github.com/)) project repo 
* [x] Create hw-1 branch
* [x] Create README.md 
* [x] Create pull request and post the link to the class group

### HW - 2
* [x] Bootstrap the app with npx create-next-app@latest
* [x] Remove unnecesary files
* [x] Build pages based on the Figma layout and mock data:
home (/), product list (/rackets), product page (/racket/[racketId])
* [x] Create header for every page with links to home and product list, the active link should be highlighted 
в шапке находятся ссылки: главная и ракетки (активная ссылка выделяется). 
* [x] Create footer for every page with site info
* [x] Use generateStaticParams to pre-generate pages for any 3 products of choice
* [x] Enable images by launching the server [repo to clone] (https://github.com/zubkov7/next-webinar-server).


### HW - 3
* [x] Start using server data 
* [x] Home page will load 2 selections: 10 items from the overall list and Top-10 using streaming render
* [x] The rackets page will load and display 20 items
* [x] Create separate page for Top-10 selection
* [x] On the rackets page access item data by id
* [x] Add loading indicators (Suspense/loading.tsx)
* [x] Create separate 404 pages for the rackets page and general 404

### HW - 4
* [x] Add metadata to pages. 
* [x] Metadata for the racket page must be generated dynamically
* [x] Add error handling (error.tsx and global-error.tsx)
* [x] Add top10 segment revalidation using revalidateTag
* [x] Add client navigation indicator

### HW - 5
* [x] Implement sign-up, sign-in and logout
* [x] Request user data on racket pages (write cookies)
* [x] Render 'Add to favorites' button for authorized users
* [x] Factual addition to favorites resides in userData.isFavorite. For now we only render, modification will be implemented later

### HW - 6
* [x] Implement 'add to' / 'remove from favorites' logic via context (SWR hooks)
* [x] Implement infinite scroll on racket page using SWR infinite

### HW - 7
* [x] Implement pagination
* [x] Add brand filter using api/brands endpoint
* [x] Utilize Next Image component
* [x] Add font using next/font
* [x] Add opengraph-image generation for the racket page

## How it works

The app is a Next.js storefront that reads product data from the [next-webinar-server](https://github.com/zubkov7/next-webinar-server) API during local development. Server Components fetch rackets, brands, and user session data on the server, while client providers handle favorites and navigation state.

```mermaid
flowchart TD
  Browser[Browser] --> NextApp[Next.js App Router]
  NextApp --> Layout[Root + App Layout]
  Layout --> Header[Header / UserSection]
  Layout --> Pages[Pages]

  Pages --> Home[Home /]
  Pages --> Rackets[/rackets]
  Pages --> Racket[/racket/:id]
  Pages --> Auth[Sign-in / Sign-up]

  Home --> Services[Server services]
  Rackets --> Services
  Racket --> Services

  Services -->|local dev| API[next-webinar-server :4000]
  Services -->|GitHub Pages demo| DemoStore[Mock demo store]

  API --> DB[(SQLite + Prisma)]
  Auth --> API

  Rackets --> BrandFilter[Brand filter]
  Rackets --> Pagination[Pagination links]
  Racket --> OG[opengraph-image]

  Layout --> Favorites[FavoriteProvider + SWR]
  Favorites --> Browser
```

In local mode, pages such as `/`, `/rackets`, and `/racket/[id]` call service functions that request `/api/products`, `/api/brands`, `/api/top-10`, and `/api/auth/*` on port `4000`. Cookies from sign-in are forwarded on racket requests so the UI can show favorite state. On `/rackets`, URL search params drive pagination and brand filtering; the server fetches the matching page of products and renders it with `BrandFilter`, `RacketGrid`, and prev/next links.

The GitHub Pages demo uses the same UI with embedded mock data instead of the local API, so browsing, pagination, brand filtering, and product pages work without running the backend. Auth, favorites mutation, and API revalidation are disabled in that demo build.

Live demo: https://kirillchistov.github.io/nextjs-20250606/

## Getting Started

Pre-requisites:
* [x] Install IDE [VS Code] (https://code.visualstudio.com/)
* [x] Install [node.js] (https://nodejs.org/en)
* [x] Refresh on [Git course] (https://www.youtube.com/playlist?list=PLDyvV36pndZEgSRzWGuXFrTRUFuAAMciE)

Bootstrap NextJS app
Easiest way is with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Local backend

The frontend expects the webinar API on port `4000`:

```bash
git clone https://github.com/zubkov7/next-webinar-server.git
cd next-webinar-server
npm install
npx prisma db push
npx prisma db seed
npm run dev
```

Then, in this project:

```bash
npm install
npm run dev
```

### GitHub Pages demo

The static demo is built with mock data and deployed from `.github/workflows/deploy-pages.yml`.

```bash
npm run build:pages
```

The exported site is written to `out/`. After pushing to `main` or `hw-7`, enable **GitHub Pages → Source: GitHub Actions** in the repository settings if it is not enabled yet.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
