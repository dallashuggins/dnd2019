const rp = require('request-promise')

const addRegistrant = async (name) => {
    try {
        let options = {
            url: '/add',
            method: 'POST',
        };
        let response = await rp(options);
    } catch (e) {

    }
}

module.exports.add = addRegistrant;