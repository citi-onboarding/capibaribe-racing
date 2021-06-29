const keystone = require('keystone');

const values = keystone.list('values');

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
