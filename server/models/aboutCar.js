const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutCar = new keystone.List('AboutCar');

aboutCar.add({
    key: {
        type: Types.Text,
        initial: false,
        label: 'Identificador',
        default: 'Ex.: Padrão 1'
      },

    description: {
        type: Types.Textarea,
        label: 'Descrição:',
        note:'Descreva sobre o Carro',
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

aboutCar.register();