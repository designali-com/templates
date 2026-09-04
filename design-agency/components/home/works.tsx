/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const technologies = [
  { name: "chat", image: "/img/chat-1-light.jpg" },
  { name: "dashboard", image: "/img/dashboard-1-dark.jpg" },
  { name: "hero1", image: "/img/hero-1.jpg" }, 
  { name: "login", image: "/img/login-1.jpg" }, 
  { name: "hero2", image: "/img/hero-2.jpg" }, 
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
              <Marquee pauseOnHover gap={10}>
                {technologies.map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="py-2">
                    <img
                      className="mx-auto h-60 rounded-[6px] md:h-120 border object-contain w-auto"
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
