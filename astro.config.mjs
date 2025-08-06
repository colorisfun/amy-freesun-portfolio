import { defineConfig } from 'astro/config';
import sanityIntegration from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [sanityIntegration({
    projectId: 'rgbwb8zg',
    dataset: 'production',
    apiVersion: '2024-05-20',
    useCdn: false,
  })],
});