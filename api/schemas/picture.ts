export default {
  name: 'picture',
  type: 'document',
  title: 'Picture',
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
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [
        {
          type: 'project',
        },
      ],
    },
  ],
}
