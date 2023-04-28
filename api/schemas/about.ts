export default {
    name: 'about',
    type: 'document',
    title: 'About',
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
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
        },
        {
            name: 'content',
            type: 'text',
            title: 'Content',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {
                    type: 'skill',
                  },
                ],
              },
            ],
          },
    ],
};