const keystone = require('keystone');

const { Types } = keystone.Field;

const Post = new keystone.List('sobre-nós');

Post.add({
  description: {
    type: Types.TextArray,
    label: 'Descrição:',
    note:'Insira a descrição',
    required: true,
    initial: true,
    index: true,
  },

  contents:{
    type: Types.TextArray,
    label: 'conteudos:',
    note:'Insira o link dos conteúdos',
    required: true,
    initial: true,
    index: true,
  },

  visao: {
    title: {
      type: Types.TextArray,
      label: 'Título da visão:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.TextArray,
      label: 'Descrição da visão:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    icon: {
      type: Types.CloudinaryImages,
      label: 'Imagem da visão:',
      note: 'Insira o ícone',
      required: true,
      initial: true,
    },
  },

  missao: {
    title: {
      type: Types.TextArray,
      label: 'Título da missão:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.TextArray,
      label: 'Descrição da missão:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    icon: {
      type: Types.CloudinaryImages,
      label: 'Imagem da missão:',
      note: 'Insira o ícone',
      required: true,
      initial: true,
    },
  },

  valores: {
    title: {
      type: Types.TextArray,
      label: 'Título do valor:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.TextArray,
      label: 'Descrição do valor:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    icon: {
      type: Types.CloudinaryImages,
      label: 'Imagem do valor:',
      note: 'Insira o ícone',
      required: true,
      initial: true,
    },
  },

});

Post.register();
