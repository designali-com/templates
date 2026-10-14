"use client" // Client component banana zaroori hai hooks ke liye

import { useRouter, useSearchParams } from "next/navigation"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LiveWebExamples } from "./web-showcase"
import { FigmaShowcase } from "./figma-showcase"

export function WorksTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // URL se current tab lo, agar nahi hai toh default "all" rakho
  const currentTab = searchParams.get("tab") || "all"

  // Jab tab change ho toh URL update karein
  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`, { scroll: false })
  }

  return (
    <Tabs 
      value={currentTab} 
      onValueChange={handleTabChange}
      className="w-full flex flex-col justify-center items-center mt-2"
    >
      <TabsList className="sticky top-10 z-50 flex h-full w-auto md:w-full max-w-max whitespace-nowrap scrollbar-none">
        <div className="flex w-full md:max-w-full p-[0.5px] h-full max-w-xs overflow-x-auto whitespace-nowrap scrollbar-none">
          <TabsTrigger value="all">All Works</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="figma">Figma</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
          <TabsTrigger value="videos">Videos & Reels</TabsTrigger>
        </div>
      </TabsList>

      <TabsContent value="all" className="w-full mb-2">
        <div className="w-full h-screen">
          <h1 className="text-5xl font-serif py-10 mb-2 text-center">
            Works Showcase
          </h1>
        </div>
      </TabsContent>

      <TabsContent value="web" className="w-full">
        <div className="w-full">
          <h1 className="text-5xl font-serif py-10 mb-2 text-center">Live Web Examples</h1>
          <LiveWebExamples />
        </div>
      </TabsContent>
      
      <TabsContent value="figma" className="w-full h-full">
        <div className="w-full h-full">
          <h1 className="text-5xl font-serif py-10 mb-2 text-center">Figma Examples</h1>
          <FigmaShowcase />
        </div>
      </TabsContent>

      <TabsContent value="branding" className="w-full">
        <div className="w-full min-h-screen">
        <h1 className="text-5xl font-serif py-10 mb-2 text-center">Branding</h1>
        </div>
      </TabsContent>

      <TabsContent value="graphic" className="w-full">
        <div className="w-full min-h-screen">
        <h1 className="text-5xl font-serif py-10 mb-2 text-center">Graphic Design</h1>
        </div>
      </TabsContent>
      <TabsContent value="videos" className="w-full">    
        <div className="w-full min-h-screen">
        <h1 className="text-5xl font-serif py-10 mb-2 text-center">Videos & Reels</h1>
        </div>
      </TabsContent>
    </Tabs>
  )
}