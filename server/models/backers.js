const keystone = require('keystone');

const { Types } = keystone.Field;

const backers = new keystone.List('Backers', {
    label: 'Patrocinadores',
});

backers.add({
    
    name: {
        type: String,
        required: false,
        initial: true,
        label: 'Nome da Marca',
    },

    fields: {      
        description: {
            type: Types.Textarea,
            label: 'Descrição da marca',
            note:'Insira o nome do patrocinador',
            required: true,
            initial: true,
            index: true,
        },

        addImage: {
            type: Types.CloudinaryImage,
            label: 'Imagem',
            required: true,
            initial: true,
        },
    },
});

backers.register();