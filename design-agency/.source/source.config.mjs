// source.config.ts
import {
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var showcase = defineDocs({
  dir: "./content/showcase",
  docs: {
    schema: frontmatterSchema.extend({
      affiliation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      image: z.string().optional()
    })
  }
});
export {
  showcase
};
