const keystone = require('keystone');

const socialNetworks = keystone.list('SocialNetworks');

module.exports = {

  getSocialNetworks (req, res) {
    socialNetworks.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
     res.status(200).json(items)
    });
  }
}
