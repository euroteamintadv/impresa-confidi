import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  loader: () => [],
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lang: z.enum(['it', 'en']),
  }),
});

const documents = defineCollection({
  loader: () => [],
  schema: z.object({
    name: z.string(),
    file: z.string(),
    category: z.string(),
    lang: z.enum(['it', 'en']),
  }),
});

const pages = defineCollection({
  loader: () => [],
  schema: z.object({
    title: z.string(),
    lang: z.enum(['it', 'en']),
  }),
});

export const collections = { news, documents, pages };
