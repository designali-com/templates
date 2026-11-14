
"use client";

import {
  ArrowUpRightIcon,
  Loader2Icon,
  XIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const examples = [
  {
    title: "Designali",
    url: "https://designali.com",
    image: "/designs/designali.jpg",
  },
  {
    title: "Vercel",
    url: "https://vercel.designali.com/",
    image: "/designs/vercel.jpg",
  },
  {
    title: "Predict",
    url: "https://predict.fit",
    image: "/designs/predict.jpg",
  },
  {
    title: "Predict UI",
    url: "https://predict.designali.com",
    image: "/designs/predict-ui.jpg",
  },
  {
    title: "Predict Web",
    url: "https://predict-web.designali.com",
    image: "/designs/design-predict.jpg",
  },
  {
    title: "Predict Automation",
    url: "https://predict-automation.designali.com",
    image: "/designs/predict.jpg",
  },
  {
    title: "Predict Clinic",
    url: "https://predict-clinic.designali.com",
    image: "/designs/predict-ui.jpg",
  },
  {
    title: "OPTM",
    url: "https://optmhealthcare.in",
    image: "/designs/optm.jpg",
  },
  {
    title: "Ali Imam Components",
    url: "https://aliimam-sigma.vercel.app/",
    image: "/designs/ali-old.jpg",
  },
  {
    title: "Therry",
    url: "https://therry.com",
    image: "/designs/therry.jpg",
  },
  {
    title: "Agewell",
    url: "https://agewell.optmhealthcare.in",
    image: "/designs/agewell.jpg",
  },
  {
    title: "Apurba",
    url: "https://apurba.optmhealthcare.in",
    image: "/designs/apurba-optm.jpg",
  },
  {
    title: "OPTM Landing",
    url: "https://landing.optmhealthcare.in",
    image: "/designs/landing-optm.jpg",
  },
  {
    title: "Spara",
    url: "https://www.spararesort.com",
    image: "/designs/spara.jpg",
  },
  {
    title: "Design Agency",
    url: "https://design-agency.designali.com",
    image: "/designs/design-agency.jpg",
  },
  {
    title: "Portfolio Simple",
    url: "https://portfolio-simple.designali.com",
    image: "/designs/portfolio-simple.jpg",
  },
  {
    title: "Vinson Edge",
    url: "https://vinsonedge.com/",
    image: "/designs/vinsion-edge.jpg",
  },
  {
    title: "Ali Old Portfolio",
    url: "https://aliimam-web.vercel.app/",
    image: "/designs/aliimam-old.jpg",
  },
  {
    title: "Dalim Old",
    url: "https://www-three-zeta.vercel.app/",
    image: "/designs/dalim-old.jpg",
  },
  {
    title: "Dalim UI Old",
    url: "https://dalim-ui.vercel.app/",
    image: "/designs/dalim-ui-old.jpg",
  },
  {
    title: "Dalim Icons Old",
    url: "https://dalim-icons.vercel.app/",
    image: "/designs/dalim-icons-old.jpg",
  },
  {
    title: "Dalim Fonts Old",
    url: "https://dalim-fonts.vercel.app/",
    image: "/designs/dalim-fonts-old.jpg",
  },
  {
    title: "Dalim Visuals Old",
    url: "https://dalim-visuals.vercel.app/",
    image: "/designs/dalim-visuals-old.jpg",
  },
  {
    title: "Dalim Works Old",
    url: "https://dalim-works.vercel.app/",
    image: "/designs/dalim-works-old.jpg",
  },
  {
    title: "Dalim Agency Old",
    url: "https://dalim-agency.vercel.app/",
    image: "/designs/dalim-agency-old.jpg",
  },
  {
    title: "Dalim Graphic Old",
    url: "https://dalim-graphic.vercel.app/",
    image: "/designs/dalim-graphic-old.jpg",
  },
  {
    title: "Dalim Tools Old",
    url: "https://dalim-tools.vercel.app/",
    image: "/designs/dalim-tools-old.jpg",
  },
];

export function LiveWebExamples() {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Infinite scroll
  useEffect(() => {
    const currentRef = loadMoreRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prevCount) =>
            Math.min(prevCount + 4, examples.length)
          );
        }
      },
      {
        rootMargin: "200px",
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-2">
      <div className="grid w-full grid-cols-1 gap-2 px-2 md:grid-cols-2">
        {examples.slice(0, visibleCount).map((example) => (
          <WebsitePreview key={example.title} {...example} />
        ))}
      </div>

      {visibleCount < examples.length && (
        <div
          ref={loadMoreRef}
          className="flex w-full items-center justify-center py-6"
        >
          <Loader2Icon className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )}
    </section>
  );
}

function WebsitePreview({
  title,
  url,
  image,
}: {
  title: string;
  url: string;
  image: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Lazy load image
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

  // Close modal with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="group w-full min-w-0 overflow-hidden border bg-background">

        {/* 16:9 Image Preview */}
        <div
          ref={containerRef}
          className="relative aspect-video w-full overflow-hidden bg-muted/30"
        >
          {/* Loading State */}
          {isLoading && !imageError && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-muted/50 animate-pulse">
              <Loader2Icon className="h-6 w-6 animate-spin text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Loading preview...
              </span>
            </div>
          )}

          {/* Image Error */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
              Preview unavailable
            </div>
          )}

          {/* Clickable Image */}
          {shouldLoad && (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`Open live preview of ${title}`}
              className="absolute inset-0 h-full w-full cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`${title} website preview`}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setImageError(true);
                }}
                className={`h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.02] ${
                  isLoading || imageError
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              {/* Hover Overlay */}
              {!isLoading && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                  <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Live Preview
                  </span>
                </div>
              )}
            </button>
          )}
        </div>

        {/* Project Details */}
        <div className="flex w-full items-center justify-between gap-3 border-t p-3">
          <h3 className="min-w-0 truncate text-sm font-medium">
            {title}
          </h3>

          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-xs transition-colors hover:bg-muted/80"
          >
            <span className="max-w-48 truncate sm:max-w-80">
              {url}
            </span>
            <ArrowUpRightIcon className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Live Website Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} live website preview`}
            className="flex h-[95vh] w-full max-w-[1600px] flex-col overflow-hidden rounded-lg border bg-background shadow-2xl"
          >
            {/* Dialog Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3">
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold">
                  {title}
                </h2>
                <p className="truncate text-xs text-muted-foreground">
                  {url}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-2 text-xs transition-colors hover:bg-muted/80"
                >
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">
                    Open Website
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close preview"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-muted transition-colors hover:bg-muted/80"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Live Website iframe */}
            <div className="relative min-h-0 flex-1 bg-white">
              <iframe
                key={url}
                src={url}
                title={`${title} live website`}
                className="h-full w-full border-0"
                loading="eager"
                allow="fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
