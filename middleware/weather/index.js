const rp = require('request-promise');

const getForecast = (auth, callback) => {
    try {
        let object = {
            method: 'GET',
            uri: 'https://api.aerisapi.com/forecasts/',
            qs: {
                client_id: auth.aeris_access_key,
                client_secret: auth.aeris_secret_key,
                p: 'nottingham,nh'
            },
            json: true
        };
        return rp(object).then(response => {
            console.log("Get forecast function response:", response);
            if (response.response) {
                return callback(null, response.response);
            } else if (response.error) {
                throw new Error({message: response.error})
            } else {
                throw new Error({message: response})
            }
        })
    } catch (e) {
        return callback(e.message, {});
    }
}

const getHistoricalObservations = (fromDate, options, callback) => {
    try {
        let object = {
            method: 'GET',
            uri: 'https://api.aerisapi.com/observations/archive/',
            qs: {
                client_id: options.aeris_access_key,
                client_secret: options.aeris_secret_key,
                p: 'nottingham,nh',
                from: fromDate
            },
            json: true
        };
        console.log("Get Historical Observations object", object);
        return rp(object).then(response => {
            console.log("Get Historical Observations response:", response);
            if (response.response) {
                return callback(null, response.response);
            } else if (response.error) {
                throw new Error({message: response.error})
            } else {
                throw new Error({message: response})
            }
        })
    } catch (e) {
        return callback(e.message, {});
    }
}

module.exports.getForecast = getForecast;
module.exports.getHistoricalObservations = getHistoricalObservations;