const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutUs = new keystone.List('about-us',{
  label:'Sobre nós',
  nodelete: true,
  nocreate: true,
  autocreate: true,
  defaultColumns: 'name, Título, Descrição, Conteúdos',
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
    note:'Insira a descrição da seção',
    required: true,
    initial: true,
    index: true,
  },

  content:{
    type: Types.Text,
    label: 'Conteúdos:',
    note:'Insira o link para o botão "nossos conteúdos"',
    required: true,
    initial: true,
    index: true,
  },

});

aboutUs.register();
