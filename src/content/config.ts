import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.date(),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const thoughts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.date(),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
  }),
});

export const collections = { blog, thoughts };
