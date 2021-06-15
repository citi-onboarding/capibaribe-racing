const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const socialFooterController = require('../controllers/socialFooterController.js');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/social-networks', socialFooterController.getSocialNetworks);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
  
};