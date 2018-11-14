const _ = require('underscore');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function RegistrantDB(database) {
    "use strict";

    this.db = database.db("registrants");

    this.db.collection("people").findOne({});

    this.get = (callback) => {
        try {
            this.db.collection("people").find({}, function(err, result) {
                assert.equal(err, null);
                console.log("Got documents:", result);
                callback(null, result.ops);
            });
        } catch (e) {
            console.log("Error:", e);
            callback(e, {});
        }
    }

    this.getItem = (object, callback) => {
        try {
            this.db.collection("people").findOne(object, function(err, result) {
                assert.equal(err, null);
                console.log("Document:", result);
                callback(null, result);
            });
        } catch (e) {
            console.log("Error:", e);
            callback(e, {});
        }
    }

    this.addItem = (object, callback) => {
        try {
            var options = {
                name: object.name,
                regCode: object.regCode,
                status: object.status,
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

module.exports.RegistrantDB = RegistrantDB;