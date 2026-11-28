/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the home page, about page, case studies and footer.
 */

export const profile = {
  name: "Ali Imam",
  title: "Head of Design & Design Engineer",
  location: "Delhi NCR, India",
  availability: "Open to work",
  workPreference: "Remote, hybrid or on-site",
  email: "hello@designali.com",
  cv: "/cv.pdf",
  photo: "/ai.jpg",
  cal: "https://cal.com/aliimam/30min",
  linkedin: "https://www.linkedin.com/in/aliimam-in/",
  github: "https://github.com/designali-com",
  x: "https://x.com/designali_com",
  instagram: "https://www.instagram.com/designali.code/",
  site: "https://aliimam.designali.com",
  headline: "I design brands and products, then build them in code.",
  intro:
    "Head of Design and Design Engineer with 9+ years across brand, product and frontend. I lead design at two health-tech companies, built a design system used across four products, and run designali, an open-source library with 15.5M+ component views.",
  roles: [
    "Head of Design",
    "Design Engineer",
    "Founding Designer",
    "Product Designer",
    "UI/UX Designer",
    "Frontend Designer",
    "Graphic Designer",
  ],
}

export const stats = [
  { value: 9, suffix: "+", decimals: 0, label: "Years in design", source: "Since 2017" },
  {
    value: 15.5,
    suffix: "M+",
    decimals: 1,
    label: "Component views",
    source: "21st.dev",
    href: "https://21st.dev/@designali-in",
  },
  {
    value: 1.4,
    suffix: "M+",
    decimals: 1,
    label: "Monthly Pinterest views",
    source: "Pinterest",
    href: "https://in.pinterest.com/designalicom/",
  },
  { value: 1200, suffix: "+", decimals: 0, label: "Live products shipped", source: "Brand & code" },
]

