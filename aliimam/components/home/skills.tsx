import {
    Palette,
    PenTool,
    Layers,
    Layout,
    Code2,
    Monitor,
    Smartphone,
    Sparkles,
    Workflow,
    Image,
    Component,
    Bot,
    CalendarDays,
    Clapperboard,
    Film,
    Lightbulb,
    Mic,
    MousePointer2,
    Package,
    PanelsTopLeft,
    Printer,
    Terminal,
    Computer,
} from "lucide-react";

const skills = [
    { name: "UI/UX Design", icon: Layout },
    { name: "Web Design", icon: Monitor },
    { name: "Brand Identity", icon: Sparkles },
    { name: "Graphic Design", icon: Palette },
    { name: "Design Systems", icon: Layers },
    { name: "Frontend Development", icon: Code2 },
    { name: "Creative Coding", icon: Terminal },
    { name: "React & Next.js", icon: Component },
    { name: "Tailwind CSS", icon: Code2 },
    { name: "Figma", icon: Computer },
    { name: "Video & Motion", icon: Film },
    { name: "Motion Graphics", icon: Clapperboard },
    { name: "AI Content", icon: Bot },
    { name: "Digital Design", icon: Image },
    { name: "Product Packaging", icon: Package },
    { name: "Print Design", icon: Printer },
    { name: "Event Design", icon: CalendarDays },
    { name: "Podcast Design", icon: Mic },
    { name: "Visual Design", icon: PenTool },
    { name: "Responsive Design", icon: Smartphone },
    { name: "Landing Pages", icon: PanelsTopLeft },
    { name: "Prototyping", icon: MousePointer2 },
    { name: "Design Engineering", icon: Workflow },
    { name: "Creative Direction", icon: Lightbulb },
  ];

export function SkillsSection() {
    return (
        <section className="relative flex justify-center border-t-2 border-dotted">
            <div className="w-full max-w-6xl border-x-2 border-dotted">
                <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
                    Skills & Expertise
                </h1> 

                <div className="grid p-2 grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={skill.name}
                                className="flex items-center gap-2.5 border px-4 py-3"
                            >
                                <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />

                                <span className="truncate text-sm font-medium">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 