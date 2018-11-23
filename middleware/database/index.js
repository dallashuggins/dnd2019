const assert = require('assert');

function RegistrantDB(database) {
    "use strict";
    this.db = database.db("registrants");
    this.addItem = (object, callback) => {
        try {
            var options = {
                name: object.name,
                email: object.email,
                regCode: object.regCode,
                status: object.status,
                comments: object.comments,
                guests: object.guests,
                createdAt: Date.now()
            };
            this.db.collection("people").insertOne(options, function(err, result) {
                assert.equal(err, null);
                console.log("Inserted a document:", result.ops);
                callback(null, result.ops);
            });
        } catch (e) {
            console.log("Error:", e);
            callback(e, {});
        }
    }
};

function WeatherDB(database) {
    "use strict";
    this.db = database.db("weather");
    this.getTemps = async (callback) => {
        try {
            this.db.collection("temperatures")
            .find({})
            .sort( { date: -1 } )
            .toArray(function(err, documents) {
                assert.equal(err, null);
                return callback(null, documents)
            });
        } catch (e) {
            console.log("Error:", e);
            callback(e, {});
        }
    }
};

module.exports.RegistrantDB = RegistrantDB;
module.exports.WeatherDB = WeatherDB;