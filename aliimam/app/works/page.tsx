import { Suspense } from "react";
import { WorksTabs } from "@/components/works/tabs-works";
import { Creatives } from "@/components/works/creatives"; 
import { Branding } from "@/components/works/branding";
import { GridMain } from "@/components/works/grid-main";

export default function WorksPage() {
  return (
    <main className="border-b-2 border-dotted">
      <Suspense fallback={<div className="h-screen w-full animate-pulse bg-muted/20" />}>
        <WorksTabs 
        creativesContent={<Creatives />} 
        brandingContent={<Branding />}
        allWorksContent={<GridMain />}/>
      </Suspense>
    </main>
  );
}