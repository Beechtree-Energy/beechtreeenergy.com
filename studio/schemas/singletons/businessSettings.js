import { FaGlobe as icon } from 'react-icons/fa';
import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'SEO',
  name: 'businessSettings',
  type: 'document',
  inputComponent: Tabs,
  icon,
  fieldsets: [
    { title: 'Indexing', name: 'indexingSet' },
    { title: 'Metadata', name: 'metadataSet' },
  ],
  fields: [
    {
      title: 'Allow Google to index this website?',
      description: 'OFF = "noindex, nofollow"; ON = "index, follow"',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: false,
      fieldset: 'indexingSet',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).warning('Title tag length should be longer.'),
        Rule.required()
          .max(55)
          .error('Title tag must be less than 155 characters.'),
      ],
      fieldset: 'metadataSet',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .warning('Meta description length should be longer.'),
        Rule.required()
          .max(155)
          .error('Meta description must be less than 155 characters.'),
      ],
      fieldset: 'metadataSet',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      fieldset: 'metadataSet',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageAlt',
      fieldset: 'metadataSet',
    },
  ],
};
