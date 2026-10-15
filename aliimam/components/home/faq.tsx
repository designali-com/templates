"use client"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqItems = [
    {
      id: "item-1",
      question: "Who is Ali Imam?",
      answer:
        "Ali Imam is a Design Engineer and Head of Design with 9+ years of experience in UI/UX design, branding, visual design, and frontend development. He combines design thinking with code to create meaningful digital experiences.",
    },
    {
      id: "item-2",
      question: "What services do you offer?",
      answer:
        "I offer UI/UX design, website design and development, branding, design systems, graphic design, landing pages, dashboards, and digital experiences for startups, SaaS companies, and growing businesses.",
    },
    {
      id: "item-3",
      question: "What makes your approach different?",
      answer:
        "I combine design and development to turn ideas into polished, functional digital products. My focus is on thoughtful details, usability, visual consistency, and clean implementation.",
    },
    {
      id: "item-4",
      question: "How much experience do you have?",
      answer:
        "I have 9+ years of experience working across design studios, product companies, and independent client projects, covering everything from branding and visual identity to digital products and frontend development.",
    },
    {
      id: "item-5",
      question: "What technologies do you work with?",
      answer:
        "I work with React, Next.js, TypeScript, Tailwind CSS, and modern UI libraries to build responsive, high-quality web experiences. My workflow combines Figma-based design with practical frontend implementation.",
    },
    {
      id: "item-6",
      question: "Do you offer both design and development?",
      answer:
        "Yes. I can take a project from initial concepts and UI/UX design to frontend implementation, helping maintain consistency between the original design and the final product.",
    },
    {
      id: "item-7",
      question: "Who do you work with?",
      answer:
        "I work with founders, startups, agencies, product teams, and businesses looking for thoughtful design and reliable digital execution.",
    },
    {
      id: "item-8",
      question: "Can you work with an existing design system?",
      answer:
        "Absolutely. I can work with your existing design system, improve its components, establish consistent design patterns, and make it easier to scale across your product.",
    },
    {
      id: "item-9",
      question: "Do you create custom websites?",
      answer:
        "Yes. I design and build custom websites tailored to your brand, goals, and audience, with a focus on responsive layouts, performance, accessibility, and attention to detail.",
    },
    {
      id: "item-10",
      question: "Do you work on open-source projects?",
      answer:
        "Yes. I build and share reusable UI components, design resources, and developer tools through Designali to help designers and developers create better digital products.",
    },
    {
      id: "item-11",
      question: "Can I hire you for a freelance project?",
      answer:
        "Yes. I'm open to discussing freelance projects, collaborations, and selected opportunities that align with my expertise. Share your requirements, timeline, and goals to get started.",
    },
    {
      id: "item-12",
      question: "How do you approach a new project?",
      answer:
        "I start by understanding your goals, audience, and requirements. From there, I define the direction, explore ideas, design the experience, and refine the details before moving into development when needed.",
    },
    {
      id: "item-13",
      question: "How can I work with you?",
      answer:
        "You can reach out through my contact page or connect with me on LinkedIn to discuss your project, collaboration, or business requirements.",
    },
  ];

  return (
    <section className="relative px-3 md:px-0">
      <div className="mb-1 border-y-2 border-t-0 border-dotted">
        <div className="mx-auto w-full max-w-6xl border-dotted lg:border-x-2">
          <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
            Frequently Asked Questions
          </h1>
          <Accordion
            defaultValue={["item-4"]}
            className="-mb-1 max-w-4xl mx-auto border-x-2 border-dotted"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="space-y-1 border-none"
              >
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
        </div>
      </div>
    </section>
  )
}
