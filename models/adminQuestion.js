const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// admin user id, something to authenticate the admin 
// for each unanswered question include an id that links to the corresponding admin 
// Admin id will be used to show all the questions they have answered when they log in
// create a get route and request for admin users --> it will retrieve all their questions
const unansweredSchema = new Schema({
    adminId: { type: Number, required: true},
    topic: {type: String, required: true},
    tags: String,
    answer: {type: String, required: true},
    objectID: {type: Number, reequired: true}
});

const unansweredQuestion = mongoose.model("unansweredQuestion", unansweredSchema);

module.exports = unansweredQuestion;