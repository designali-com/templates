import { toolkit } from "@/lib/portfolio"

import { Section, SectionHeader } from "./section"

export function Toolkit() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills & toolkit"
        title="Comfortable across the whole stack of making."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group) => (
          <div key={group.group} className="border-b border-dotted p-6 md:border-r md:px-8">
            <h3 className="text-sm font-semibold">{group.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="border bg-muted/40 px-2.5 py-1 text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
