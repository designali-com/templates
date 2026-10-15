
import "server-only";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export async function getAllCreativeImages() {
    const result = await cloudinary.search
        .expression('asset_folder:"creatives/*" AND resource_type:image')
        .sort_by("created_at", "desc")
        .max_results(500)
        .execute();

    return result.resources;
}

export async function getAllWorkImages() {
    const result = await cloudinary.search
        .expression('asset_folder:"creatives/creative/*" AND resource_type:image')
        .sort_by("created_at", "desc")
        .max_results(500)
        .execute();

    return result.resources;
}

