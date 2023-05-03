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
            name: 'baseline',
            type: 'string',
            title: 'Baseline',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
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
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
              {
                type: "reference",
                to: [
                  {
                    type: "skill"
                  }
                ]
              }
            ]
          },
    ],
}