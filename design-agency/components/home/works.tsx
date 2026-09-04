/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const technologies = [
  { name: "wallpaper", image: "/stock/wallpaper-1.jpg" },
  { name: "wallpaper", image: "/stock/wallpaper-3.jpg" },
  { name: "wallpaper", image: "/stock/wallpaper-3.jpg" }, 
]

export function WorksSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "group overflow-hidden relative",
        className
      )}
    >
      <div className="relative"> 
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative w-full py-2"> 
              <Marquee gap={10}>
                {technologies.map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="py-2">
                    <img
                      className="mx-auto h-40 rounded-lg md:h-80 object-contain w-auto"
                      src={tech.image}
                      alt={tech.name}
                    />
                  </div>
                ))}
              </Marquee>
             </div>
        </div>
      </div>
    </section>
  )
}
