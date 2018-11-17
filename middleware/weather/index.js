const rp = require('request-promise');

const getForecast = (auth, callback) => {
    try {
        let object = {
            method: 'GET',
            uri: 'https://api.aerisapi.com/forecasts/',
            params: {
                client_id: auth.aeris_access_key,
                client_secret: auth.aeris_secret_key,
                p: 'nottingham,nh'
            }
        };
        console.log("weatherFunctions object", object);
        let response = rp(object);
        console.log("weatherFunctions response:", response);
        return callback(null, response);
    } catch (e) {
        return callback(e, {});
    }
}

module.exports = getForecast;