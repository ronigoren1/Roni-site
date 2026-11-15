// The layout for every "world" page. The words and photos come from
// src/content/worlds – edit those files, not this one.
import type { CSSProperties } from "react";
import { DecoImage } from "@/components/DecoImage";
import type { World } from "@/types";
import { usePageTitle } from "@/usePageTitle";

export function WorldPage({ world }: { world: World }) {
  usePageTitle(world.name, world.tagline);

  return (
    <article style={{ "--world": world.accent } as CSSProperties}>
      {/* ── Big photo at the top ── */}
      <div className="relative h-[92svh] min-h-[560px] overflow-hidden">
        <img
          src={world.hero.image}
          alt=""
          className={`h-full w-full object-cover ${world.hero.bw ? "photo-bw" : ""}`}
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-16">
          <p className="eyebrow rise text-world">{world.chapter}</p>
          <h1 className="rise mt-6 text-6xl md:text-8xl lg:text-9xl">{world.name}</h1>
          <p className="rise mt-6 max-w-xl font-display text-2xl leading-snug text-muted-foreground [animation-delay:.2s] md:text-3xl">
            {world.tagline}
          </p>
        </div>
      </div>

      {/* ── Intro paragraph ── */}
      <p className="mx-auto max-w-2xl px-6 pt-20 text-lg leading-loose text-muted-foreground">
        {world.intro}
      </p>

      {/* ── Sections of cards ── */}
      {world.sections.map((section) => (
        <section key={section.heading} className="mx-auto max-w-6xl px-6 pt-28">
          <h2 className="border-t border-border pt-10 text-4xl md:text-5xl">{section.heading}</h2>
          <div className="mt-14 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {section.cards.map((card, i) => (
              <figure key={`${card.title}-${i}`}>
                <DecoImage src={card.image} alt={card.title} bw={card.bw} />
                <figcaption className="mt-6">
                  <h3 className="text-3xl leading-tight">{card.title}</h3>
                  <p className="mt-2 text-xs tracking-[0.18em] text-world">{card.caption}</p>
                  <p className="mt-4 text-sm leading-loose text-muted-foreground">{card.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      {/* ── Quote ── */}
      <blockquote className="mx-auto max-w-3xl px-6 pt-32 text-center">
        <p className="font-display text-4xl leading-tight md:text-5xl">“{world.quote.text}”</p>
        {world.quote.by && (
          <cite className="mt-6 block text-sm not-italic text-muted-foreground">{world.quote.by}</cite>
        )}
      </blockquote>

      {/* ── Instagram link ── */}
      <div className="mx-auto max-w-6xl px-6 pt-28 text-center">
        <a
          href={world.instagram.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block border-b border-world pb-1 font-display text-2xl text-world transition-colors hover:opacity-80"
        >
          Follow this world — {world.instagram.handle}
        </a>
      </div>
    </article>
  );
}
