import { Suspense } from "react";
import { WorksTabs } from "@/components/works/tabs-works";

export default function Page() {
  return (
    <div className="bg-background border-dotted border-t-2 relative flex justify-center items-center min-h-svh flex-col">
      <Suspense
        fallback={
          <div className="w-full min-h-svh flex items-center justify-center">
            Loading works...
          </div>
        }
      >
        <WorksTabs />
      </Suspense>
    </div>
  );
}