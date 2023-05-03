export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
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
      name: "teams",
      title: "Teams",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "team"
            }
          ]
        }
      ]
    },
  ],
}
