export default {
    name: 'mission',
    type: 'document',
    title: 'Mission',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'type',
        type: 'string',
        title: 'Type',
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
    ],
  }
  