export default {
  name: 'talk',
  type: 'document',
  title: 'Talk',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'video_link',
      type: 'url',
      title: 'Video Link',
    },
    {
      name: 'persons',
      title: 'Persons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'person',
            },
          ],
        },
      ],
    },
    {
      name: 'socialNetworks',
      title: 'Social Networks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'socialNetwork',
            },
          ],
        },
      ],
    },
  ],
}
