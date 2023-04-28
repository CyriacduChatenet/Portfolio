export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
        },
      ],
    },
    {
      name: 'talks',
      title: 'Talks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'talk',
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
