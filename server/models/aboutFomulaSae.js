const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutFormulaSae = new keystone.List('AboutFormulaSae', {
  label:'Sessão da Fórmula SAE',
});

aboutFormulaSae.add({
  key: {
    type: Types.Text,
    initial: false,
    label: 'Identificador',
    default: 'Ex.: Padrão 1'
  },

  description: {
    type: Types.Textarea,
    label: 'Descrição',
    note: 'Descreva sobre a Fórmula SAE',
    required: true,
    initial: true,
    index: true,
  },

  image: {
    type: Types.CloudinaryImages,
    label: 'Imagem',
    note: 'Insira uma imagem',
    required: true,
    initial: true,
  },
});

aboutFormulaSae.register();