import { loader } from "fumadocs-core/source"
import { story } from "@/.source"
 
export const storySource = loader({
  baseUrl: "/story",
  source: story.toFumadocsSource(),
})