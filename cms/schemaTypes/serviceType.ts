import { defineField, defineType } from "sanity";

export const serviceType = defineType({
    name: 'service',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        })
    ]
});