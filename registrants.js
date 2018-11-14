const _ = require('underscore');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function RegistrantDB(database) {
    "use strict";

    this.db = database.db("registrants");

    this.db.collection("people").findOne({});

    this.addItem = (name, regCode, status, callback) => {
        "use strict";
        this.db.collection("people").insert({
            name: name,
            regCode: regCode,
            status: status,
            createdAt: Date.now()
        })
        , function(err, doc) {
            assert.equal(null, err);
            console.log(doc)
            callback(doc);
            /*db.collection("people").findOne({ 'x' : 1 }, function(err, doc) {
                assert.equal(null, err);
                console.log(doc);
                db.close();
            });*/
            /*function(err, result) {
                assert.equal(null, err);
                // To get the actual document updated we need to access the
                // value field of the result.
                callback(result.value);
            });*/
        };
    }
};

module.exports.RegistrantDB = RegistrantDB;