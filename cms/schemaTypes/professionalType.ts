import { defineField, defineType } from "sanity";

export const professionalType = defineType({
    name: 'professional',
    type: 'document',
    fields: [
        defineField({
            name: 'fantasyName',
            type: 'string',
        }),
        defineField({
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'lastname',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: (doc, context) => doc.fantasyName ? `${doc.fantasyName}` : `${doc.name}-${doc.lastname}`,
            }
        }),
        defineField({
            name: 'phone',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'email',
            type: 'string',
            validation: Rule => Rule.email(),
        }),
        defineField({
            name: 'services',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
            validation: Rule => Rule.unique(),
        })
    ]
})