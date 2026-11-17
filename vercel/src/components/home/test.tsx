// Fonts: GeistSans — load them in your app (e.g. next/font/google) so they render the same.
import Link from "next/link"
import { cn } from "@/lib/utils"

export function CopiedBlock({ className }: { className?: string }) {
  return (
    <section
      className={cn("flex relative flex-col gap-18 py-36 font-[family-name:GeistSans,'GeistSans_Fallback'] leading-[26.4px] text-neutral-900 [font-feature-settings:'calt'_0,'rlig','ss11'] @md:pt-24 @lg:pt-36 @md:gap-16 @lg:gap-18 @md:pb-24 @lg:pb-36", className)}
    >
      <div className="grid grid-cols-12 gap-6">
        <h2
          className="col-start-1 col-end-8 text-[56px]/14 font-[450] tracking-[-0.06em] text-balance @lg:col-start-1 @lg:col-end-8"
        >Built on a foundation of fast, production-grade tooling</h2>
      </div>
      <div className="contents">
        <ul className="grid grid-cols-12 gap-6 list-none">
          <li
            className="[grid-column-start:span_4] [grid-column-end:span_4] @lg:[grid-column:span_4_/_span_4]"
          >
            <Link
              className="flex flex-col gap-8 min-h-60 p-6 border border-neutral-200 rounded-xs [touch-action:pan-y] transition-colors hover:border-[#c9c9c9] group"
              href="https://react.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex flex-col justify-between gap-6 h-47.5 @lg:gap-6">
                <div className="flex items-start w-full" aria-label="React logo" role="img">
                  <svg
                    className="size-8"
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M4.5 1.94q.3-.2.91-.03.64.19 1.47.83l.4.34q-.63.68-1.24 1.52-1.04.1-1.94.32L4 4.4q-.14-1.04.02-1.69.16-.62.48-.77m3 .01.5.43.5-.43a6 6 0 0 1 1.8-1 2.1 2.1 0 0 1 1.7.12c.52.3.81.82.95 1.41q.2.91.03 2.06l-.11.65.62.22a6 6 0 0 1 1.76 1.06c.45.42.75.93.75 1.53s-.3 1.11-.75 1.53a6 6 0 0 1-1.76 1.06l-.62.22.11.65q.17 1.16-.03 2.06c-.14.59-.43 1.11-.95 1.4-.52.3-1.12.3-1.7.13a6 6 0 0 1-1.8-1l-.5-.43-.5.43a6 6 0 0 1-1.8 1c-.58.17-1.18.18-1.7-.12s-.81-.82-.95-1.41a6 6 0 0 1-.03-2.06l.11-.65-.62-.22A6 6 0 0 1 .75 9.53 2.1 2.1 0 0 1 0 8c0-.6.3-1.11.75-1.53A6 6 0 0 1 2.5 5.4l.62-.22-.11-.65a6 6 0 0 1 .03-2.06c.14-.59.43-1.11.95-1.4.52-.3 1.12-.3 1.7-.13q.88.28 1.8 1m-.13 2.56q.3-.39.63-.73.32.34.63.73a20 20 0 0 0-1.26 0M8.7 3.08q.65.68 1.25 1.52 1.04.1 1.94.32l.1-.52q.14-1.04-.02-1.69-.16-.62-.48-.77-.3-.2-.91-.03-.64.19-1.47.83zM8 5.5q.73 0 1.41.05A18 18 0 0 1 10.82 8a18 18 0 0 1-1.4 2.45 18 18 0 0 1-2.83 0A18 18 0 0 1 5.18 8a18 18 0 0 1 1.4-2.45Q7.29 5.5 8 5.5m3.03.75.3.55q.19-.46.32-.9-.46-.12-.94-.2zm0 3.5.3-.55q.19.46.32.9-.46.12-.94.2zm.9-1.75q.41.95.69 1.84l.5-.18a5 5 0 0 0 1.45-.86q.45-.45.43-.8.02-.35-.43-.8-.48-.46-1.45-.86l-.5-.18q-.27.9-.7 1.84m-1.97 3.4q1.04-.1 1.94-.32l.1.52q.14 1.04-.02 1.69-.16.62-.48.77-.3.2-.91.03-.64-.19-1.47-.83l-.4-.34q.64-.68 1.24-1.52m-1.33.09q-.3.39-.63.73-.32-.34-.63-.73a20 20 0 0 0 1.26 0M4.97 9.75l.32.54q-.48-.07-.94-.18.14-.45.31-.91zm1.07 1.65Q5 11.3 4.1 11.08l-.1.52q-.14 1.04.02 1.69.17.62.48.77.3.2.91.03.64-.19 1.47-.83l.4-.34q-.63-.68-1.24-1.52M4.08 8q-.43.95-.7 1.84l-.5-.18a5 5 0 0 1-1.45-.86Q.98 8.35 1 8q-.02-.35.43-.8.48-.46 1.45-.86l.5-.18q.27.9.7 1.84m.58-1.2q-.18-.46-.31-.9.46-.12.94-.2a20 20 0 0 0-.63 1.1M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="flex items-center gap-3 w-full leading-6 font-[450] tracking-[-0.02em]"
                  >React<span className="font-medium -translate-x-1 transition-transform" aria-hidden="true">→</span></span>
                  <span className="leading-6 text-[#4d4d4d] text-pretty">The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.</span>
                </div>
              </div>
            </Link>
          </li>
          <li
            className="[grid-column-start:span_4] [grid-column-end:span_4] @lg:[grid-column:span_4_/_span_4]"
          >
            <Link
              className="flex flex-col gap-8 min-h-60 p-6 border border-neutral-200 rounded-xs [touch-action:pan-y] cursor-pointer transition-colors hover:border-[#c9c9c9] group"
              href="/docs/app/api-reference/turbopack"
            >
              <div className="flex flex-col justify-between gap-6 h-47.5 @lg:gap-6">
                <div className="flex items-start w-full" aria-label="Turbopack logo" role="img">
                  <svg
                    className="size-8"
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M2.74 13.96 3 14h4.5v2H3q-.99-.01-1.74-.56zM13 0a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H8.5v-2H13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8V0zM2 13l.03.26-1.47 1.48A3 3 0 0 1 0 13V8h2z"
                      />
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12.1 3.51c.23.05.4.25.4.49v8l-.01.1a.5.5 0 0 1-.39.39l-.1.01H4a.5.5 0 0 1-.49-.4L3.5 12V4c0-.28.22-.5.5-.5h8zM5.5 10.5h5v-5h-5z"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="flex items-center gap-3 w-full leading-6 font-[450] tracking-[-0.02em]"
                  >Turbopack<span className="font-medium -translate-x-1 transition-transform" aria-hidden="true">→</span></span>
                  <span className="leading-6 text-[#4d4d4d] text-pretty">An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.</span>
                </div>
              </div>
            </Link>
          </li>
          <li
            className="[grid-column-start:span_4] [grid-column-end:span_4] @lg:[grid-column:span_4_/_span_4]"
          >
            <Link
              className="flex flex-col gap-8 min-h-60 p-6 border border-neutral-200 rounded-xs [touch-action:pan-y] transition-colors hover:border-[#c9c9c9] group"
              href="https://swc.rs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex flex-col justify-between gap-6 h-47.5 @lg:gap-6">
                <div
                  className="flex items-start w-full"
                  aria-label="Speedy Web Compiler logo"
                  role="img"
                >
                  <svg
                    className="w-[91.42px] h-8"
                    viewBox="0 0 220 77"
                    height="77"
                    width="220"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M58.33 2.66a9.1 9.1 0 0 1 12.83 0l36.51 36.44.05.04 18.51 18.48c.77.77 1.8 1.18 2.86 1.18h.45a3.85 3.85 0 0 0 3.74-2.49c.39-.93.8-2.74-.88-4.41l-14.1-14.1a22 22 0 0 1-4.83-24.13A22.4 22.4 0 0 1 121.2 4 22 22 0 0 1 133.98 0h36.93a9.06 9.06 0 1 1 0 18.1h-5.44a3.85 3.85 0 0 0-3.74 2.48c-.39.93-.8 2.74.88 4.41l32.66 32.6c.77.77 1.8 1.17 2.86 1.17a3.74 3.74 0 0 0 3.74-3.73 9.06 9.06 0 0 1 18.13 0 21.87 21.87 0 0 1-21.87 21.85c-5.92 0-11.5-2.3-15.69-6.49l-32.66-32.6a22 22 0 0 1-6.14-19.7h-9.66a3.85 3.85 0 0 0-3.74 2.5c-.38.92-.79 2.73.89 4.4l14.12 14.1a22 22 0 0 1 4.83 24.13 22.4 22.4 0 0 1-7.73 9.68 22 22 0 0 1-12.76 3.98h-.46c-5.91 0-11.49-2.3-15.68-6.49l-3.13-3.12c-1.5 2.2-3.35 4.1-5.53 5.61a22 22 0 0 1-12.76 3.98c-5.92 0-11.5-2.3-15.68-6.5L25.12 19.27a4 4 0 0 0-2.85-1.18 3.85 3.85 0 0 0-3.74 2.49c-.39.93-.8 2.74.88 4.41l14.12 14.1a22 22 0 0 1 4.83 24.13 22.4 22.4 0 0 1-7.73 9.68 22 22 0 0 1-12.76 3.98H11.4a9.05 9.05 0 1 1 0-18.1h6.37a3.85 3.85 0 0 0 3.74-2.48c.38-.93.8-2.74-.89-4.41L6.53 37.8a22 22 0 0 1-4.82-24.14A22.4 22.4 0 0 1 9.44 4 22 22 0 0 1 22.22 0c5.92 0 11.5 2.3 15.69 6.49l51.22 51.12c.77.77 1.79 1.18 2.86 1.18a3.85 3.85 0 0 0 3.73-2.49c.39-.93.8-2.74-.86-4.39L58.33 15.46a9.05 9.05 0 0 1 0-12.8m7.23 5.6a1.1 1.1 0 0 0-1.61 0 1.1 1.1 0 0 0 0 1.61l36.56 36.46a11.7 11.7 0 0 1 2.58 13.01 11.8 11.8 0 0 1-11.08 7.37c-3.2 0-6.21-1.24-8.48-3.5L32.31 12.09a14.2 14.2 0 0 0-10.09-4.16 14 14 0 0 0-13.17 8.8 13.95 13.95 0 0 0 3.09 15.47l14.12 14.09a11.7 11.7 0 0 1 2.6 13.03 11.8 11.8 0 0 1-11.08 7.37h-6.37c-.63 0-1.13.5-1.13 1.13 0 .64.5 1.13 1.13 1.13h6.35c5.87 0 10.92-3.37 13.17-8.77a14 14 0 0 0-3.09-15.5L13.72 30.6a11.8 11.8 0 0 1-2.6-13.03A11.8 11.8 0 0 1 22.2 10.2c3.2 0 6.21 1.24 8.48 3.5L81.9 64.81c2.7 2.7 6.28 4.17 10.09 4.17 5.87 0 10.92-3.37 13.17-8.78 1.13-2.76 1.4-5.65.81-8.4L119 64.82c2.7 2.7 6.28 4.17 10.1 4.17h.44c5.87 0 10.93-3.37 13.17-8.78a14 14 0 0 0-3.08-15.5l-14.12-14.09a11.7 11.7 0 0 1-2.6-13.02 11.8 11.8 0 0 1 11.08-7.38h23.68a14.3 14.3 0 0 0-5.37 6.51 14 14 0 0 0 3.08 15.5l32.66 32.6c2.7 2.69 6.28 4.16 10.09 4.16 7.7 0 13.96-6.25 13.94-13.91 0-.64-.5-1.14-1.13-1.14-.64 0-1.14.5-1.14 1.14 0 6.42-5.23 11.64-11.67 11.64-3.2 0-6.21-1.24-8.48-3.5L157 30.6a11.8 11.8 0 0 1-2.6-13.02 11.8 11.8 0 0 1 11.08-7.38h5.44c.63 0 1.13-.5 1.13-1.13s-.5-1.13-1.13-1.13h-36.92a14.05 14.05 0 0 0-13.17 8.77 14 14 0 0 0 3.08 15.5l14.12 14.1a11.8 11.8 0 0 1 2.6 13.02 11.8 11.8 0 0 1-11.08 7.37h-.45c-3.2 0-6.21-1.24-8.48-3.5L102.1 44.73l-.03-.02z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="flex items-center gap-3 w-full leading-6 font-[450] tracking-[-0.02em]"
                  >Speedy Web Compiler<span className="font-medium -translate-x-1 transition-transform" aria-hidden="true">→</span></span>
                  <span className="leading-6 text-[#4d4d4d] text-pretty">An extensible Rust-based platform for the next generation of fast developer tools, and can be used for both compilation and minification.</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
