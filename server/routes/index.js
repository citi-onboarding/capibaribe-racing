const path = require('path');
const keystone = require('keystone');
const cors = require('cors');
const postController = require('../controllers/postController.js');
const socialFooterController = require('../controllers/socialFooterController.js');


const Post = keystone.list('Posts');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController.getPost);

  app.get('/api/social-networks', socialFooterController.getSocialNetworks);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
  
};