// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const homepageCollection = defineCollection({
  type: 'data', 
  schema: z.array(z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    year: z.string().optional(),
    category: z.string().optional(),
    value: z.number().optional(),
    label: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
  }))
});

const peopleCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    image: z.string(),
    since: z.string().optional(),
  }))
})

const news = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    image: z.string(),
    link: z.string(),
  }))
})

export const collections = {
  'homepage': homepageCollection,
  'people': peopleCollection,
  'news': news,
};
