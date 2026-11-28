"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, SectionHeader } from "@/components/portfolio/section"
import { faqs } from "@/lib/portfolio"

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionHeader eyebrow="For recruiters & hiring managers" title="Quick answers" />
      <Accordion
        defaultValue={["faq-0"]}
        className="mx-auto max-w-4xl border-x-2 border-dotted py-4"
      >
        {faqs.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`} className="space-y-1 border-none">
            <AccordionTrigger className="group flex w-full justify-end py-0 hover:no-underline [&_svg]:hidden">
              <div className="max-w-[80%] cursor-pointer bg-primary px-4 py-3 text-left text-base text-primary-foreground transition">
                {item.question}
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-start">
              <div className="max-w-[80%] bg-muted px-4 py-3 text-base text-muted-foreground">
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
