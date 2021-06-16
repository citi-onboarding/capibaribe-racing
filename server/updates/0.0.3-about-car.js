const keystone = require('keystone');
const aboutCar = keystone.list('AboutCar');

exports = module.exports = (done) => {
	new aboutCar.model({
        name: 'Escreva um nome de ID',
        description: 'Descrição...',
	}).save(done);
};