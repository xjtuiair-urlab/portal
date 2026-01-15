// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 定义 Homepage 集合的数据结构
const homepageCollection = defineCollection({
  type: 'data', 
  schema: z.array(z.object({
    // 定义允许的字段
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

// ✅ 必须导出名为 collections 的对象，且 Key 必须叫 'homepage'
export const collections = {
  'homepage': homepageCollection,
};
