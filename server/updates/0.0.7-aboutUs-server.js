const keystone = require('keystone');
const aboutUs = keystone.list('about-us');

exports = module.exports = (done) => {
	new aboutUs.model({
    name: 'Sobre Nós',
		title: ' ',
    description: ' ',
    content: ' ',

    values1: {
      title: ' ',
      description: ' ',
    },

    values2: {
      title: ' ',
      description: ' ',
    },

    values3: {
      title: ' ',
      description: ' ',
    },
	}).save(done);
};
