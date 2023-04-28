// Définir un type de document pour les images
export default {
    name: 'picture',
    title: 'Picture',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        options: {
          isHighlighted: true,
        },
      },
    ],
  };
  