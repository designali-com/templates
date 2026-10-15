import { Suspense } from "react";
import { WorksTabs } from "@/components/works/tabs-works";
import { Creatives } from "@/components/works/creatives";

export default function WorksPage() {
  return (
    <WorksTabs
      creativesContent={
        <Suspense
          fallback={
            <div className="grid min-h-[50vh] place-items-center">
              <div className="size-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
            </div>
          }
        >
          <Creatives />
        </Suspense>
      }
    />
  );
}