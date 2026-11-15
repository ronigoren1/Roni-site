// ─────────────────────────────────────────────────────────────
//  Books & Ideas  →  /worlds/books
//
//  To add a book: copy one { ... } card below, paste it after
//  the last one, and change the text. Images live in
//  public/images – drop a new .jpg there and use "/images/<name>.jpg".
// ─────────────────────────────────────────────────────────────
import type { World } from "@/types";

export const books: World = {
  slug: "books",
  name: "Books & Ideas",
  chapter: "Chapter three",
  tagline: "books, ideas, and the examined life",
  accent: "oklch(0.55 0.13 15)", // Bordeaux
  instagram: { handle: "@thelegendarymonk", url: "https://instagram.com/thelegendarymonk" },
  hero: { image: "/images/lipstick-book.jpg" },
  intro:
    "The quietest room of the three. Reviews in a sentence, lines I underlined, and the lessons biographies leave behind once the story is over.",

  sections: [
    {
      heading: "On the nightstand",
      cards: [
        {
          title: "Breakfast at Tiffany's — Truman Capote, 1958",
          caption: "★★★★★",
          note: "Lighter than the film, and sadder. A novella that wears its heartbreak like a little black dress.",
          image: "/images/portrait-bw.jpg",
          bw: true,
        },
        {
          title: "Just Kids — Patti Smith, 2010",
          caption: "★★★★",
          note: "New York as a promise kept by two broke artists. Read it at night, with the window open.",
          image: "/images/noir-street.jpg",
          bw: true,
        },
      ],
    },
    {
      heading: "Ideas I'm carrying",
      cards: [
        {
          title: "The examined life",
          caption: "After Socrates",
          note: "An unexamined life runs on other people's settings. The work is noticing which ones are yours.",
          image: "/images/lipstick-book.jpg",
        },
        {
          title: "What biographies teach",
          caption: "A running note",
          note: "Every great life reads, in the middle, like a failure. The chapter you're in is not the book.",
          image: "/images/window-night.jpg",
        },
      ],
    },
  ],

  quote: {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    by: "Anne Frank",
  },
};
