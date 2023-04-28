export default {
    name: "projectCategory",
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
            type: "category"
          }
        ]
      }
    ]
  }