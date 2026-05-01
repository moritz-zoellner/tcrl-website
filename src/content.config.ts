import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    location: z.string(),
    type: z.string(),
    href: z.string().url().optional(),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string(),
    location: z.string().optional(),
    country: z.string().optional(),
    email: z.string().email().optional(),
    group: z.enum(['chair', 'junior', 'student']),
    order: z.number().default(999),
    href: z.string().url().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    href: z.string().url().optional(),
  }),
});

export const collections = { news, events, people, resources };
