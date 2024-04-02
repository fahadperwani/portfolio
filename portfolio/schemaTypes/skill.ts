import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  orderings: [
    {
      title: 'Title',
      name: 'title',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image URL',
      type: 'url',
    },
  ],
})
