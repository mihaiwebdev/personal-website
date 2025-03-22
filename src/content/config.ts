import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    liveURL: z.string().optional(),
    githubURL: z.string().optional(),
    badge: z.string().optional(),
    img: z.string().optional(),
    badgeColor: z.string().optional(),
    badgeTextColor: z.string().optional(),
    badgeAnimation: z.string().optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    liveURL: z.string().optional(),
    githubURL: z.string().optional(),
    badge: z.string().optional(),
    img: z.string().optional(),
    badgeColor: z.string().optional(),
    badgeTextColor: z.string().optional(),
    badgeAnimation: z.string().optional(),
  }),
});

const apps = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    liveURL: z.string().optional(),
    githubURL: z.string().optional(),
    badge: z.string().optional(),
    img: z.string().optional(),
    badgeColor: z.string().optional(),
    badgeTextColor: z.string().optional(),
    badgeAnimation: z.string().optional(),
  }),
});

export const collections = { blogs, work, projects, apps };
