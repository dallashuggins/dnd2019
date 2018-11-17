const assert = require('assert');

function RegistrantDB(database) {
    "use strict";
    this.db = database.db("registrants");
    this.addItem = (object, callback) => {
        try {
            var options = {
                name: object.name,
                regCode: object.regCode,
                status: object.status,
                comments: object.comments,
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

module.exports = RegistrantDB;