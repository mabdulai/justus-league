import type { ImageMetadata } from 'astro';
import { defineCollection, z } from 'astro:content';

const sessionsCollection = defineCollection({
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            sessionDate: z
                .string()
                .or(z.date())
                .transform(val => new Date(val)),
            updatedDate: z
                .string()
                .optional()
                .transform(str => (str ? new Date(str) : undefined)),
            heroImage: image().optional(),
        }),
});

export const collections = {
    sessions: sessionsCollection,
};
