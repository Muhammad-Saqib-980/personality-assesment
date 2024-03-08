const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/", questionController.getQuestionsWithoutType);

module.exports = router;
