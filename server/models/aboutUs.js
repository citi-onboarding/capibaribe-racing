const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutUs = new keystone.List('sobre-nós',{
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

  Título: {
    type: Types.Text,
    label: 'Título:',
    note:'Insira o título',
    required: true,
    initial: true,
    index: true,
  },

  Descrição: {
    type: Types.Textarea,
    label: 'Descrição:',
    note:'Insira a descrição',
    required: true,
    initial: true,
    index: true,
  },

  Conteúdos:{
    type: Types.Text,
    label: 'Conteúdos:',
    note:'Insira o link dos conteúdos',
    required: true,
    initial: true,
    index: true,
  },

  Visão: {
    Título: {
      type: Types.Text,
      label: 'Título: Visão:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    Descrição: {
      type: Types.Textarea,
      label: 'Descrição da visão:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    Ícone: {
      type: Types.CloudinaryImage,
      label: 'Ícone da visão:',
      note: 'Insira o ícone',
      initial: true,
      required: true,
    },
  },

  Missão: {
    Título: {
      type: Types.Text,
      label: 'Título: Missão:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    Descrição: {
      type: Types.Textarea,
      label: 'Descrição da missão:',
      note:'Insira a descrição',
      required: true,
      initial: true,
      index: true,
    },

    Ícone: {
      type: Types.CloudinaryImage,
      label: 'Ícone da missão:',
      note: 'Insira o ícone',
      initial: true,
      required: true,
    },
  },

  Valores: {
    Título: {
      type: Types.Text,
      label: 'Título: Valor:',
      note:'Insira o título',
      required: true,
      initial: true,
      index: true,
    },

    Descrição: {
      type: Types.Textarea,
      label: 'Descrição do valor:',
      note:'Insira a descrição',
      required: [true, 'sksk'],
      initial: true,
      index: true,
    },

    Ícone: {
      type: Types.CloudinaryImage,
      label: 'Ícone do valor:',
      note: 'Insira o ícone',
      required: true,
      initial: true,
    },
  },

});

aboutUs.register();
