import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TweetCard } from "@/components/ui/tweet-card"
import { Masonary } from "./masonary"

// Define a unified list with types or direct embed IDs
const testimonials = [
  { type: "tweet", id: "1986146849020125484" },
  { type: "tweet", id: "1966609181361729770" },
  { type: "tweet", id: "2027423354852954564" },
  { type: "tweet", id: "2029297075716784521" },
  { type: "youtube", id: "OdMtHz47I4s" },
  { type: "tweet", id: "1958186156249485664" },
  { type: "tweet", id: "1914771532100043078" },
  { type: "tweet", id: "1846950174641316122" },
  { type: "tweet", id: "1877383403001057439" },
  { type: "tweet", id: "1958181359035261153" },
  { type: "tweet", id: "1994076861438284043" },
  { type: "tweet", id: "2027419258607587442" },
  { type: "tweet", id: "1986146837234102380" },
  { type: "tweet", id: "1846044133665739103" },
  { type: "tweet", id: "1970231768851591435" },
  { type: "tweet", id: "2021254834486378682" },
  { type: "tweet", id: "1937752881844695397" },
  { type: "tweet", id: "1959903753047359860" },
  { type: "tweet", id: "1958001449113117054" },
]

export function Testimonials() {
  return (
    <div className="relative h-full w-full border-y-2 border-dotted">
      <div className="relative">
        <h1 className="relative left-1/2 z-0 w-screen -translate-x-1/2 py-6 text-center text-[20vw] font-black tracking-tighter uppercase leading-[0.6em] md:py-0 md:text-[14vw] md:leading-none">
          Wall <br className="block md:hidden" /> of Love
        </h1>

        <p className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 bg-background/50 px-20 py-1 text-center text-xs text-foreground backdrop-blur-md md:text-sm">
          Real words from the people who trusted designali with their ideas.
        </p>
      </div>

      <section className="relative z-10">
        <div className="p-3">
          <div className="flex flex-wrap justify-center gap-2">
            <Masonary initialCount={9}>
              {testimonials.map((item) => {
                if (item.type === "youtube") {
                  return (
                    <div
                      key={item.id}
                      className="group relative block h-full w-full overflow-hidden border bg-background"
                    >
                      <div className="relative aspect-video w-full overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${item.id}`}
                          title="YouTube video player"
                          className="absolute inset-0 h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )
                }

                return (
                  <div
                    key={item.id}
                    className="group relative block h-full w-full"
                  >
                    <TweetCard
                      apiUrl={item.id}
                      id={item.id}
                      className="bg-code h-full w-full overflow-hidden border bg-background/50 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-200 ease-in-out hover:shadow-md"
                    />

                    <div className="absolute inset-0 flex items-center justify-center border opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-in-out will-change-[opacity] group-hover:opacity-100">
                      <Link
                        href={`https://x.com/i/status/${item.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-fit"
                      >
                        <Button
                          variant="default"
                          size="default"
                          className="pointer-events-none h-8 w-fit translate-y-3 px-2 transition-transform duration-200 ease-in-out will-change-transform group-hover:translate-y-0"
                        >
                          View Tweet
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </Masonary>
          </div>
        </div>
      </section>
    </div>
  )
}