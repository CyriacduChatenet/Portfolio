export default {
    name: 'project',
    type: 'document',
    title: 'Project',
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
            name: 'year',
            type: 'number',
            title: 'Year',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description',
          },
          {
            name: 'website_url',
            type: 'url',
            title: 'Website url',
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
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
              {
                type: "reference",
                to: [
                  {
                    type: "category"
                  }
                ]
              }
            ]
          },
          {
            name: "missions",
            title: "Missions",
            type: "array",
            of: [
              {
                type: "reference",
                to: [
                  {
                    type: "mission"
                  }
                ]
              }
            ]
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
          },
          {
            name: "pictures",
            title: "Pictures",
            type: "array",
            of: [
              {
                type: "reference",
                to: [
                  {
                    type: "picture"
                  }
                ]
              }
            ]
          },
    ],
}