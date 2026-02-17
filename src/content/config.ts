import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    coverImage: z.string(),
    sections: z.array(
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal("intro"),
          content: z.string(),
        }),
        z.object({
          type: z.literal("full-image"),
          image: z.string(),
        }),
        z.object({
          type: z.literal("two-column"),
          layout: z.enum(["left", "right"]),
          title: z.string(),
          content: z.string(),
          image: z.string(),
        }),
        z.object({
          type: z.literal("masonry"),
          images: z.array(z.string()),
        }),
      ]),
    ),
  }),
});

export const collections = { projects };
