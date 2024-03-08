const questionModel = require("../models/Question");

const getQuestions = (_, res) => {
  const questions = questionModel.getQuestions();
  res.json(questions);
};

const getQuestionsWithoutType = (_, res) => {
  const questions = questionModel.getQuestions();

  res.json(
    questions.map((question) => {
      const optionsWithoutType = question.options.map((option) => {
        const { type, ...optionWithoutType } = option;
        return optionWithoutType;
      });

      return { ...question, options: optionsWithoutType };
    })
  );
};

module.exports = {
  getQuestions,
  getQuestionsWithoutType,
};
