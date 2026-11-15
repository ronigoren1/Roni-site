// Every world listed here gets its own page at /worlds/<slug>.
// To add a new world: copy books.ts, rename it, change the slug,
// then import it and add it to this list (and to the menu in site.ts).
import { books } from "./books";
import { cities } from "./cities";
import { romance } from "./romance";

export const worlds = [romance, cities, books];
