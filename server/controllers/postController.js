const keystone = require('keystone');

const Post = keystone.list('Posts');

module.exports = {

  getPost (req, res) {
    Post.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
     res.status(200).json(items)
    });
  }
}
