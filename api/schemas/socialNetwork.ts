export default {
  name: 'social_network',
  type: 'document',
  title: 'Social Network',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'person',
      type: 'reference',
      to: [
        {
          type: 'person',
        },
      ],
      title: 'Person',
    },
  ],
}
