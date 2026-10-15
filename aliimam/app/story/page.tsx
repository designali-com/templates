import { StoryCard } from "@/components/story/story"
import { storySource } from "@/lib/source"

type Showcase = {
  url: string
  data: {
    title: string 
    image: string
    affiliation: string
  }
}

export default function Page() {
  // Map or adapt the output of getPages() to satisfy the Showcase[] type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showcases: Showcase[] = storySource.getPages().map((page: any) => ({
    url: page.url,
    data: {
      title: page.data.title ?? "",
      image: page.data.image ?? "",
      affiliation: page.data.affiliation ?? "",
    },
  }))

  return (
    <article className="border-y-2 border-dotted">
      <div className="mx-auto border-x-2 border-dotted max-w-6xl py-10 px-2">
      <h2 className="mb-2 text-center text-5xl font-serif">
        Story
      </h2>
      <h3 className="text-muted-foreground mx-auto mb-8 text-center text-lg">
        Ali Imam's journey in the world of design and development.
      </h3>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {showcases.map((showcase) => (
          <StoryCard
            key={showcase.url}
            {...showcase}
            href={showcase.url}
            title={showcase.data.title ?? ""}
            image={showcase.data.image ?? ""}
            affiliation={showcase.data.affiliation ?? ""}
          />
        ))}
      </div>
      </div>
    </article>
  )
}
