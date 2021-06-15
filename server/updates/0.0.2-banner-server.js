const keystone = require('keystone');
const banner = keystone.list('banner');

exports = module.exports = (done) => {
	new banner.model({
		name: 'Banner',
		title: ' ',
		description: ' ',
	}).save(done);
};
