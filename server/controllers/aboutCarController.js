const keystone = require('keystone');

const AboutCar = keystone.list('AboutCar');

module.exports = {

  getAboutCar(req, res) {
    AboutCar.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 
     res.status(200).json(items)
    });
  }
}