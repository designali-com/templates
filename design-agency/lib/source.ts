import { loader } from "fumadocs-core/source"
import { showcase } from "@/.source"
 
export const showcaseSource = loader({
  baseUrl: "/showcase",
  source: showcase.toFumadocsSource(),
})