const keystone = require('keystone');

const { Types } = keystone.Field;

const socialNetworks = new keystone.List('SocialNetworks', {
    label:'Footer',
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'name, social, rede',
});

socialNetworks.add({

    name: {
    type: String,
    required: false,
    initial: true,
    label: 'Identificador',
    },

    social: {
    type: Types.TextArray,
    label: 'URL das redes sociais',
    },

});

socialNetworks.register();