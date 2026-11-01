import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const program = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/program' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    kort: z.string(),
    citat: z.string().optional(),
  }),
});

const nyheder = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nyheder' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    resume: z.string(),
    billede: z.string().optional(),
    billedtekst: z.string().optional(),
    kladde: z.boolean().default(false),
  }),
});

const sider = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sider' }),
  schema: z.object({
    title: z.string(),
    undertitel: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const collections = { program, nyheder, sider };
