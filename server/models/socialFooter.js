const keystone = require('keystone');

const { Types } = keystone.Field;

const socialNetworks = new keystone.List('SocialNetworks', {
    label:'Footer',
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'name',
});

socialNetworks.add({

    name: {
    type: String,
    required: false,
    initial: true,
    label: 'Identificador',
    },

    phone: {
      type: Types.Text,
      required: true,
      initial: true,
      label: 'Número do telefone',
    },

    instagram: {
      type: Types.Text,
      required: true,
      initial: true,
      label: 'Link do instagram',
    },

    linkedin: {
      type: Types.Text,
      required: true,
      initial: true,
      label: 'Link do Linkedin',
    },

});

socialNetworks.register();
