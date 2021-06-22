const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutUs = new keystone.List('about-us',{
  label:'Sobre nós',
  nodelete: true,
  nocreate: true,
  autocreate: true,
  defaultColumns: 'name, Título, Descrição, Valor 1, Valor 2, Valor 3',
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

  values1: {
    title: {
      type: Types.Text,
      label: 'Valor 1:',
      note:'Insira o título do primeiro valor',
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

  values2: {
    title: {
      type: Types.Text,
      label: 'Valor 2:',
      note:'Insira o título do segundo valor',
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

  values3: {
    title: {
      type: Types.Text,
      label: 'Valor 3:',
      note:'Insira o título do terceiro valor',
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
