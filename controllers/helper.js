module.exports = {
    generateInfo: (data) => {
        let result = {
            "country": data.country ? data.country : null,
            "total_cases": data.cases,
            "today_cases": data.todayCases,
            "total_deaths": data.deaths,
            "today_deaths": data.todayDeaths,
            "recovered": data.recovered,
            "today_recovered": data.todayRecovered,
            "active": data.active,
            "population": data.population,
            "affected_countries": data.affectedCountries ? data.affectedCountries : null,
            "cases_percentaje": parseFloat(data.cases / data.population * 100).toFixed(2),
            "deaths_percentaje": parseFloat(data.deaths / data.cases * 100).toFixed(2),
            "recovered_percentaje": parseFloat(data.recovered / data.cases * 100).toFixed(2),
            "active_percentaje": parseFloat(data.active / data.cases * 100).toFixed(2)
        };

        return result;
    },
};