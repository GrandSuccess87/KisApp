var Db = require('mongodb').Db,
Server = require('mongodb').Server,
algoliasearch = require('algoliasearch');

// init Algolia index
var client = algoliasearch("*********", "••••••••••••••••••••••••••••••••");
var index = client.initIndex('YourIndexName');

// init connection to MongoDB
var db = new Db('mydb', new Server('localhost', 27017));
db.open(function(err, db) {
// get the collection
db.collection('myCollection', function(err, collection) {
// iterate over the whole collection using a cursor
var batch = [];
collection.find().forEach(function(doc) {
  batch.push(doc);
  if (batch.length > 10000) {
    // send documents by batch of 10000 to Algolia
    index.addObjects(batch);
    batch = [];
  }
});
// last batch
if (batch.length > 0) {
  index.addObjects(batch);
}
});
});