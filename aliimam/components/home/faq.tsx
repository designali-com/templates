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
      question: "What is Designali?",
      answer:
        "Designali is a design studio that helps businesses, startups, and creators get high-quality design without the overhead of hiring a full-time designer.",
    },
    {
      id: "item-2",
      question: "What kind of design work do you offer?",
      answer:
        "Designali covers a wide range of digital design, including branding, websites, UI/UX, social media creatives, presentations, marketing materials, and other visual design needs.",
    },
    {
      id: "item-3",
      question: "Who will be working on my designs?",
      answer:
        "You’ll work directly with Ali, the designer behind Designali. Every project is personally designed and reviewed to maintain quality and consistency.",
    },
    {
      id: "item-4",
      question: "How quickly will my design be delivered?",
      answer:
        "Most design requests are delivered within 24–48 hours. More complex projects may take longer depending on the scope and level of detail required.",
    },
    {
      id: "item-5",
      question: "Can I request multiple designs?",
      answer:
        "Yes. You can submit as many design requests as you need. Requests are handled based on the active queue and your selected plan.",
    },
    {
      id: "item-6",
      question: "Are revisions included?",
      answer:
        "Yes. Revisions are included in the service. The goal is to refine each design until it matches your requirements and feels right for your brand.",
    },
    {
      id: "item-7",
      question: "How do I submit a design request?",
      answer:
        "Simply share your brief, references, content, or ideas through your preferred communication channel. You can also share Figma files, documents, screenshots, or Loom videos when needed.",
    },
    {
      id: "item-8",
      question: "How do we communicate?",
      answer:
        "Communication is simple and direct. You can share feedback, ideas, and updates through WhatsApp, email, or the tools you already use.",
    },
    {
      id: "item-9",
      question: "Can you work with my existing brand?",
      answer:
        "Absolutely. Designali can work within your existing brand guidelines, or help improve and evolve your visual identity when needed.",
    },
    {
      id: "item-10",
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. Designali is built for startups, businesses, founders, agencies, and creators who need reliable design support without hiring a full-time designer.",
    },
    {
      id: "item-11",
      question: "Can you handle large design projects?",
      answer:
        "Yes. Larger projects can be broken into smaller milestones and delivered in phases to keep the process organised, efficient, and easy to review.",
    },
    {
      id: "item-12",
      question: "Can I pause or cancel my subscription?",
      answer:
        "Yes. The subscription is flexible. You can pause or cancel based on your needs without being locked into a long-term commitment.",
    },
    {
      id: "item-13",
      question: "How do I get started with Designali?",
      answer:
        "Getting started is simple. Choose a plan or book a call to discuss your requirements, and we’ll take it from there.",
    },
  ]

  return (
    <section className="relative px-3 md:px-0">
      <div className="mb-1 border-2 border-t-0 border-dotted">
        <div className="mx-auto w-full max-w-6xl border-dotted lg:border-x-2">
          <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
            Frequently Asked Questions
          </h1>
          <Accordion
            defaultValue={["item-4"]}
            className="-mb-1 max-w-3xl mx-auto border-x-2 border-dotted"
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
