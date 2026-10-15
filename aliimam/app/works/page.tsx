import { Suspense } from "react";
import { WorksTabs } from "@/components/works/tabs-works";
import { Creatives } from "@/components/works/creatives"; 
import { GridMain } from "@/components/works/grid-main";

export default function WorksPage() {
  return (
    <main className="border-b-2 border-dotted">
      <Suspense fallback={<div className="min-h-screen w-full animate-pulse bg-muted/20" />}>
        <WorksTabs 
        creativesContent={<Creatives />} 
        allWorksContent={<GridMain />}/>
      </Suspense>
    </main>
  );
}