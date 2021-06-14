const keystone = require('keystone');
const banner = keystone.list('Banner');

exports = module.exports = (done) => {
	new banner.model({
		name: 'Banner',
		Título: ' ',
		Descrição: ' ',
	}).save(done);
};
