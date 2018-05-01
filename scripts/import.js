require("dotenv").config();
const Db = require('mongodb').Db;
Server = require('mongodb').Server;
const keys = require('./keys.js');
const algolia = require('algolia');
const algoliasearch = require('algoliasearch');

var client = algoliasearch(keys.algoliaAppID, keys.alogoliaAdminKey);
// our defined index name
var index = client.initIndex('dev_questions');

//init connection to MongoDB
var db = new Db('mydb', new Server('localhost', 27017));
db.open(function(err, db){
    //get the data in the collection
    db.collection('myCollection', function(err, collection){
        if(err) throw err;
        console.log('Got the Collection Successfully' + collection)

        //iterate over the whole collectioin using a cursor
        var batch = [];
        collection.find().forEach(function(doc){
            batch.push(doc);
            if (batch.length > 1000) {

                //send documents by batch of 1000 to Algolia
                index.addObjects(batch);
                batch = [];
            }
        });

            // send the last batch
            if (batch.length > 0) {
                index.addObjects(batch);
            }

            console.log('Last Batch: ' + batch.length);
            
    });
});
