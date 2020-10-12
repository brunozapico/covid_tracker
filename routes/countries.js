const router = require('express').Router();
const fetch = require('node-fetch');
const url = 'https://disease.sh/v3/covid-19/';

router.post('/', (req, res, next) => {
    res.redirect(`/countries/${req.body.country}`);
  });
  
  router.get('/:country', (req, res, next) => {
    fetch(`${url}countries/${req.params.country}?strict=true`)
    .then(response => response.json())
    .then(data => {
      let result = {
        "total_cases": data.cases,
        "today_cases": data.todayCases,
        "total_deaths": data.deaths,
        "today_deaths": data.todayDeaths,
        "recovered": data.recovered,
        "today_recovered": data.todayRecovered
      };
  
      res.status(200).send(result);
    });
  });

module.exports = router;