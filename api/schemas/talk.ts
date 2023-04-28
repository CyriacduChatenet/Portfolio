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
