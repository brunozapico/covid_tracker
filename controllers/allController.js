const fetch = require('node-fetch');
const url = 'https://disease.sh/v3/covid-19/';
const { generateInfo } = require('./helper');

module.exports = {
    list_all: (req, res, next) => {
        try {
          fetch(`${url}all?allowNull=true`)
          .then(response => response.json())
          .then(data => {
            let info = generateInfo(data);
            res.status(200).send(info);
          });
        } catch (err) {
          res.status(500).json({message: err});
        };  
    },
};