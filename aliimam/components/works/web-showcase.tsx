"use client";

import { ArrowUpRightIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const examples = [
  { title: "Designali", url: "https://designali.com" },
  { title: "Vercel", url: "https://vercel.designali.com/" },
  { title: "Predict", url: "https://predict.fit" },
  { title: "OPTM", url: "https://optmhealthcare.in" },
  { title: "Ali Imam Components", url: "https://aliimam-sigma.vercel.app/" },
  { title: "Therry", url: "https://therry.com" },
  { title: "Design Agency", url: "https://design-agency.designali.com" },
  { title: "Portfolio Simple", url: "https://portfolio-simple.designali.com" },
  { title: "Vinson Edge", url: "https://vinsonedge.com/" },
  { title: "Ali Old Portfolio", url: "https://aliimam-web.vercel.app/" },
  { title: "Dalim Old", url: "https://www-three-zeta.vercel.app/" },
  { title: "Dalim UI Old", url: "https://dalim-ui.vercel.app/" },
  { title: "Dalim Icons Old", url: "https://dalim-icons.vercel.app/" },
  { title: "Dalim Fonts Old", url: "https://dalim-fonts.vercel.app/" },
  { title: "Dalim Visuals Old", url: "https://dalim-visuals.vercel.app/" },
  { title: "Dalim Works Old", url: "https://dalim-works.vercel.app/" },
  { title: "Dalim Agency Old", url: "https://dalim-agency.vercel.app/" },
  { title: "Dalim Graphic Old", url: "https://dalim-graphic.vercel.app/" },
  { title: "Dalim Tools Old", url: "https://dalim-tools.vercel.app/" },
];

export function LiveWebExamples() {
  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 gap-2 px-2 md:grid-cols-2">
        {examples.map((example) => (
          <WebsitePreview key={example.title} {...example} />
        ))}
      </div>
    </section>
  );
}

function WebsitePreview({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loader State

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const nextScale = entry.contentRect.width / 1440;
      setScale((previous) =>
        Math.abs(previous - nextScale) < 0.005 ? previous : nextScale
      );
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div className="w-full min-w-0 overflow-hidden border">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-muted/30"
        style={{
          height: scale > 0 ? `${1000 * scale}px` : "300px",
        }}
      >
        {/* Loader Display */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-muted/50 animate-pulse">
            <Loader2Icon className="h-6 w-6 animate-spin text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Loading preview...</span>
          </div>
        )}

        {shouldLoad && scale > 0 && (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            onLoad={() => setIsLoading(false)} // Iframe load hone par loader band ho jayega
            className={`absolute left-0 top-0 max-w-none border-0 transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            style={{
              width: "1440px",
              height: "1000px",
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>

      <div className="flex w-full items-center justify-between gap-3 border-t p-3">
        <h3 className="min-w-0 truncate text-sm font-medium">
          {title}
        </h3>

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-xs hover:bg-muted/80 transition-colors"
        >
          <span className="max-w-48 truncate sm:max-w-80">
            {url}
          </span>
          <ArrowUpRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}