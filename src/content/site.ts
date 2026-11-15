// ─────────────────────────────────────────────────────────────
//  Site-wide settings: your name, contact details and menus.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Roni Goren",
  email: "hello@ronigoren.com",
  /** Instagram link in the footer. */
  instagram: "https://instagram.com/thelegendarymonk",
  footerTitle: "Thanks for coming in.",
  year: 2026,

  /** Links in the top menu. */
  mainMenu: [
    { to: "/worlds/romance", label: "Romance & Cinema" },
    { to: "/worlds/cities", label: "Cities & Architecture" },
    { to: "/worlds/books", label: "Books & Ideas" },
    { to: "/about", label: "About" },
  ],

  /** Links in the footer. Pages that don't exist yet show a "coming soon" page. */
  footerMenu: [
    { to: "/stories", label: "Stories" },
    { to: "/photographs", label: "Photographs" },
    { to: "/library", label: "Library" },
    { to: "/architecture", label: "Architecture" },
    { to: "/style", label: "Style" },
  ],

  /** Where the logo and the bare address (/) go. */
  homePage: "/worlds/books",
};
