import { Hero } from "@/components/home/about";
import { Journey } from "@/components/home/journey";



export default function Page() {
  return (
    <div className="relative flex h-full items-center justify-center w-full flex-col">
      <Hero />
      <Journey />
    </div>
  )
}