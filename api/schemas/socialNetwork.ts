export default {
    name: 'socialNetwork',
    type: 'document',
    title: 'Social Network',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL',
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Icon',
        },
        {
            name: 'person',
            type: 'reference',
            title: 'Person',
            to: [{ type: 'person' }],
        },
        {
            name:'talk',
            type:'reference',
            title:'Talk',
            to:[{type:'talk'}]
        }
    ],
}