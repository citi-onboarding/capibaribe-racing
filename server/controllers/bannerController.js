const keystone = require('keystone');

const banner = keystone.list('banner');

module.exports = {

  getbannerController (req, res) {
    banner.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
     res.status(200).json(items)
    });
  }
}
