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
      name: "social_networks",
      title: "Social Networks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "social_network"
            }
          ]
        }
      ]
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
