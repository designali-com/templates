
import { WorksTabs } from "@/components/works/tabs-works";
import { FigmaShowcase } from "@/components/works/figma-showcase";

export default function Page() {
  return (
    <div className="bg-background border-dotted border-t-2 relative flex justify-center items-center min-h-svh flex-col">
      <WorksTabs />
      <FigmaShowcase />
    </div>
  )
}
