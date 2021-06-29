const keystone = require('keystone');
const aboutUs = keystone.list('about-us');

exports = module.exports = (done) => {
	new aboutUs.model({
    name: 'Sobre Nós',
		title: ' ',
    description: ' ',
    content: ' ',
	}).save(done);
};
