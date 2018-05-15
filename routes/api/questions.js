const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// // Matches with "/api/questions"
// router.route("/")
//   .get(questionsController.findAll)
//   .post(questionsController.create);
  
// router.route("/topic/:topic")
//   .get(questionsController.findByTopic);

module.exports = router;
