"use client"

import type { SVGProps } from "react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function BuildWith() {
  return (
    <div className="relative mx-auto w-full border-x-2 max-w-6xl border-t-2 py-10 border-dotted">
      <h1 className="mb-10 px-20 text-center text-sm font-medium text-muted-foreground">
        designed & built with
      </h1>

      <div className="mx-auto max-w-2xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {tools.map((tool) => {
            const Logo = tool.logo

            return (
              <HoverCard key={tool.name}>
                <HoverCardTrigger render={
                  <button
                  type="button"
                  aria-label={tool.name}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                >
                  <Logo className="h-8 w-8" />
                </button>
                } /> 

                <HoverCardContent className="w-auto min-w-40">
                  <div className="flex items-center gap-3">  
                    <div>
                      <p className="text-sm font-medium">
                        {tool.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 222"
    preserveAspectRatio="xMidYMid"
  >
    <path fill="currentColor" d="m128 0 128 221.705H0z" />
  </svg>
)

const Shadcnui = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <path fill="black" d="M0 0h256v256H0z" />
    <path
      fill="black"
      stroke="#fff"
      strokeWidth="25"
      strokeLinecap="round"
      d="M208 128l-80 80M192 40L40 192"
    />
  </svg>
)

const BaseUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    aria-label="Base UI"
    viewBox="0 0 17 24"
  >
    <path d="M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985ZM8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8Z" />
  </svg>
)

const OpenAI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 260"
  >
    <path
      fill="currentColor"
      d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
    />
  </svg>
)

const GitHub = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 1024 1024" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="currentColor"
    />
  </svg>
)

const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 54 33">
    <g clipPath="url(#tailwindcss__a)">
      <path
        fill="#38bdf8"
        fillRule="evenodd"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tailwindcss__a">
        <path fill="#fff" d="M0 0h54v32.4H0z" />
      </clipPath>
    </defs>
  </svg>
)

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 54 80" fill="none">
    <g clipPath="url(#figma__clip0_912_3)">
      <path
        d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
        fill="#0ACF83"
      />
      <path
        d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
        fill="#A259FF"
      />
      <path
        d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.69333 0 13.3333Z"
        fill="#F24E1E"
      />
      <path
        d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
        fill="#FF7262"
      />
      <path
        d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
        fill="#1ABCFE"
      />
    </g>
    <defs>
      <clipPath id="figma__clip0_912_3">
        <rect width="53.3333" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const Paper = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 39 39" fill="none">
    <path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="#81ADEC" />
  </svg>
)

const tools = [
  {
    name: "Vercel",
    logo: Vercel,
    description: "Deployment and hosting platform.",
  },
  {
    name: "shadcn/ui",
    logo: Shadcnui,
    description: "Beautifully designed components.",
  },
  {
    name: "Base UI",
    logo: BaseUI,
    description: "Unstyled UI components for React.",
  },
  {
    name: "OpenAI",
    logo: OpenAI,
    description: "AI tools and models.",
  },
  {
    name: "GitHub",
    logo: GitHub,
    description: "Code hosting and collaboration.",
  },
  {
    name: "Tailwind CSS",
    logo: TailwindCSS,
    description: "Utility-first CSS framework.",
  },
  {
    name: "Figma",
    logo: Figma,
    description: "Design and prototyping tool.",
  },
  {
    name: "Paper",
    logo: Paper,
    description: "Design and creative tools.",
  },
]