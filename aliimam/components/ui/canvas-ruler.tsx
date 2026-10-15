"use client";

import React, { useState, useRef, useEffect } from "react";

type CanvasRulerProps = {
    children?: React.ReactNode;
    className?: string;
};

export function CanvasRuler({ children, className = "" }: CanvasRulerProps) {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [inside, setInside] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setCursor({
            x: Math.round(e.clientX - rect.left - 28),
            y: Math.round(e.clientY - rect.top - 28),
        });

        setInside(true);
        setVisible(true);

        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }

        hideTimeout.current = setTimeout(() => {
            setVisible(false);

            setTimeout(() => {
                setInside(false);
            }, 1000);
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, []);

    const step = 10;
    const majorStep = 100;

    // Content area ki actual dynamic height aur width calculate karna
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.scrollWidth,
                    height: containerRef.current.scrollHeight,
                });
            }
        };

        updateSize();

        // Responsive design aur dynamically changing content ke liye ResizeObserver
        const resizeObserver = new ResizeObserver(() => updateSize());
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative min-h-svh bg-background flex flex-col ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setInside(false);

                if (hideTimeout.current) {
                    clearTimeout(hideTimeout.current);
                }
            }}
        >

            <div className="sticky top-0 left-0 z-30 h-5 w-full border-b border-primary/20 backdrop-blur-sm flex shrink-0">
                <div className="w-5 shrink-0" /> {/* Corner Box */}
                <div className="relative flex-1 overflow-hidden h-full">

                    <svg className="absolute top-0 left-0 h-full w-full" aria-hidden="true">
                        {Array.from(
                            { length: Math.ceil(dimensions.width / step) + 1 },
                            (_, i) => {
                                const x = i * step;
                                const major = x % majorStep === 0;

                                return (
                                    <g key={x}>
                                        <line
                                            x1={x}
                                            y1="28"
                                            x2={x}
                                            y2={major ? 8 : 16}
                                            stroke="currentColor"
                                            strokeOpacity={0.1}
                                        />
                                        {major && (
                                            <text
                                                x={x + 3}
                                                y="11"
                                                fontSize="8"
                                                fill="currentColor"
                                                className="select-none text-primary font-sans"
                                            >
                                                {x}
                                            </text>
                                        )}
                                    </g>
                                );
                            }
                        )}
                    </svg>

                </div>

            </div>

            <div className="relative flex flex-1 w-full min-h-0">

                <div className="hidden md:block md:sticky left-0 z-20 w-5 shrink-0 backdrop-blur-sm self-stretch">
                    <svg className="absolute top-0 border-r border-primary/20 left-0 w-full h-full" aria-hidden="true">
                        {Array.from(
                            { length: Math.ceil(dimensions.height / step) + 1 },
                            (_, i) => {
                                const y = i * step;
                                const major = y % majorStep === 0;


                                return (
                                    <g key={y}>
                                        <line
                                            x1="28"
                                            y1={y}
                                            x2={major ? 5 : 14}
                                            y2={y}
                                            stroke="currentColor"
                                            strokeOpacity={0.1}
                                        />
                                        {major && (
                                            <text
                                                x={2}
                                                y={y + 2}
                                                fontSize="8"
                                                fill="currentColor"
                                                className="select-none text-right text-primary font-sans"
                                                transform={`rotate(-90 3 ${y - 5})`}
                                            >
                                                {y}
                                            </text>
                                        )}
                                    </g>
                                );
                            }
                        )}
                    </svg>
                </div>

                <div className="relative flex-1 min-w-0">
                    {children}

                    {inside && cursor.x >= 0 && cursor.y >= 0 && (
                        <>
                            <div
                                className={`pointer-events-none absolute z-30 size-2 border border-primary bg-primary/40 transition-opacity duration-300 ease-in-out ${visible ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    left: cursor.x,
                                    top: cursor.y,
                                    transform: "translate(-50%, -50%)",
                                }}
                            />

                            <div
                                className={`pointer-events-none absolute inset-y-0 z-20 border-l border-dotted border-primary/40 transition-opacity duration-300 ease-in-out ${visible ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{ left: cursor.x }}
                            />

                            <div
                                className={`pointer-events-none absolute inset-x-0 z-20 border-t border-dotted border-primary/40 transition-opacity duration-300 ease-in-out ${visible ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{ top: cursor.y }}
                            />
                        </>
                    )}
                </div>

                <div className="hidden md:block md:sticky right-0 z-20 w-5 shrink-0 backdrop-blur-sm self-stretch">
                    <svg className="absolute top-0 border-l border-primary/20 right-0 w-full h-full" aria-hidden="true">
                        {Array.from(
                            { length: Math.ceil(dimensions.height / step) + 1 },
                            (_, i) => {
                                const y = i * step;
                                const major = y % majorStep === 0;

                                return (
                                    <g key={y}>

                                        <line
                                            x1="0"
                                            y1={y}
                                            x2={major ? 12 : 4}
                                            y2={y}
                                            stroke="currentColor"
                                            strokeOpacity={0.1}
                                        />

                                        {major && (
                                            <text
                                                x={2}
                                                y={y + 2}
                                                fontSize="8"
                                                fill="currentColor"
                                                className="select-none text-right text-primary font-sans"
                                                transform={`rotate(-90 3 ${y - 9})`}
                                            >
                                                {y}
                                            </text>
                                        )}
                                    </g>
                                );
                            }
                        )}
                    </svg>
                </div>
            </div>
        </div>
    );
}