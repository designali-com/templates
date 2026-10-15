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

export function Story() {
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
        <article className="border-b-2 border-dotted">
            <div className="mx-auto border-x-2 border-dotted max-w-6xl">
                <h1 className="text-md text-center text-primary border-b-2 border-dotted p-4">
                    My Stories
                </h1>
                <div className="grid p-2 grid-cols-1 gap-2 lg:grid-cols-2">
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
 