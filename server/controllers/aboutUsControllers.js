const keystone = require('keystone');

const aboutUs = keystone.list('about-us');

module.exports = {

  getaboutUsController (req, res) {
    aboutUs.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
     res.status(200).json(items)
    });
  }
}
