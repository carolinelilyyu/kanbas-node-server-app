// import db from "../Database/index.js";
// import { model } from "mongoose";
// import * as dao from "./dao.js";
// function QuizzesRoutes(app) {

//   app.get("/api/courses/:cid/quizzes", (req, res) => {
//     const { cid } = req.params;
//     console.log("CID IS " + cid);
//     // const modules = db.modules
//     //   .filter((m) => console.log(m.course));//m.course === cid);
//     const filteredQuizzes = db.quizzes.filter(quiz => quiz.course === cid);
//     console.log(filteredQuizzes);
//     res.send(filteredQuizzes);
//   });

//     app.delete("/api/quizzes/:qid", (req, res) => {
//         const { qid } = req.params;
//         db.quizzes = db.quizzes.filter((a) => a._id !== qid);
//         res.sendStatus(200);
//     });


//   app.post("/api/courses/:cid/quizzes", (req, res) => {
//     const { cid } = req.params;
//     const newQuiz = {
//       ...req.body,
//       course: cid,
//       _id: new Date().getTime().toString(),
//     };
//     db.quizzes.push(newQuiz);
//     res.send(newQuiz);
//   });


// app.put("/api/quizzes/:qid", (req, res) => {
//     const { qid } = req.params;
//     const quizIndex = db.quizzes.findIndex(
//     (a) => a._id === qid);
//     db.quizzes[quizIndex] = {
//     ...db.quizzes[quizIndex],
//     ...req.body
//     };
//     res.sendStatus(204);
// });

// }
// export default QuizzesRoutes;

