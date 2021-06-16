const keystone = require('keystone');
const formulaSae = keystone.list('AboutFormulaSae');

exports = module.exports = (done) => {
	new formulaSae.model({
        name: 'Escreva um nome de ID',
        description: 'Descrição...',
	}).save(done);
};