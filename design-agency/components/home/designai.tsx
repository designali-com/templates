"use client";

import React from "react";

type HighlightProps = {
    children: React.ReactNode;
    className: string;
    icon?: React.ReactNode;
};

function Highlight({ children, className, icon }: HighlightProps) {
    return (
        <span
            className={`inline-flex items-center gap-1 px-2 py-0.5
      font-medium text-white leading-none ${className}`}
        >
            <span>{children}</span>
            {icon && (
                <span className="inline-flex items-center justify-center">
                    {icon}
                </span>
            )}
        </span>
    );
}

function SearchIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 5 5" />
        </svg>
    );
}

function FrameIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M7 3H5a2 2 0 0 0-2 2v2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M3 17v2a2 2 0 0 0 2 2h2" />
            <rect x="7" y="7" width="10" height="10" rx="1" />
        </svg>
    );
}

function CompassIcon() {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" />
        </svg>
    );
}

export function DesignaliAISection() {
    return (
        <section className="relative w-full overflow-hidden">
            <div
                className="
          relative mx-auto flex min-h-[620px]  
          flex-col items-center justify-center
          px-6 py-24 text-center
          sm:px-10
          lg:px-20
        "
            >
                {/* Main Heading */}
                <h2
                    className="
            max-w-[900px]
            text-3xl
            font-medium  
             md:text-5xl
          "
                >
                    AI-powered.
                    <br />
                    Not AI-dependent.
                </h2>

                {/* Description */}
                <p
                    className=" mt-12 leading-12 text-xl md:text-3xl font-medium "
                >
                    We use AI to move faster on{" "}

                    <Highlight
                        className="bg-[#3478f6] h-10 px-4 rounded-sm"
                        icon={<SearchIcon />}
                    >
                        research
                    </Highlight>{" "}

                    <br className="hidden sm:block" />

                    <Highlight
                        className="bg-[#ff955f] h-10 px-4 rounded-sm"
                        icon={<FrameIcon />}
                    >
                        wireframing,
                    </Highlight>{" "}

                    and{" "}

                    <Highlight
                        className="bg-[#f83f79] h-10 px-4 rounded-sm"
                        icon={<CompassIcon />}
                    >
                        exploration.
                    </Highlight>{" "}

                    But every design
                    <br className="hidden sm:block" />
                    decision is made by a human who actually
                    <br className="hidden sm:block" />
                    understands your product, not a prompt.
                </p>
            </div>
        </section>
    );
}