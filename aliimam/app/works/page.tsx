import { Suspense } from "react";
import { WorksTabs } from "@/components/works/tabs-works";
import { Creatives } from "@/components/works/creatives"; 

export default function WorksPage() {
  return (
    <main className="container mx-auto py-8">
      <Suspense fallback={<div className="min-h-screen w-full animate-pulse bg-muted/20" />}>
        <WorksTabs creativesContent={<Creatives />} />
      </Suspense>
    </main>
  );
}