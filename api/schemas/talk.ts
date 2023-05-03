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
            name: 'subtitle',
            type: 'string',
            title: 'Subitle',
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
            name: 'linkedin',
            type: 'url',
            title: 'LinkedIn',
          },
          {
            name: 'youtube',
            type: 'url',
            title: 'Youtube',
          },
          {
            name: 'website',
            type: 'url',
            title: 'Website',
          },
          {
            "name": "persons",
            "title": "Persons",
            "type": "array",
            "of": [
              {
                "type": "reference",
                "to": [
                  {
                    "type": "person"
                  }
                ]
              }
            ]
          },
    ],
}