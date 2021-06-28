const keystone = require('keystone');
const values = keystone.list('values');

exports = module.exports = (done) => {
	new values.model({
    name: ' ',

    values: {
      title: ' ',
      description: ' ',
    },
	}).save(done);
};
