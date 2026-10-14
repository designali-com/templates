"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const examples = [
    {
        title: "Designali",
        url: "https://designali.com",
    }, 
    {
        title: "Vercel",
        url: "https://vercel.designali.com/",
    },
    {
        title: "Predict",
        url: "https://predict.fit",
    },
    {
        title: "OPTM",
        url: "https://optmhealthcare.in",
    },
    {
        title: "Ali Imam Components",
        url: "https://aliimam-sigma.vercel.app/",
    },
    {
        title: "Therry",
        url: "https://therry.com",
    },
    {
        title: "Design Agency",
        url: "https://design-agency.designali.com",
    },
    {
        title: "Portfolio Simple",
        url: "https://portfolio-simple.designali.com",
    },
    {
        title: "Vinson Edge",
        url: "https://vinsonedge.com/",
    },
    {
        title: "Ali Old Portfolio",
        url: "https://aliimam-web.vercel.app/",
    },
    {
        title: "Dalim Old",
        url: "https://www-three-zeta.vercel.app/",
    },
    {
        title: "Dalim UI Old",
        url: "https://dalim-ui.vercel.app/",
    },
    {
        title: "Dalim Icons Old",
        url: "https://dalim-icons.vercel.app/",
    },
    {
        title: "Dalim Fonts Old",
        url: "https://dalim-fonts.vercel.app/",
    },
    {
        title: "Dalim Visuals Old",
        url: "https://dalim-visuals.vercel.app/",
    },
    {
        title: "Dalim Works Old",
        url: "https://dalim-works.vercel.app/",
    },
    {
        title: "Dalim Agency Old",
        url: "https://dalim-agency.vercel.app/",
    },
    {
        title: "Dalim Graphic Old",
        url: "https://dalim-graphic.vercel.app/",
    },
    {
        title: "Dalim Tools Old",
        url: "https://dalim-tools.vercel.app/",
    },
];

export function LiveWebExamples() {
    return (
        <section className="w-full">
            {/* grid-cols-1 karke saare items ko full width kar diya hai */}
            <div className="grid w-full md:grid-cols-2 px-2 gap-2">
                {examples.map((example) => (
                    <WebsitePreview
                        key={example.title}
                        {...example}
                    />
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
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(([entry]) => {
            setScale(entry.contentRect.width / 1440);
        });

        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full min-w-0 overflow-hidden border bg-background">
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden"
                style={{ height: `${1000 * scale}px` }}
            >
                <iframe
                    src={url}
                    title={title}
                    loading="lazy"
                    className="absolute left-0 top-0 max-w-none border-0"
                    style={{
                        width: "1440px",
                        height: "1000px",
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                    }}
                />
            </div>

            <div className="flex w-full items-center justify-between gap-3 border-t p-2">
                <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium">
                        {title}
                    </h3>
                </div>
                <Link href={url} target="_blank" className="text-xs flex items-center gap-2">
                    <span className="shrink-0 max-w-80 truncate flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs">
                        {url} 
                        <ArrowUpRightIcon className="w-3 h-3" /> 
                    </span>
                </Link>
            </div>
        </div>
    );
}