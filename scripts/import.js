require("dotenv").config();
// var Db = require('mongodb').Db,
    // MongoClient = require('mongodb').MongoClient,
    // Server = require('mongodb').Server;

var mongoose = require('mongoose');
var db = mongoose.connection; 
mongoose.connect('mongodb://localhost/KisAppDatabase');

const keys = require('./keys.js');
const algoliasearch = require('algoliasearch');

var client = algoliasearch(keys.algoliaAppID, keys.alogoliaAdminKey);
// our defined index name
var index = client.initIndex('dev_questions');

//init connection to MongoDB
// var db = new Db('KisAppDatabase', new Server('mongodb://localhost/KisAppDatabase', 27017));
console.log('New Server Working');
db.once('open', function(err, db){

    console.log('Connected to "KisAppDatabase"');
    //get the data in the collection
    const collectionName = 'question';
    // const collection = db.question(collectionName);
    // console.log('db.question throwing error: ' + db.question);
        db.question('question', {strict: true}, function(err, find){
        if(err) 
        {
            console.log('The "questions" collection does not exist. Unable to locate collection.' + err + 'Has Occurred')
        } else {  

            console.log('Connected to "questions" collection Successfully');
        }
        //iterate over the whole collectioin using a cursor
        var batch = [];
        collection.find().forEach(function(doc){
            batch.push(doc);
            if (batch.length > 1000) {

                //send documents by batch of 1000 to Algolia
                index.addObjects(batch);
                batch = [];
            }
            console.log('Indexed: ' + batch.length);
        });

            // send the last batch
            if (batch.length > 0) {
                index.addObjects(batch);
            }
            console.log('Last Batch: ' + batch.length);
        
        db.on('close', test.done.bind('mydb'));
        db.close()    
    });
});
