export default {
    name: 'person',
    type: 'document',
    title: 'Person',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "linkedin",
        type: "url",
        title: "LinkedIn",
      },
      {
        name: "role",
        type: "string",
        title: "Role",
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
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
        name: "projects",
        title: "Projects",
        type: "array",
        of: [
          {
            type: "reference",
            to: [
              {
                type: "project"
              }
            ]
          }
        ]
      },
    ],
  }
  