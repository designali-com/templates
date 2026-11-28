"use client"

import { useEffect, useRef, useState } from "react"

import { CounterNumber } from "@/components/ui/counter-number"
import { stats } from "@/lib/portfolio"

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-t-2 border-dotted">
      <div ref={ref} className="mx-auto w-full max-w-6xl border-x-2 border-dotted p-2">
        <dl className="grid grid-cols-2 border-2 border-dotted lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col gap-1 p-6 md:p-8",
                index % 2 === 0 ? "border-r border-dotted" : "",
                index < 2 ? "border-b border-dotted lg:border-b-0" : "",
                index === 1 ? "lg:border-r" : "",
              ].join(" ")}
            >
              <dd className="order-1 text-4xl font-semibold tracking-tight text-primary tabular-nums md:text-5xl">
                {visible ? (
                  <CounterNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimalPlaces={stat.decimals}
                    className="text-4xl font-semibold tracking-tight text-primary md:text-5xl"
                  />
                ) : (
                  <span>
                    {stat.value.toFixed(stat.decimals)}
                    {stat.suffix}
                  </span>
                )}
              </dd>
              <dt className="order-2 text-sm font-medium">{stat.label}</dt>
              <span className="order-3 text-xs text-muted-foreground">
                {stat.href ? (
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    {stat.source}
                  </a>
                ) : (
                  stat.source
                )}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
