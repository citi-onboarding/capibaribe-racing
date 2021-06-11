const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutFormulaSae = new keystone.List('AboutFormulaSae', {
  label:'Fórmula SAE',
  autocreate: true,
  nocreate: true,
  nodelete: true,
  defaultColumns: 'name, description, image',
});

aboutFormulaSae.add({

  name: {
    type: String,
    required: false,
    initial: true,
    label: 'Nome ID',
  },

  description: {
    type: Types.Textarea,
    label: 'Descrição',
    note: 'Sobre a Fórmula SAE',
    required: true,
    initial: true,
    index: true,
  },

  image: {
    type: Types.CloudinaryImage,
    label: 'Imagem',
    required: true,
    initial: true,
  },
});

aboutFormulaSae.register();