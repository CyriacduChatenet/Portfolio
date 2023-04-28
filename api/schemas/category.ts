export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
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