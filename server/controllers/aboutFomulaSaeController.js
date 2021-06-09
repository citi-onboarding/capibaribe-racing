const keystone = require('keystone');

const AboutFormulaSae = keystone.list('AboutFormulaSae');

module.exports = {

  getAboutFormulaSaeController (req, res) {
    AboutFormulaSae.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 
     res.status(200).json(items)
    });
  }
}