const keystone = require('keystone');

const { Types } = keystone.Field;

const Post = new keystone.List('banner');

Post.add({

  title: {
      type: Types.TextArray,
      label: 'Banner:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
  },

  description: {
    type: Types.TextArray,
    label: 'Descrição do banner:',
    note:'Insira a descrição do banner',
    required: true,
    initial: true,
    index: true,
  },

  image: {
    type: Types.CloudinaryImages,
    label: 'Imagem:',
    note: 'Insira uma imagem',
    required: true,
    initial: true,
  },
});

Post.register();
