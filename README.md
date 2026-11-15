# Roni Goren — the magazine

My site: Romance & Cinema, Cities & Architecture, Books & Ideas, and About.
Built with Vite + React + TypeScript + Tailwind CSS.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer).

```bash
npm install      # first time only
npm run dev      # opens at http://localhost:5173
```

The page reloads by itself every time you save a file.

`npm run build` checks for mistakes and creates the finished site in `dist/`.

---

## Where to edit what

Almost everything you'll want to change is in **`src/content/`**. Those files hold only text. No code knowledge needed.

| I want to change… | Edit this file |
|---|---|
| A book, quote, intro or Instagram link on **Books & Ideas** | `src/content/worlds/books.ts` |
| The **Romance & Cinema** page | `src/content/worlds/romance.ts` |
| The **Cities & Architecture** page | `src/content/worlds/cities.ts` |
| The **About** page text or photo | `src/content/about.ts` |
| My name, email, menus, footer | `src/content/site.ts` |
| Colours or fonts for the whole site | top of `src/styles.css` |
| A photo | put a `.jpg` in `public/images/` |

### Add a book (or any card)

In `src/content/worlds/books.ts`, copy one card, from `{` to `},`, paste it right after, and change the text:

```ts
{
  title: "The Bell Jar — Sylvia Plath, 1963",
  caption: "★★★★",
  note: "One sentence about why it stayed with me.",
  image: "/images/my-new-photo.jpg",
  bw: true,            // optional: black & white photo
},
```

### Add a new section

Copy a whole `{ heading: "...", cards: [ ... ] },` block inside `sections`.

### Change a world's colour

Each world has an `accent` line, e.g. `accent: "oklch(0.55 0.13 15)"`.
You can also use a normal colour code like `"#8B2635"`.

### Add a whole new world

1. Copy `src/content/worlds/books.ts` to a new file, e.g. `music.ts`, and change `slug` to `"music"`.
2. Add it to the list in `src/content/worlds/index.ts`.
3. Add it to `mainMenu` in `src/content/site.ts`.

It will appear at `/worlds/music`.

---

## How the code is organised

```
public/
  images/            ← all photos
  favicon.ico
src/
  content/           ← ✏️  all the words (edit these)
    site.ts
    about.ts
    worlds/
      books.ts  romance.ts  cities.ts  index.ts
  pages/             ← page layouts
    WorldPage.tsx      (used by every world)
    AboutPage.tsx
    ComingSoonPage.tsx (any page that doesn't exist yet)
  components/        ← pieces shared by every page
    Header.tsx  Footer.tsx  Layout.tsx  DecoImage.tsx
  App.tsx            ← which address shows which page
  styles.css         ← colours, fonts, effects
  types.ts           ← the shape of the content files
```

If you make a typo in a content file, such as a missing comma or quote mark, `npm run dev` shows a red error box that names the file and line.

## Putting it online

The project includes `vercel.json` for Vercel and `public/_redirects` for Netlify. They make links like `/worlds/books` keep working when someone refreshes the page. Connect the GitHub repo to either service. The build command is `npm run build` and the output folder is `dist`.
