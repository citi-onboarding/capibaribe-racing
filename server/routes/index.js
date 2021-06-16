const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const socialFooterController = require('../controllers/socialFooterController.js');
const bannerController = require('../controllers/bannerController');
const aboutCarController = require('../controllers/aboutCarController.js');
const backersController = require('../controllers/backersController.js');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/banner', bannerController.getbannerController);
  app.get('/api/social-networks', socialFooterController.getSocialNetworks);
  app.get('/api/about-car', aboutCarController.getAboutCar);
  app.get('/api/backers', backersController.getBackers);

  app.get('*', (req, res) => {
		res.redirect('/');
	});

};
