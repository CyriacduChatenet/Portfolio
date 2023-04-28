export default {
    name: "projectMission",
    type: "object",
    fields: [
      {
        name: "project",
        type: "reference",
        to: [
          {
            type: "project"
          }
        ]
      },
      {
        name: "category",
        type: "reference",
        to: [
          {
            type: "mission"
          }
        ]
      }
    ]
  }