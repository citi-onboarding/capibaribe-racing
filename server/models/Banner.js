const keystone = require('keystone');
const { Types } = keystone.Field;

const banner = new keystone.List('banner',{
  autocreate: true,
  nodelete: true,
  nocreate: true,
  label:'Banner',
  defaultColumns: 'name, title, description, image',
});

banner.add({
  name: {
    type: String,
    required: false,
    initial: true,
    label: 'Identificador',
  },

  title: {
      type: Types.Text,
      label: 'Título',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
  },

  description: {
    type: Types.Textarea,
    label: 'Descrição do banner:',
    note:'Insira a descrição que ficará em frente ao banner',
    required: true,
    initial: true,
    index: true,
  },

  image: {
    type: Types.CloudinaryImage,
    label: 'Imagem:',
    note: 'Insira uma imagem do banner',
    required: true,
    initial: true,
  },
});

banner.register();
