const rp = require('request-promise');

const getForecast = async (auth, callback) => {
    try {
        let object = {
            method: 'GET',
            uri: 'https://api.aerisapi.com/forecasts/',
            params: {
                client_id: auth.aeris_access_key,
                client_secret: auth.aeris_secret_key,
                p: 'nottingham,nh'
            },
            json: true
        };
        //console.log("weatherFunctions object", object);
        let response = await rp(object);
        console.log("weatherFunctions response:", response);
        return await callback(null, response);
    } catch (e) {
        return callback(e.message.error, {});
    }
}

module.exports = getForecast;