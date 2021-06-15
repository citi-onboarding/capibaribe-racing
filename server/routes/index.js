const path = require('path');
const keystone = require('keystone');
const cors = require('cors');
const postController = require('../controllers/postController');
const aboutUsController = require('../controllers/aboutUsControllers');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController.getPost);
  app.get('/api/aboutUs', aboutUsController.getaboutUsController);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};
