const keystone = require('keystone');

const aboutUs = keystone.list('values');

module.exports = {

  getValues (req, res) {
    values.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
     res.status(200).json(items)
    });
  }
}
