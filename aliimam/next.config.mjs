import { createMDX } from "fumadocs-mdx/next"
/** @type {import('next').NextConfig} */

const nextConfig = { 
    
    images: {
        remotePatterns: [
             {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            }
             
        ],
    },
}
 
const withMDX = createMDX({})

export default withMDX(nextConfig)