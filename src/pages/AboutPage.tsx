// The layout of the About page. The words are in src/content/about.ts.
import { DecoImage } from "@/components/DecoImage";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { usePageTitle } from "@/usePageTitle";

export function AboutPage() {
  usePageTitle("About", "Who I am, and why I keep noticing things.");
  const [first, ...rest] = about.paragraphs;

  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-40 md:grid-cols-2 md:pt-48">
      <DecoImage src={about.photo} alt={about.photoAlt} bw={about.photoBw} eager />
      <div className="self-center">
        <p className="eyebrow">About</p>
        <h1 className="mt-6 text-6xl md:text-8xl">{site.name}</h1>
        <div className="mt-10 space-y-6 leading-loose text-muted-foreground">
          <p className="text-foreground">{first}</p>
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block border-b border-primary pb-1 text-sm text-primary"
        >
          {about.buttonLabel}
        </a>
      </div>
    </div>
  );
}
