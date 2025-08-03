import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'mainNav',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            {type: 'string', name: 'title', title: 'Title'},
            {type: 'string', name: 'url', title: 'URL'},
            {type: 'string', name: 'barColor', title: 'Bar Color (Hex)'},
          ],
        },
      ],
    }),
    defineField({
      name: 'footerNav',
      title: 'Footer Navigation',
      type: 'array',
      of: [{type: 'string', name: 'link', title: 'Link Text'}],
    }),
  ],
})