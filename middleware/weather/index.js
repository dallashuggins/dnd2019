const rp = require('request-promise');

const weatherFunctions = () => {
    "use strict";
    this.getForecast = (auth, callback) => {
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
            let response = rp(object);
            callback(null, response);
        } catch (e) {
            callback(e, {});
        }
    }
}

module.exports = weatherFunctions;