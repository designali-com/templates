import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQS() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="services">
        <AccordionTrigger>What services do you offer?</AccordionTrigger>
        <AccordionContent>
          I work across design and development, with a focus on creating
          thoughtful and functional digital experiences. My services include
          UI/UX design, website design, landing pages, dashboards, design
          systems, branding, frontend development, and creative direction. I can
          work on a project from the initial idea and wireframes all the way
          through final design and development.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="projects">
        <AccordionTrigger>
          What type of projects do you work on?
        </AccordionTrigger>
        <AccordionContent>
          I work on a wide range of digital projects including personal
          websites, portfolios, startup websites, SaaS products, dashboards,
          landing pages, design systems, and brand-focused digital experiences.
          I enjoy projects where design, technology, and storytelling come
          together.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="design-development">
        <AccordionTrigger>
          Do you handle both design and development?
        </AccordionTrigger>
        <AccordionContent>
          Yes. One of my strengths is working across both design and frontend
          development. I can design an interface in Figma and then translate it
          into a responsive, production-ready website using technologies such as
          React, Next.js, and Tailwind CSS. Working across both sides helps me
          create designs that are visually strong while also being realistic to
          build.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="process">
        <AccordionTrigger>
          What does your typical process look like?
        </AccordionTrigger>
        <AccordionContent>
          Every project is different, but I generally start by understanding the
          goals, audience, and requirements. From there, I work through research
          and ideas, information architecture, wireframes, visual design,
          prototyping, development, testing, and final refinement. I prefer
          keeping the process collaborative so feedback can be incorporated
          throughout the project instead of only at the end.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="figma">
        <AccordionTrigger>
          Do you provide Figma files and design systems?
        </AccordionTrigger>
        <AccordionContent>
          Yes. Depending on the project, I can provide organized Figma files,
          reusable components, typography and color styles, spacing rules,
          responsive layouts, and other design-system foundations. The goal is
          to make the design easy to understand, maintain, and hand off to
          development.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="development">
        <AccordionTrigger>
          What technologies do you use for development?
        </AccordionTrigger>
        <AccordionContent>
          For frontend projects, I commonly work with React, Next.js,
          TypeScript, Tailwind CSS, and component libraries such as shadcn/ui.
          The exact technology stack depends on the project requirements,
          performance needs, and how the product is expected to grow.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="timeline">
        <AccordionTrigger>
          How long does a project usually take?
        </AccordionTrigger>
        <AccordionContent>
          Timelines depend on the scope and complexity of the project. A simple
          landing page can take considerably less time than a complete product
          or design system. Before starting, I usually define the project scope,
          milestones, deliverables, and expected timeline so everyone has a
          clear understanding of what needs to be done.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="revisions">
        <AccordionTrigger>Do you offer revisions?</AccordionTrigger>
        <AccordionContent>
          Yes. Feedback is an important part of the design process. I usually
          work through structured feedback rounds to make sure the final
          direction meets the project's goals. The number of revision rounds can
          depend on the scope and requirements agreed upon before the project
          begins.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
