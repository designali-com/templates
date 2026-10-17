"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { LiveWebExamples } from "./web-showcase";
import { FigmaShowcase } from "./figma-showcase";
import { Reels, Videos } from "./videos"; 

type WorksTabsProps = {
  creativesContent: ReactNode;
  allWorksContent: ReactNode;
};

function WorksTabsContent({
  creativesContent,
  allWorksContent,
}: WorksTabsProps) {
  const searchParams = useSearchParams();

  const validTabs = [
    "all",
    "web",
    "figma",
    "branding",
    "graphic",
    "videos",
  ];

  const tabParam = searchParams.get("tab");
  const currentTab = validTabs.includes(tabParam ?? "")
    ? tabParam!
    : "all";

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);

    // URL update without router navigation
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}${window.location.hash}`,
    );
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={handleTabChange}
      className="flex w-full flex-col items-center justify-center border-t-2 border-dotted"
    >
      <div className="sticky top-10 z-50 mx-auto flex w-full max-w-6xl items-center justify-center pt-2">
        <TabsList className="flex h-full w-auto max-w-max whitespace-nowrap md:w-full">
          <div className="flex h-full w-full max-w-xs overflow-x-auto whitespace-nowrap p-[0.5px] scrollbar-none md:max-w-full">
            <TabsTrigger value="all">All Works</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="figma">Figma</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
            <TabsTrigger value="videos">Videos & Reels</TabsTrigger>
          </div>
        </TabsList>
      </div>

      <TabsContent value="all" className="w-full">
        <div className="w-full">
          <h1 className="border-b-2 border-dotted py-10 text-center font-serif text-5xl">
            Works Showcase
          </h1>
          {allWorksContent}
        </div>
      </TabsContent>

      <TabsContent value="web" className="w-full">
        <div className="w-full">
          <h1 className="border-b-2 border-dotted py-10 text-center font-serif text-5xl">
            Live Web Examples
          </h1>
          <LiveWebExamples />
        </div>
      </TabsContent>

      <TabsContent value="figma" className="h-full w-full">
        <div className="h-full w-full">
          <h1 className="mb-2 py-10 text-center font-serif text-5xl">
            Figma Examples
          </h1>
          <FigmaShowcase />
        </div>
      </TabsContent>

      <TabsContent value="branding" className="w-full">
        <div className="min-h-screen w-full">
          <h1 className="mb-2 flex items-center justify-center py-10 text-center font-serif text-5xl">
            Branding
          </h1>
        </div>
      </TabsContent>

      <TabsContent value="graphic" className="w-full">
        <div className="w-full">
          <h1 className="border-b-2 border-dotted py-10 text-center font-serif text-5xl">
            Graphic Design
          </h1>
          {creativesContent}
        </div>
      </TabsContent>

      <TabsContent value="videos" className="w-full">
        <div className="w-full">
          <h1 className="border-b-2 border-dotted py-10 text-center font-serif text-5xl">
            Videos & Reels
          </h1>
          <Videos />
          <Reels />
        </div>
      </TabsContent>
    </Tabs>
  );
}

function WorksTabsFallback() {
  return (
    <div className="flex h-screen w-full animate-pulse flex-col items-center justify-center border-t-2 border-dotted">
      <div className="sticky top-10 mx-auto flex w-full max-w-6xl items-center justify-center pt-2">
        <div className="h-10 w-96 rounded-md bg-muted/50" />
      </div>
      <div className="w-full py-10 text-center">
        <div className="mx-auto h-12 w-64 rounded bg-muted/40" />
      </div>
    </div>
  );
}

export function WorksTabs(props: WorksTabsProps) {
  return (
    <Suspense fallback={<WorksTabsFallback />}>
      <WorksTabsContent {...props} />
    </Suspense>
  );
} 