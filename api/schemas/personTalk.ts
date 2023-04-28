export default {
    name: "personTalk",
    type: "object",
    fields: [
      {
        name: "talk",
        type: "reference",
        to: [
          {
            type: "talk"
          }
        ]
      },
      {
        name: "person",
        type: "reference",
        to: [
          {
            type: "person"
          }
        ]
      }
    ]
  }