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
            "name": "categories",
            "title": "Categories",
            "type": "array",
            "of": [
              {
                "type": "reference",
                "to": [
                  {
                    "type": "category"
                  }
                ]
              }
            ]
          },
          {
            name: 'video_link',
            type: 'url',
            title: 'Video Link',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description',
          },
          {
            name: 'team',
            type: 'reference',
            to: [
              {
                "type": "team"
              }
            ],
            title: 'Team',
          }
    ],
}