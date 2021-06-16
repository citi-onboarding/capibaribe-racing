const keystone = require('keystone');
const socialNetworks = keystone.list('SocialNetworks');

exports = module.exports = (done) => {
	new socialNetworks.model({
        name: 'Escreva um nome de ID',
	}).save(done);
};