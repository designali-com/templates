
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
} from "lucide-react";

const skills = [
    { name: "UI/UX Design", icon: Layout },
    { name: "Graphic Design", icon: Palette },
    { name: "Brand Identity", icon: Sparkles },
    { name: "Design Systems", icon: Layers },
    { name: "Figma", icon: Monitor },
    { name: "Web Design", icon: Monitor },
    { name: "Frontend Development", icon: Code2 },
    { name: "React", icon: Component },
    { name: "Next.js", icon: Workflow },
    { name: "Tailwind CSS", icon: Code2 },
    { name: "Responsive Design", icon: Smartphone },
    { name: "Visual Design", icon: PenTool },
    { name: "Digital Design", icon: Image },
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
                                className="flex items-center gap-2.5 border px-4 py-3 transition-colors hover:bg-foreground hover:text-background"
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