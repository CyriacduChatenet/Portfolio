export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
    {
      name: 'talks',
      title: 'Talks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'talk',
            },
          ],
        },
      ],
    },
  ],
}
