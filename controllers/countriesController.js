const fetch = require('node-fetch');
const url = 'https://disease.sh/v3/covid-19/';
const { generateInfo } = require('./helper');

module.exports = {
    get_country: (req, res, next) => {
        try {
          fetch(`${url}countries/${req.params.country}?strict=false&allowNull=true`)
          .then(response => response.json())
          .then(data => {
            if(data.country) {
              let country = generateInfo(data);
              res.render('info', { country });
            }
            res.render('not_found');
          });
        } catch (err) {
          res.status(500).json({message: err});
        };  
    },
    post_country: (req, res, next) => {
        try {
          res.redirect(`/countries/${req.body.country}`);
        } catch (err) {
          res.status(500).json({message: err});
        };
    },
};