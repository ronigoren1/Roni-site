// ─────────────────────────────────────────────────────────────
//  Cities & Architecture  →  /worlds/cities
// ─────────────────────────────────────────────────────────────
import type { World } from "@/types";

export const cities: World = {
  slug: "cities",
  name: "Cities & Architecture",
  chapter: "Chapter two",
  tagline: "old buildings, new cities — chasing the dream life",
  accent: "oklch(0.72 0.08 60)", // Bronze
  instagram: { handle: "@strollingincities", url: "https://instagram.com/strollingincities" },
  hero: { image: "/images/dusk-towers.jpg" },
  intro:
    "I walk cities the way other people read novels. This chapter is for facades and lobbies, lit windows at blue hour, and the notes I write down about where to go and what to look up at.",

  sections: [
    {
      heading: "Buildings I'd cross a city for",
      cards: [
        {
          title: "Chrysler Building",
          caption: "New York · William Van Alen, 1930",
          note: "The crown is stainless steel arranged like sunbursts. At night it looks less like a building than jewellery left on the skyline.",
          image: "/images/deco-tower.jpg",
          bw: true,
        },
        {
          title: "The Waldorf lobby",
          caption: "New York · Schultze & Weaver, 1931",
          note: "Black marble, brass, and the kind of quiet only very expensive rooms can afford. Go at 1 a.m.",
          image: "/images/deco-lobby.jpg",
        },
        {
          title: "One World Trade",
          caption: "New York · David Childs, 2014",
          note: "Best seen from far away, at blue hour, framed by older glass.",
          image: "/images/dusk-towers.jpg",
        },
      ],
    },
    {
      heading: "City walk notes",
      cards: [
        {
          title: "West 47th after rain",
          caption: "New York",
          note: "The pavement becomes a second city, upside down and shining. Walk it slowly, look up at the lamps.",
          image: "/images/noir-street.jpg",
          bw: true,
        },
        {
          title: "Tribeca corner rooms",
          caption: "New York",
          note: "The best view of the city is from someone else's window. The second best is from the street, looking in.",
          image: "/images/window-night.jpg",
        },
      ],
    },
  ],

  quote: { text: "The city is a poem you walk through." },
};
