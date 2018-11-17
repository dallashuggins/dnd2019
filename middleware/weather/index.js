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
        console.log("weatherFunctions object", object);
        return rp(object).then(response => {
            console.log("weatherFunctions response:", response);
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