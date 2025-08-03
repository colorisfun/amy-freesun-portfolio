import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import settings from './schemas/settings'
import project from './schemas/project'
import page from './schemas/page'

export default defineConfig({
  name: 'default',
  title: 'Amy Freesun Portfolio',

  projectId: 'rgbwb8zg',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [settings, project, page],
  },
})