import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LiveWebExamples } from "./web-showcase"

export function WorksTabs() {
  return (
    /* Parent div standard w-full ke sath flex-col center kiya gaya hai */
    <Tabs defaultValue="all" className="w-full flex flex-col justify-center items-center mt-2">
      <TabsList className="sticky top-10 z-50">
        <TabsTrigger value="all">All Works</TabsTrigger>
        <TabsTrigger value="web">Web Development</TabsTrigger>
        <TabsTrigger value="branding">Branding</TabsTrigger>
        <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
      </TabsList>

      {/* TabsContent par w-full ke saath mt-6 lagaya gaya hai */}
      <TabsContent value="all" className="w-full mb-2">
        <div className="w-full">
          <h1 className="text-5xl font-serif py-10 mb-2 text-center">Live Web Examples</h1>
          <LiveWebExamples />
        </div>
      </TabsContent>

      <TabsContent value="web" className="w-full mt-6">
        <div className="w-full p-2">
          <h1>Web Development</h1>
        </div>
      </TabsContent>

      <TabsContent value="branding" className="w-full mt-6">
        <div className="w-full min-h-screen">
          <h1>Branding</h1>
        </div>
      </TabsContent>

      <TabsContent value="graphic" className="w-full mt-6">
        <div className="w-full min-h-screen">
          <h1>Graphic Design</h1>
        </div>
      </TabsContent>
    </Tabs>
  )
}