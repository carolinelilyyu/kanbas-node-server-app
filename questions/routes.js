import db from "../Database/index.js";
// import { model } from "mongoose";
// import * as dao from "./dao.js";

function QuestionsRoutes(app) {

  app.get("/api/quizzes/:qid/questions", (req, res) => {
    const { qid } = req.params;
    console.log("QUIZID IS " + qid);
    // const modules = db.modules
    //   .filter((m) => console.log(m.course));//m.course === qid);
    const filteredQuestions = db.questions.filter(questions => questions.course === qid);
    console.log(filteredQuestions);
    res.send(filteredQuestions);
  });

    app.delete("/api/questions/:qid", (req, res) => {
        const { qid } = req.params;
        db.questions = db.questions.filter((q) => q._id !== qid);
        res.sendStatus(200);
    });

  app.post("/api/quizzes/:qid/questions", (req, res) => {
    const { qid } = req.params;
    const newQuiz = {
      ...req.body,
      course: qid,
      _id: new Date().getTime().toString(),
    };
    db.questions.push(newQuiz);
    res.send(newQuiz);
  });


app.put("/api/questions/:qid", (req, res) => {
    const { qid } = req.params;
    const questionIndex = db.questions.findIndex(
    (q) => q._id === qid);
    db.questions[questionIndex] = {
    ...db.questions[questionIndex],
    ...req.body
    };
    res.sendStatus(204);
});

}
export default QuestionsRoutes;

