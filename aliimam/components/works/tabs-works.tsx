"use client";

import { useRouter, useSearchParams } from "next/navigation";
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
};

export function WorksTabs({ creativesContent }: WorksTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "all";

  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`, { scroll: false });
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={handleTabChange}
      className="flex border-t-2 border-dotted w-full flex-col items-center justify-center"
    >
      <div className=" sticky top-10 pt-2 z-50 w-full flex justify-center items-center max-w-6xl mx-auto">
        <TabsList className=" flex h-full w-auto max-w-max whitespace-nowrap md:w-full">
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

      <TabsContent value="all" className="mb-2 w-full">
        <div className="h-screen w-full">
          <h1 className="mb-2 py-10 text-center font-serif text-5xl">
            Works Showcase
          </h1>

        </div>
      </TabsContent>

      <TabsContent value="web" className="w-full">
        <div className="border-b-2 border-dotted w-full">
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
          <h1 className="mb-2 py-10 text-center font-serif text-5xl">
            Branding
          </h1>
        </div>
      </TabsContent>

      <TabsContent value="graphic" className="w-full">
        <div className="border-b-2 border-dotted w-full">
          <h1 className="border-b-2 border-dotted py-10 text-center font-serif text-5xl">
            Graphic Design
          </h1>
          {creativesContent}
        </div>
      </TabsContent>

      <TabsContent value="videos" className="w-full">
        <div className="border-b-2 border-dotted w-full">
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