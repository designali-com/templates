// Fonts: Geist, Geist Mono — load them in your app (e.g. next/font/google) so they render the same.
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CopiedBlock({ className }: { className?: string }) {
  return (
    <section
      className={cn("flex flex-col gap-10 p-6 text-neutral-950 bg-background border border-[#c8c8c8] [container-type:inline-size] sm:p-8 lg:h-[795.14px] lg:min-h-144 lg:p-10 xl:h-auto 2xl:h-[635.07px] scroll-mt-24", className)}
    >
      <div
        className="absolute top-0 left-0 overflow-hidden w-[325px] h-[596.7px] pointer-events-none [overflow-block:hidden] [overflow-inline:hidden] min-[576px]:w-131.5 min-[576px]:h-[807.82px] sm:w-143.5 sm:h-[652.23px] min-[704px]:w-159.5 min-[704px]:h-[540.7px] md:w-175.5 md:h-[582.17px] min-[896px]:w-207.5 min-[896px]:h-[617.07px] lg:w-[513.56px] lg:h-[793.14px] xl:w-[655.78px] xl:h-143.5 2xl:w-199.5 2xl:h-[633.07px] min-[1600px]:w-[894.66px]"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-0 w-[325px] h-[596.7px] bg-[linear-gradient(to_right,oklab(0.145_-0.00000143796_0.00000340492_/_0.13)_1px,transparent_1px),linear-gradient(oklab(0.145_-0.00000143796_0.00000340492_/_0.13)_1px,transparent_1px),linear-gradient(to_right,oklab(0.145_-0.00000143796_0.00000340492_/_0.07)_1px,transparent_1px),linear-gradient(oklab(0.145_-0.00000143796_0.00000340492_/_0.07)_1px,transparent_1px)] bg-size-[96px_96px,96px_96px,12px_12px,12px_12px] [background-repeat:repeat,repeat,repeat,repeat] [background-clip:border-box,border-box,border-box,border-box] bg-origin-padding, padding-box, padding-box, padding-box bg-scroll, scroll, scroll, scroll opacity-25 [background-blend-mode:normal,normal,normal,normal] [background-position:-1px_-1px,-1px_-1px,-1px_-1px,-1px_-1px] min-[576px]:w-131.5 min-[576px]:h-[807.82px] sm:w-143.5 sm:h-[652.23px] min-[704px]:w-159.5 min-[704px]:h-[540.7px] md:w-175.5 md:h-[582.17px] min-[896px]:w-207.5 min-[896px]:h-[617.07px] lg:w-[513.56px] lg:h-[793.14px] xl:w-[655.78px] xl:h-143.5 2xl:w-199.5 2xl:h-[633.07px] min-[1600px]:w-[894.66px]"
        />
      </div>
      <div
        className="flex relative inset-0 flex-col flex-1 justify-between gap-8 min-[576px]:h-[759.82px] sm:h-[588.23px] min-[704px]:h-auto md:h-[518.17px] min-[896px]:h-[553.07px] lg:h-[713.14px] xl:h-auto 2xl:h-[553.07px]"
      >
        <div
          className="flex flex-col flex-1 justify-center gap-10 min-[576px]:h-[759.82px] sm:h-[588.23px] min-[704px]:h-auto md:h-[518.17px] min-[896px]:h-[553.07px] lg:h-[713.14px] xl:h-auto 2xl:h-[553.07px] select-none"
        >
          <svg
            className="w-172 h-[445.82px] [overflow:visible]"
            viewBox="0 0 500 324"
            role="img"
            aria-label="A Select drawn as a blueprint: the button, the popup it opens, three options with Production highlighted, and the letters P, R and O typed to jump to it."
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-none stroke-neutral-950/30 [stroke-dasharray:3px,3px]"
              d="M60,16 V304 M360,16 V304 M24,100 H60 M24,108 H60"
            />
            <path className="fill-none stroke-neutral-950" d="M60,34 L360,34 M60,29 V39 M360,29 V39" />
            <rect className="fill-background" x="164" y="28" width="92" height="12" />
            <text className="fill-[#6f6f6f]" x="210" y="37" textAnchor="middle">anchor width</text>
            <rect
              className="fill-background stroke-neutral-950"
              x="60"
              y="52"
              width="300"
              height="48"
            />
            <text className="fill-neutral-950" x="76" y="81">Staging</text>
            <path className="fill-none stroke-neutral-950" d="M334,73 l5,5 l5,-5" />
            <path
              className="fill-none stroke-neutral-950"
              d="M376,100 L376,108 M371,100 H381 M371,108 H381"
            />
            <text className="fill-[#6f6f6f]" x="384" y="107">8</text>
            <rect
              className="fill-background stroke-[#006bff]"
              x="60"
              y="108"
              width="300"
              height="144"
            />
            <rect className="fill-transparent" x="64" y="112" width="292" height="136" />
            <text className="fill-neutral-950" x="76" y="140">Development</text>
            <text className="fill-neutral-950" x="76" y="184">Staging</text>
            <text className="fill-neutral-950" x="76" y="228">Production</text>
            <path className="fill-none stroke-neutral-950" d="M334,180 l4,4 l7,-8" />
            <rect className="fill-neutral-950" x="66" y="202" width="288" height="44" />
            <text className="fill-background" x="76" y="228"><tspan>Pro</tspan>duction</text>
            <path className="fill-none stroke-transparent" d="M76,234 h26" />
            <rect className="fill-none stroke-transparent" x="64" y="112" width="292" height="136" />
            <path
              className="fill-none stroke-neutral-950"
              d="M40,202 L40,246 M35,202 H45 M35,246 H45"
            />
            <text className="fill-[#6f6f6f]" x="32" y="227" textAnchor="end">44</text>
            <g>
              <rect
                className="fill-background stroke-neutral-950"
                x="272"
                y="274"
                width="22"
                height="22"
              />
              <text className="fill-neutral-950" x="283" y="288.5" textAnchor="middle">P</text>
            </g>
            <g>
              <rect
                className="fill-background stroke-neutral-950"
                x="300"
                y="274"
                width="22"
                height="22"
              />
              <text className="fill-neutral-950" x="311" y="288.5" textAnchor="middle">R</text>
            </g>
            <g>
              <rect
                className="fill-background stroke-neutral-950"
                x="328"
                y="274"
                width="22"
                height="22"
              />
              <text className="fill-neutral-950" x="339" y="288.5" textAnchor="middle">O</text>
            </g>
            <path
              className="fill-none stroke-neutral-950"
              d="M339,272 V258 M335,262 L339,256 L343,262"
            />
            <g>
              <rect className="fill-transparent" x="360" y="100" width="178" height="36" />
              <circle className="fill-[#006bff]" cx="360" cy="132" r="2.5" />
              <path className="fill-none stroke-[#006bff]" d="M360,132 H374 L398,116" />
              <rect className="fill-[#006bff]" x="398" y="107" width="18" height="18" />
              <text className="fill-background" x="407" y="119.5" textAnchor="middle">1</text>
              <text className="fill-[#006bff]" x="424" y="119.5">popup</text>
            </g>
            <g>
              <rect className="fill-transparent" x="356" y="164" width="182" height="32" />
              <circle className="fill-neutral-950" cx="356" cy="180" r="2.5" />
              <path className="fill-none stroke-neutral-950" d="M356,180 H370 L398,180" />
              <rect className="fill-neutral-950" x="398" y="171" width="18" height="18" />
              <text className="fill-background" x="407" y="183.5" textAnchor="middle">2</text>
              <text className="fill-[#6f6f6f]" x="424" y="183.5">listbox</text>
            </g>
            <g>
              <rect className="fill-transparent" x="350" y="269" width="188" height="32" />
              <circle className="fill-neutral-950" cx="350" cy="285" r="2.5" />
              <path className="fill-none stroke-neutral-950" d="M350,285 H364 L398,285" />
              <rect className="fill-neutral-950" x="398" y="276" width="18" height="18" />
              <text className="fill-background" x="407" y="288.5" textAnchor="middle">3</text>
              <text className="fill-[#6f6f6f]" x="424" y="288.5">typeahead</text>
            </g>
            <text className="fill-[#6f6f6f]" x="60" y="322">Select · 1:1</text>
          </svg>
          <div
            className="grid grid-cols-1 gap-2 w-full min-[704px]:grid-cols-3 min-[704px]:w-auto md:w-full lg:grid-cols-1 xl:grid-cols-3 xl:w-auto 2xl:w-full @[35rem]:grid-cols-3"
            role="group"
            aria-label="Behaviors in a Select"
          >
            <Button
              className="flex flex-col shrink items-normal justify-normal gap-1 w-[266.22px] h-[67.25px] px-3 py-2.5 font-[family-name:Geist,'Geist_Fallback',ui-sans-serif,system-ui,sans-serif] text-base font-normal tracking-normal text-neutral-950 text-start whitespace-normal bg-background bg-clip-border border border-[#006bff] rounded-none outline-none transition-colors focus-visible:outline-offset-2 focus-visible:outline-[#006bff]"
              type="button"
              aria-pressed="true"
            >
              <span className="flex items-center gap-2 w-full">
                <span
                  className="flex shrink-0 items-center justify-center h-4.5 font-[family-name:'Geist_Mono','Geist_Mono_Fallback',ui-monospace,'SF_Mono',SFMono-Regular,Menlo,monospace] text-[9px]/[13.5px] text-background bg-[#006bff] transition-colors"
                  aria-hidden="true"
                >1</span>
                <code
                  className="font-[family-name:'Geist_Mono','Geist_Mono_Fallback',ui-monospace,'SF_Mono',SFMono-Regular,Menlo,monospace] text-[17px]/[21.25px] text-[#006bff] whitespace-nowrap min-[704px]:text-[15px]/[18.75px] min-[896px]:text-[17px]/[21.25px] xl:text-[15px]/[18.75px] 2xl:text-[17px]/[21.25px] transition-colors @[35rem]:text-[15px] @[44rem]:text-[17px]"
                >createPopup</code>
              </span>
              <span className="text-sm text-[#6f6f6f]">Open. Position. Dismiss.</span>
            </Button>
            <Button
              className="flex flex-col shrink items-normal justify-normal gap-1 w-[266.22px] h-[67.25px] px-3 py-2.5 font-[family-name:Geist,'Geist_Fallback',ui-sans-serif,system-ui,sans-serif] text-base font-normal tracking-normal text-neutral-950 text-start whitespace-normal bg-background bg-clip-border border border-neutral-950/15 rounded-none outline-none transition-colors focus-visible:outline-offset-2 focus-visible:outline-[#006bff] hover:border-neutral-950/40"
              type="button"
              aria-pressed="false"
            >
              <span className="flex items-center gap-2 w-full xl:w-auto 2xl:w-full">
                <span
                  className="flex shrink-0 items-center justify-center h-4.5 font-[family-name:'Geist_Mono','Geist_Mono_Fallback',ui-monospace,'SF_Mono',SFMono-Regular,Menlo,monospace] text-[9px]/[13.5px] text-background bg-neutral-950 transition-colors"
                  aria-hidden="true"
                >2</span>
                <code
                  className="font-[family-name:'Geist_Mono','Geist_Mono_Fallback',ui-monospace,'SF_Mono',SFMono-Regular,Menlo,monospace] text-[17px]/[21.25px] whitespace-nowrap min-[704px]:text-[15px]/[18.75px] min-[896px]:text-[17px]/[21.25px] xl:text-[15px]/[18.75px] 2xl:text-[17px]/[21.25px] transition-colors @[35rem]:text-[15px] @[44rem]:text-[17px]"
                >createSelection</code>
              </span>
              <span className="text-sm text-[#6f6f6f]">Select one or many.</span>
            </Button>
            <Button
              className="flex flex-col shrink items-normal justify-normal gap-1 w-[266.22px] h-[67.25px] px-3 py-2.5 font-[family-name:Geist,'Geist_Fallback',ui-sans-serif,system-ui,sans-serif] text-base font-normal tracking-normal text-neutral-950 text-start whitespace-normal bg-background bg-clip-border border border-neutral-950/15 rounded-none outline-none transition-colors focus-visible:outline-offset-2 focus-visible:outline-[#006bff] hover:border-neutral-950/40"
              type="button"
              aria-pressed="false"
            >
              <span className="flex items-center gap-2 w-full xl:w-auto 2xl:w-full">
                <span
                  className="flex shrink-0 items-center justify-center h-4.5 font-[family-name:'Geist_Mono','Geist_Mono_Fallback',ui-monospace,'SF_Mono',SFMono-Regular,Menlo,monospace] text-[9px]/[13.5px] text-background bg-neutral-950 transition-colors"
                  aria-hidden="true"
                >3</span>
                <code
                  className="font-[family-name:'Geist_Mono','Geist_Mono_Fallback',ui-monospace,'SF_Mono',SFMono-Regular,Menlo,monospace] text-[17px]/[21.25px] whitespace-nowrap min-[704px]:text-[15px]/[18.75px] min-[896px]:text-[17px]/[21.25px] xl:text-[15px]/[18.75px] 2xl:text-[17px]/[21.25px] transition-colors @[35rem]:text-[15px] @[44rem]:text-[17px]"
                >createTypeahead</code>
              </span>
              <span className="text-sm text-[#6f6f6f]">Type to jump.</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
