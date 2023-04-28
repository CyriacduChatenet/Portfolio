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
        name: 'website',
        title: 'Website',
        type: 'url',
      },
      {
        name: 'year',
        title: 'Year',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: "massions",
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
        name: "persons",
        title: "Persons",
        type: "array",
        of: [
          {
            type: "reference",
            to: [
              {
                type: "person"
              }
            ]
          }
        ]
      },
      {
        name: 'pictures',
        title: 'Pictures',
        type: 'array',
        of: [{type: 'picture'}],
      },
    ],
  }