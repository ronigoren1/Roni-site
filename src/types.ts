// The shapes of the content files. You normally don't need to touch this.

export type Card = {
  title: string;
  /** Small coloured line under the title, e.g. "★★★★★" or "After Socrates". */
  caption: string;
  /** The paragraph under the caption. */
  note: string;
  /** Path to a file in public/images, e.g. "/images/portrait-bw.jpg". */
  image: string;
  /** Show the photo in black and white. */
  bw?: boolean;
};

export type Section = {
  heading: string;
  cards: Card[];
};

export type World = {
  /** Used in the URL: /worlds/<slug> */
  slug: string;
  name: string;
  chapter: string;
  tagline: string;
  /** The colour used for this world's highlights (any CSS colour). */
  accent: string;
  instagram: { handle: string; url: string };
  hero: { image: string; bw?: boolean };
  intro: string;
  sections: Section[];
  quote: { text: string; by?: string };
};
