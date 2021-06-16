const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutUs = new keystone.List('about-us',{
  label:'Sobre nós',
  nodelete: true,
  nocreate: true,
  autocreate: true,
  defaultColumns: 'name, Título, Descrição, Conteúdos, Visão, Missão, Valores',
});

aboutUs.add({
  name: {
    type: String,
    required: false,
    initial: true,
    label: 'Identificador',
  },

  title: {
    type: Types.Text,
    label: 'Título:',
    note:'Insira o título',
    required: true,
    initial: true,
    index: true,
  },

  description: {
    type: Types.Textarea,
    label: 'Descrição:',
    note:'Insira a descrição',
    required: true,
    initial: true,
    index: true,
  },

  content:{
    type: Types.Text,
    label: 'Conteúdos:',
    note:'Insira o link dos conteúdos',
    required: true,
    initial: true,
    index: true,
  },

  vision: {
    title: {
      type: Types.Text,
      label: 'Visão:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.Textarea,
      label: 'Descrição da visão:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    icon: {
      type: Types.CloudinaryImage,
      label: 'Ícone da visão:',
      note: 'Insira o ícone',
      initial: true,
      required: true,
    },
  },

  mission: {
    title: {
      type: Types.Text,
      label: 'Missão:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.Textarea,
      label: 'Descrição da missão:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    icon: {
      type: Types.CloudinaryImage,
      label: 'Ícone da missão:',
      note: 'Insira o ícone',
      initial: true,
      required: true,
    },
  },

  values: {
    title: {
      type: Types.Text,
      label: 'Valor:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.Textarea,
      label: 'Descrição do valor:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    icon: {
      type: Types.CloudinaryImage,
      label: 'Ícone do valor:',
      note: 'Insira o ícone',
      required: true,
      initial: true,
    },
  },

});

aboutUs.register();
