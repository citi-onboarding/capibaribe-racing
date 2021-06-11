const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutCar = new keystone.List('AboutCar', {
    label: 'Sobre o Carro',
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'name, description, image',
});

aboutCar.add({
    name: {
        type: String,
        required: false,
        initial: true,
        label: 'Nome ID',
    },
    
    description: {
        type: Types.Textarea,
        label: 'Descrição',
        note:'Sobre o Carro',
        required: true,
        initial: true,
        index: true,
    },

    image: {
        type: Types.CloudinaryImage,
        label: 'Imagem',
        note: 'Insira uma imagem',
        required: true,
        initial: true,
    },
});

aboutCar.register();