export type CaseStudy = {
  slug: string
  title: string
  company: string
  role: string
  year?: string
  summary: string
  impact: string[]
  tags: string[]
  image: string
  live?: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "predict",
    title: "Predict",
    company: "Predict Fit",
    role: "Design Engineer",
    year: "2026",
    summary:
      "Brand, launch film, website, product dashboards and a code-first design system for a muscle-health and biological-age platform.",
    impact: [
      "Built Predict UI: 22+ components and health tools shared by 4 products",
      "Designed the Bio-AgeClocks™ visual system (MuscleAGE™, OrthoAGE™, LegAGE™)",
      "Designed and built web, clinic and operations apps in Next.js",
    ],
    tags: ["Brand", "Product", "Design system", "Next.js"],
    image: "/designs/predict.jpg",
    live: "https://predict.fit",
    featured: true,
  },
  {
    slug: "optm",
    title: "OPTM Health Care",
    company: "OPTM Health Care",
    role: "Head of Design",
    year: "2026",
    summary:
      "Leading all design at a biomarker-driven pain and metabolic clinic, from identity and website to reports, social, ads and in-clinic print.",
    impact: [
      "Built the brand system and guidelines from scratch",
      "Shipped the main site plus 3 microsites on one shared component set",
      "Created templates so the team ships on-brand social content the same day",
    ],
    tags: ["Design leadership", "Brand", "Web", "Campaigns"],
    image: "/designs/optm.jpg",
    live: "https://optmhealthcare.in",
    featured: true,
  },
  {
    slug: "designali",
    title: "Designali",
    company: "Designali",
    role: "Founder",
    summary:
      "My studio and open-source library: components, blocks, templates, icons and fonts, installable through the shadcn CLI.",
    impact: [
      "15.5M+ component views on 21st.dev, 21st.dev Ambassador (2025)",
      "Listed in the shadcn/ui registry directory",
      "Turborepo monorepo: site, registry, templates and tools",
    ],
    tags: ["0 → 1", "Design system", "Open source", "Next.js"],
    image: "/designs/designali.jpg",
    live: "https://designali.com",
    featured: true,
  },
  {
    slug: "predict-clinic",
    title: "Predict Clinic",
    company: "Predict Fit",
    role: "Product Designer & Engineer",
    year: "2026",
    summary:
      "Clinic software with role-based dashboards for admins, front desk, doctors and biomarker diagnostics.",
    impact: [
      "4 user roles, each with a focused home screen",
      "Fewer clicks for prescriptions and exercise plans",
      "Passwordless OTP sign-in for non-technical staff",
    ],
    tags: ["Product", "UX", "Dashboard"],
    image: "/designs/predict-ui.jpg",
    live: "https://predict-clinic.designali.com",
    featured: true,
  },
  {
    slug: "copycode",
    title: "CopyCode",
    company: "Designali",
    role: "Designer & Developer",
    summary:
      "A Chrome extension that copies any block on a web page as Next.js + shadcn/ui TSX, HTML, SVG or an image.",
    impact: [
      "Live on the Chrome Web Store",
      "Maps real shadcn/ui components and responsive breakpoints",
      "Pastes as editable layers into Figma and Paper",
    ],
    tags: ["Product", "Dev tools", "Engineering"],
    image: "/designs/copycode.jpg",
    live: "https://www.designali.com/copycode",
    featured: true,
  },
  {
    slug: "designali-mono",
    title: "Designali Mono",
    company: "Designali",
    role: "Type Designer",
    summary:
      "A free, open-source monospace font for design and code: 8 weights, a variable font and a terminal build.",
    impact: [
      "8 weights plus a variable wght axis (100 to 800)",
      "TTF, OTF, WOFF2 and a strict Term build",
      "Released under the SIL Open Font License",
    ],
    tags: ["Type design", "Brand", "Open source"],
    image: "/designs/designali-mono.jpg",
    live: "https://www.designali.com/fonts",
    featured: true,
  },
  {
    slug: "predict-web",
    title: "Predict Web",
    company: "Predict Fit",
    role: "Design Engineer",
    year: "2026",
    summary: "The PREDICT marketing site, rebuilt code-first with Next.js and Tailwind.",
    impact: ["Light and dark themes", "Biomarker pages from structured data"],
    tags: ["Web", "Next.js"],
    image: "/designs/design-predict.jpg",
    live: "https://predict-web.designali.com",
  },
  {
    slug: "predict-automation",
    title: "Predict Automation",
    company: "Predict Fit",
    role: "Product Designer & Engineer",
    year: "2026",
    summary: "An operations portal for leads, call queues, WhatsApp, reports and ad ROI.",
    impact: ["Role-based access", "Dense tables that stay readable"],
    tags: ["Product", "Dashboard"],
    image: "/designs/predict.jpg",
    live: "https://predict-automation.designali.com",
  },
  {
    slug: "optm-landing",
    title: "OPTM Landing",
    company: "OPTM Health Care",
    role: "Head of Design",
    year: "2026",
    summary: "A conversion-first landing page that takes ad traffic to a booked assessment.",
    impact: ["One call to action", "Fast on mid-range phones"],
    tags: ["Web", "Conversion"],
    image: "/designs/landing-optm.jpg",
    live: "https://landing.optmhealthcare.in",
  },
  {
    slug: "agewell",
    title: "Agewell",
    company: "OPTM Health Care",
    role: "Head of Design",
    year: "2026",
    summary: "A healthy-ageing programme site designed for adults over 50 and their families.",
    impact: ["Large type and tap targets", "Plain-language clinical content"],
    tags: ["Web", "Accessibility"],
    image: "/designs/agewell.jpg",
    live: "https://agewell.optmhealthcare.in",
  },
  {
    slug: "apurba",
    title: "Dr. Apurba Ganguly",
    company: "OPTM Health Care",
    role: "Head of Design",
    year: "2026",
    summary: "A credibility-first site for OPTM's founder and 34+ years of research.",
    impact: ["Editorial layout", "Publications as clean cards"],
    tags: ["Web", "Editorial"],
    image: "/designs/apurba-optm.jpg",
    live: "https://apurba.optmhealthcare.in",
  },
  {
    slug: "spara",
    title: "Spara Resort",
    company: "Spara Resort",
    role: "Designer & Developer",
    summary: "A calm website for a boutique nature and wellness retreat in New Delhi.",
    impact: ["Photography-led layout", "Mobile-first booking flow"],
    tags: ["Web", "Hospitality"],
    image: "/designs/spara.jpg",
    live: "https://www.spararesort.com",
  },
  {
    slug: "aliimam",
    title: "This Portfolio",
    company: "Personal",
    role: "Designer & Developer",
    summary: "Designing and building my own portfolio as a product for hiring teams.",
    impact: ["Content-first structure", "Next.js, MDX and Tailwind"],
    tags: ["Web", "Next.js"],
    image: "/designs/aliimam.jpg",
    live: "https://aliimam.designali.com",
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

/** What each role looks like in practice, backed by real work. */
export const capabilities = [
  {
    role: "Head of Design",
    summary: "I set the design direction and keep every touchpoint consistent.",
    proof: "Own brand, web, reports, print, social and ads at OPTM Health Care.",
    link: "/story/optm",
  },
  {
    role: "Founding Designer",
    summary: "I take ideas from zero to launch with a small team and no playbook.",
    proof: "Founded designali; designed Predict's invitation-only launch.",
    link: "/story/designali",
  },
  {
    role: "Design Engineer",
    summary: "I build what I design in React, Next.js, TypeScript and Tailwind.",
    proof: "Built Predict UI, a 22+ component design system, and CopyCode.",
    link: "/story/predict",
  },
  {
    role: "Product & UI/UX Designer",
    summary: "I design complex, data-heavy tools that stay calm and clear.",
    proof: "Predict Clinic: 4 user roles, biomarker reports, clinic workflows.",
    link: "/story/predict-clinic",
  },
  {
    role: "Frontend Designer",
    summary: "I ship fast, responsive and accessible sites that match the design.",
    proof: "12+ live sites and apps, from marketing pages to dashboards.",
    link: "/story",
  },
  {
    role: "Graphic & Brand Designer",
    summary: "I create identities, campaigns, motion and print that people notice.",
    proof: "9+ years across agencies, brands and studios. 1.4M+ monthly Pinterest views.",
    link: "/works",
  },
]

export const process = [
  {
    step: "01",
    title: "Understand",
    text: "Talk to users and stakeholders. Find the real problem and how we will measure success.",
  },
  {
    step: "02",
    title: "Define",
    text: "Turn research into a clear brief, information architecture and content structure.",
  },
  {
    step: "03",
    title: "Design",
    text: "Typography, hierarchy and flows first. Prototype in Figma or straight in code.",
  },
  {
    step: "04",
    title: "Systemise",
    text: "Turn good decisions into tokens and components so the next screen is faster.",
  },
  {
    step: "05",
    title: "Build & ship",
    text: "Take it into production myself, then measure and iterate with the team.",
  },
]

export type Experience = {
  role: string
  company: string
  type: string
  period: string
  location: string
  logo: string
  highlights: string[]
  link?: string
}

export const experiences: Experience[] = [
  {
    role: "Head of Design",
    company: "OPTM Health Care",
    type: "Full-time",
    period: "Jul 2026 – Present",
    location: "Delhi",
    logo: "/logos/logo-1-2.png",
    highlights: [
      "Lead design across brand, web, patient reports, print, social and ads",
      "Built the identity, guidelines and a shared component set for 4 sites",
      "Work with clinicians to keep every claim and visual accurate",
    ],
    link: "/story/optm",
  },
  {
    role: "Design Engineer",
    company: "Predict Fit",
    type: "Full-time",
    period: "Jul 2026 – Present",
    location: "Delhi",
    logo: "/logos/logo-1-1.png",
    highlights: [
      "Designed brand, launch film and website for an invitation-only launch",
      "Built Predict UI, a code-first design system used by 4 products",
      "Designed and built clinic, operations and reporting apps",
    ],
    link: "/story/predict",
  },
  {
    role: "Founder",
    company: "Designali",
    type: "Self-employed",
    period: "Ongoing",
    location: "Remote",
    logo: "/logo.svg",
    highlights: [
      "Open-source components, blocks and templates with 15.5M+ views",
      "Shipped CopyCode (Chrome extension) and Designali Mono (typeface)",
      "Client work in branding, motion, web and AI-assisted workflows",
    ],
    link: "/story/designali",
  },
  {
    role: "Senior Graphic Designer",
    company: "IDCUBE",
    type: "Full-time",
    period: "Feb 2024 – Jan 2026",
    location: "Noida",
    logo: "/logos/logo-1.png",
    highlights: ["Brand, marketing and digital design for a security technology company"],
  },
  {
    role: "Senior Graphic Designer",
    company: "Steadfast Nutrition",
    type: "Full-time",
    period: "Aug 2023 – Jan 2024",
    location: "Noida",
    logo: "/logos/logo-1-3.png",
    highlights: ["Packaging, campaigns and social creatives for a sports nutrition brand"],
  },
  {
    role: "Assistant Art Director",
    company: "Garage Productions",
    type: "Full-time",
    period: "Dec 2020 – Dec 2022",
    location: "Noida",
    logo: "/logos/logo-1-4.png",
    highlights: ["Art direction for video, events and brand content"],
  },
  {
    role: "Graphic Designer",
    company: "Forms Adda",
    type: "Full-time",
    period: "Jun 2020 – Dec 2020",
    location: "Ranchi",
    logo: "/logos/logo-1-5.png",
    highlights: ["Graphic and digital design"],
  },
  {
    role: "Senior Visualizer",
    company: "Yellow Straw Advertising",
    type: "Full-time",
    period: "Nov 2018 – Jun 2020",
    location: "Noida",
    logo: "/logos/logo-1-6.png",
    highlights: ["Visual concepts and campaigns for agency clients"],
  },
  {
    role: "Faculty",
    company: "WLC College India Ltd.",
    type: "Part-time",
    period: "Aug 2018 – Nov 2018",
    location: "Delhi",
    logo: "/logos/logo-1-7.png",
    highlights: ["Taught design to students"],
  },
  {
    role: "Animator",
    company: "Pointillist Media",
    type: "Full-time",
    period: "Nov 2017 – Aug 2018",
    location: "Delhi",
    logo: "/logos/logo-11.png",
    highlights: ["Animation and motion graphics"],
  },
]

export const toolkit = [
  {
    group: "Design",
    items: ["Figma", "Paper", "Design systems", "Prototyping", "UX research", "Information architecture"],
  },
  {
    group: "Engineering",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Base UI", "Motion", "Vercel"],
  },
  {
    group: "Brand & Visual",
    items: ["Brand identity", "Art direction", "Typography", "Packaging", "Print", "Illustration"],
  },
  {
    group: "Motion & Video",
    items: ["After Effects", "Premiere Pro", "Motion graphics", "Launch films", "Reels"],
  },
  {
    group: "AI workflow",
    items: ["Claude", "Cursor", "ChatGPT", "AI-assisted prototyping", "AI content"],
  },
  {
    group: "Leadership",
    items: ["Design direction", "Brand guidelines", "Stakeholder work", "Templates & ops", "Mentoring"],
  },
]

export const faqs = [
  {
    question: "What roles are you looking for?",
    answer:
      "Head of Design, Founding Designer, Design Engineer, Senior Product Designer or Senior UI/UX Designer roles, at product companies and startups where design and engineering work closely.",
  },
  {
    question: "Where are you based? Do you work remotely?",
    answer: `I'm based in ${profile.location}. I'm open to remote, hybrid and on-site roles, and I'm used to working with distributed teams.`,
  },
  {
    question: "Can you design and also write production code?",
    answer:
      "Yes. I take my designs into React, Next.js, TypeScript and Tailwind myself. Predict UI, Predict Clinic, CopyCode and this site are all designed and built by me.",
  },
  {
    question: "Have you led design before?",
    answer:
      "Yes. As Head of Design at OPTM Health Care I own the whole design language across web, reports, print, social and ads, and I build the templates and guidelines the wider team uses.",
  },
  {
    question: "What kind of products have you worked on?",
    answer:
      "Health-tech platforms, clinic software, dashboards, design systems, developer tools, marketing sites and brand identities, plus 9+ years of graphic, packaging and motion work.",
  },
  {
    question: "How do you work with product managers and engineers?",
    answer:
      "I work in the open: shared Figma files, early prototypes and components in code. Because I build too, engineers get specs they can trust and fewer surprises in hand-off.",
  },
  {
    question: "Are you open to freelance or contract work?",
    answer:
      "My main focus is a full-time role, but I take on selected freelance and studio projects through designali.",
  },
  {
    question: "How can I contact you?",
    answer: `Email ${profile.email}, message me on LinkedIn, or book a 30-minute call. My CV is available to download on this site.`,
  },
]
