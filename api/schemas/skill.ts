export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'about',
      type: 'reference',
      to: [
        {
          type: 'about',
        },
      ],
    },
  ],
}
