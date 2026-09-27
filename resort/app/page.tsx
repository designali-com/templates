import { FarmSection } from "@/components/home/farm-ground"
import { HeroSection } from "@/components/home/hero"
import { HorizontalScrollSection } from "@/components/home/hor-scroll"
import { ArchitectureHero } from "@/components/home/image-bento"
import { PlaceSection } from "@/components/home/place"
import { QuoteSection } from "@/components/home/quote"
import { ReasonsSection } from "@/components/home/reason"
import { RoomsSection } from "@/components/home/rooms"
import { SpaceLiveSection } from "@/components/home/space-live"
import { TasteSection } from "@/components/home/taste" 

export default function Page() {
    return (
        <div className="relative w-full overflow-x-clip">
            <div className="relative w-full max-w-full overflow-x-hidden">
                <HeroSection />
                <ReasonsSection />
                <TasteSection />
                <QuoteSection />
            </div>
            <HorizontalScrollSection />
            <div className="relative w-full"> 
                <FarmSection />
                <SpaceLiveSection />
                <RoomsSection />
                <ArchitectureHero />
                <PlaceSection />
            </div>
 
        </div >
    )
}