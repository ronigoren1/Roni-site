// ─────────────────────────────────────────────────────────────
//  Romance & Cinema  →  /worlds/romance
// ─────────────────────────────────────────────────────────────
import type { World } from "@/types";

export const romance: World = {
  slug: "romance",
  name: "Romance & Cinema",
  chapter: "Chapter one",
  tagline: "a rainy night, a jazz record, an old film — romance from another era",
  accent: "oklch(0.82 0.11 80)", // Candlelight
  instagram: { handle: "@rainyjazznight", url: "https://instagram.com/rainyjazznight" },
  hero: { image: "/images/noir-street.jpg", bw: true },
  intro:
    "The films are old, the rain is new. This is where I keep the scenes I can't stop replaying, the records that sound best after midnight, and the kind of glamour that only exists in black and white.",

  sections: [
    {
      heading: "Scenes I keep returning to",
      cards: [
        {
          title: "Sabrina, 1954",
          caption: "Paris in the rain",
          note: "She comes back a different woman, and the whole film tilts. Watch it for the boat, stay for the last five minutes.",
          image: "/images/noir-street.jpg",
          bw: true,
        },
        {
          title: "In the Mood for Love, 2000",
          caption: "One corridor, everything unsaid",
          note: "Two people almost in love, filmed like a secret. The most beautiful film ever made about not touching.",
          image: "/images/lace-lamp.jpg",
        },
        {
          title: "Manhattan, 1979",
          caption: "Gershwin over the skyline",
          note: "The opening montage is a love letter worth the whole film. Black and white was the right decision.",
          image: "/images/deco-tower.jpg",
          bw: true,
        },
      ],
    },
    {
      heading: "On the record player",
      cards: [
        {
          title: "Chet Baker — It Could Happen to You",
          caption: "For slow evenings",
          note: "The trumpet sounds like someone thinking out loud. Side two, lamps low.",
          image: "/images/lipstick-book.jpg",
        },
        {
          title: "Billie Holiday — Lady in Satin",
          caption: "For rain on the window",
          note: "Her voice is already a memory of itself. Play it once, then sit with the quiet after.",
          image: "/images/window-night.jpg",
        },
      ],
    },
  ],

  quote: { text: "We'll always have Paris.", by: "Casablanca, 1942" },
};
