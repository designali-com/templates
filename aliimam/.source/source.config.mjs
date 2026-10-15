// source.config.ts
import {
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var story = defineDocs({
  dir: "./content/story",
  docs: {
    schema: frontmatterSchema.extend({
      affiliation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      image: z.string().optional()
    })
  }
});
export {
  story
};
