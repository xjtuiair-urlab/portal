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
    link: z.string().optional(),
  }))
})

const newsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    link: z.string(),
  }))
})

const resourceCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    //description: z.string(),
    equipments: z.array(z.string()),
  }))
})

export const collections = {
  'homepage': homepageCollection,
  'people': peopleCollection,
  'news': newsCollection,
  'resource': resourceCollection,
};
