const _ = require('underscore');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function RegistrantDB(database) {
    "use strict";

    this.db = database.db("registrants");

    this.db.collection("people").findOne({});

    this.addItem = (name, regCode, status, callback) => {
        try {
            var object = {
                name: name,
                regCode: regCode,
                status: status,
                createdAt: Date.now()
            };
            this.db.collection("people").insertOne(object);
            return callback(null, object);
        } catch (e) {
            console.log("Error:", e);
            return callback(e, {});
        }
    }
};

module.exports.RegistrantDB = RegistrantDB;