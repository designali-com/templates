"use client"

import type { SVGProps } from "react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function BuildWith() {
  return (
    <div className="relative mx-auto w-full border-x-2 max-w-6xl border-t-2  border-dotted">
      <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
        Tools I Use
      </h1>

      <div className="mx-auto max-w-xl py-10 px-6">
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
          <h1 className="text-md text-center text-primary">
            & many more...
          </h1> 
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

const Claude = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 257">
    <path
      fill="#D97757"
      d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"
    />
  </svg>
)

const Notion = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 268">
    <path
      fill="var(--background)"
      d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"
    />
    <path fill="var(--foreground)" d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z" />

  </svg>
)


const Adobe = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 91 80">
    <g clipPath="url(#adobe__clip0_906_1839)">
      <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000" />
      <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000" />
      <path
        d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z"
        fill="#EB1000"
      />
    </g>
    <defs>
      <clipPath id="adobe__clip0_906_1839">
        <rect width="90.4318" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
)





const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 268.152 273.883">
    <defs>
      <linearGradient id="google__a">
        <stop offset="0" stopColor="#0fbc5c" />
        <stop offset="1" stopColor="#0cba65" />
      </linearGradient>
      <linearGradient id="google__g">
        <stop offset=".231" stopColor="#0fbc5f" />
        <stop offset=".312" stopColor="#0fbc5f" />
        <stop offset=".366" stopColor="#0fbc5e" />
        <stop offset=".458" stopColor="#0fbc5d" />
        <stop offset=".54" stopColor="#12bc58" />
        <stop offset=".699" stopColor="#28bf3c" />
        <stop offset=".771" stopColor="#38c02b" />
        <stop offset=".861" stopColor="#52c218" />
        <stop offset=".915" stopColor="#67c30f" />
        <stop offset="1" stopColor="#86c504" />
      </linearGradient>
      <linearGradient id="google__h">
        <stop offset=".142" stopColor="#1abd4d" />
        <stop offset=".248" stopColor="#6ec30d" />
        <stop offset=".312" stopColor="#8ac502" />
        <stop offset=".366" stopColor="#a2c600" />
        <stop offset=".446" stopColor="#c8c903" />
        <stop offset=".54" stopColor="#ebcb03" />
        <stop offset=".616" stopColor="#f7cd07" />
        <stop offset=".699" stopColor="#fdcd04" />
        <stop offset=".771" stopColor="#fdce05" />
        <stop offset=".861" stopColor="#ffce0a" />
      </linearGradient>
      <linearGradient id="google__f">
        <stop offset=".316" stopColor="#ff4c3c" />
        <stop offset=".604" stopColor="#ff692c" />
        <stop offset=".727" stopColor="#ff7825" />
        <stop offset=".885" stopColor="#ff8d1b" />
        <stop offset="1" stopColor="#ff9f13" />
      </linearGradient>
      <linearGradient id="google__b">
        <stop offset=".231" stopColor="#ff4541" />
        <stop offset=".312" stopColor="#ff4540" />
        <stop offset=".458" stopColor="#ff4640" />
        <stop offset=".54" stopColor="#ff473f" />
        <stop offset=".699" stopColor="#ff5138" />
        <stop offset=".771" stopColor="#ff5b33" />
        <stop offset=".861" stopColor="#ff6c29" />
        <stop offset="1" stopColor="#ff8c18" />
      </linearGradient>
      <linearGradient id="google__d">
        <stop offset=".408" stopColor="#fb4e5a" />
        <stop offset="1" stopColor="#ff4540" />
      </linearGradient>
      <linearGradient id="google__c">
        <stop offset=".132" stopColor="#0cba65" />
        <stop offset=".21" stopColor="#0bb86d" />
        <stop offset=".297" stopColor="#09b479" />
        <stop offset=".396" stopColor="#08ad93" />
        <stop offset=".477" stopColor="#0aa6a9" />
        <stop offset=".568" stopColor="#0d9cc6" />
        <stop offset=".667" stopColor="#1893dd" />
        <stop offset=".769" stopColor="#258bf1" />
        <stop offset=".859" stopColor="#3086ff" />
      </linearGradient>
      <linearGradient id="google__e">
        <stop offset=".366" stopColor="#ff4e3a" />
        <stop offset=".458" stopColor="#ff8a1b" />
        <stop offset=".54" stopColor="#ffa312" />
        <stop offset=".616" stopColor="#ffb60c" />
        <stop offset=".771" stopColor="#ffcd0a" />
        <stop offset=".861" stopColor="#fecf0a" />
        <stop offset=".915" stopColor="#fecf08" />
        <stop offset="1" stopColor="#fdcd01" />
      </linearGradient>
      <linearGradient
        xlinkHref="#google__a"
        id="google__s"
        x1="219.7"
        x2="254.467"
        y1="329.535"
        y2="329.535"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__b"
        id="google__m"
        cx="109.627"
        cy="135.862"
        r="71.46"
        fx="109.627"
        fy="135.862"
        gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__c"
        id="google__n"
        cx="45.259"
        cy="279.274"
        r="71.46"
        fx="45.259"
        fy="279.274"
        gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__d"
        id="google__l"
        cx="304.017"
        cy="118.009"
        r="47.854"
        fx="304.017"
        fy="118.009"
        gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__e"
        id="google__o"
        cx="181.001"
        cy="177.201"
        r="71.46"
        fx="181.001"
        fy="177.201"
        gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__f"
        id="google__p"
        cx="207.673"
        cy="108.097"
        r="41.102"
        fx="207.673"
        fy="108.097"
        gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__g"
        id="google__r"
        cx="109.627"
        cy="135.862"
        r="71.46"
        fx="109.627"
        fy="135.862"
        gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#google__h"
        id="google__j"
        cx="154.87"
        cy="145.969"
        r="71.46"
        fx="154.87"
        fy="145.969"
        gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)"
        gradientUnits="userSpaceOnUse"
      />
      <filter
        id="google__q"
        width="1.097"
        height="1.116"
        x="-.048"
        y="-.058"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="1.701" />
      </filter>
      <filter
        id="google__k"
        width="1.033"
        height="1.02"
        x="-.017"
        y="-.01"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation=".242" />
      </filter>
      <clipPath id="google__i" clipPathUnits="userSpaceOnUse">
        <path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z" />
      </clipPath>
    </defs>
    <g
      clipPath="url(#google__i)"
      transform="matrix(.95792 0 0 .98525 -90.174 -78.856)"
    >
      <path
        fill="url(#google__j)"
        d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z"
        filter="url(#google__k)"
      />
      <path
        fill="url(#google__l)"
        d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z"
        filter="url(#google__k)"
      />
      <path
        fill="url(#google__m)"
        d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z"
        filter="url(#google__k)"
      />
      <path
        fill="url(#google__n)"
        d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z"
        filter="url(#google__k)"
      />
      <path
        fill="#3086ff"
        d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z"
        filter="url(#google__k)"
      />
      <path
        fill="url(#google__o)"
        d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z"
        filter="url(#google__k)"
      />
      <path
        fill="url(#google__p)"
        d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z"
        filter="url(#google__q)"
      />
      <path
        fill="url(#google__r)"
        d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z"
        filter="url(#google__k)"
      />
      <path
        fill="url(#google__s)"
        d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z"
        filter="url(#google__k)"
        opacity=".5"
      />
    </g>
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
  {
    name: "Google",
    logo: Google,
    description: "Search and productivity tools.",
  },
  {
    name: "Claude",
    logo: Claude,
    description: "Design and creative tools.",
  },
  {
    name: "Adobe",
    logo: Adobe,
    description: "Design and creative tools.",
  },
  {
    name: "Notion",
    logo: Notion,
    description: "Design and creative tools.",
  },
]