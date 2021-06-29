const keystone = require('keystone');

const { Types } = keystone.Field;

const values = new keystone.List('values',{
  label:'Valores',
  defaultColumns: 'name, Valores',
});

values.add({
  name: {
    type: String,
    required: false,
    initial: true,
    label: 'Identificador: nome do valor',
  },

  values: {
    title: {
      type: Types.Text,
      label: 'Valor:',
      note:'Insira o nome valor',
      required: true,
      initial: true,
      index: true,
    },

    description: {
      type: Types.Textarea,
      label: 'Descrição do valor:',
      note:'Insira a descrição do valor',
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

values.register();
