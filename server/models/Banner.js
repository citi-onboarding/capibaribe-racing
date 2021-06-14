const keystone = require('keystone');
const { Types } = keystone.Field;

const banner = new keystone.List('Banner',{
  autocreate: true,
  nodelete: true,
  nocreate: true,
  label:'Banner',
  defaultColumns: 'name, Título, Descrição',
});

banner.add({
  name: {
    type: String,
    required: false,
    initial: true,
    label: 'Identificador',
  },

  Título: {
      type: Types.Text,
      label: 'Título',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
  },

  Descrição: {
    type: Types.Textarea,
    label: 'Descrição do banner:',
    note:'Insira a descrição que ficará em frente ao banner',
    required: true,
    initial: true,
    index: true,
  },

  Imagem: {
    type: Types.CloudinaryImage,
    label: 'Imagem:',
    note: 'Insira uma imagem do banner',
    required: true,
    initial: true,
  },
});

banner.register();
