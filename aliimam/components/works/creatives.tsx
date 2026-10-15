
import { GridsGallery } from "./gallery";
import { getAllCreativeImages } from "@/lib/cloudinary";

export async function Creatives() {
    const images = await getAllCreativeImages();

    const shuffledImages = [...images].sort(
        () => Math.random() - 0.5
    );

    return (
        <main className="p-2">
            <GridsGallery images={shuffledImages} />
        </main>
    );
}
