// A photo with the art-deco "stepped" top edge.

type Props = {
  src: string;
  alt: string;
  bw?: boolean;
  /** Load immediately instead of when scrolled into view (use for photos at the top of a page). */
  eager?: boolean;
  className?: string;
};

export function DecoImage({ src, alt, bw, eager, className = "" }: Props) {
  return (
    <div className={`deco aspect-[4/5] overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`img-hover h-full w-full object-cover ${bw ? "photo-bw" : ""}`}
      />
    </div>
  );
}
