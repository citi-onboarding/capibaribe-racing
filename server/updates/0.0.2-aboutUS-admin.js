const keystone = require('keystone');
const aboutUs = keystone.list('sobre-nós');

exports = module.exports = (done) => {
	new aboutUs.model({
    name: 'Sobre Nós',
		Título: ' ',
    Descrição: ' ',
    Conteúdos: ' ',

    Visão: {
      Título: ' ',
      Descrição: ' ',
    },

    Missão: {
      Título: ' ',
      Descrição: ' ',
    },

    Valores: {
      Título: ' ',
      Descrição: ' ',
    },
	}).save(done);
};
