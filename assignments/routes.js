// import db from "../Database/index.js";

// function AssignmentsRoutes(app) {
//     app.delete("/api/assignments/:mid", (req, res) => {
//         const { mid } = req.params;
//         db.modules = db.modules.filter((m) => m._id !== mid);
//         res.sendStatus(200);
//       });
    
//   app.get("/api/courses/:cid/assignments", (req, res) => {
//     const { cid } = req.params;
//     console.log("CID IS " + cid);
//     // const modules = db.modules
//     //   .filter((m) => console.log(m.course));//m.course === cid);
//     const filteredModules = db.assignments.filter(assignment => assignment._id === cid);
//     console.log(filteredModules);
//     res.send(filteredModules);
//   });

//   app.post("/api/courses/:cid/assignments", (req, res) => {
//     const { cid } = req.params;
//     const newModule = {
//       ...req.body,
//       course: cid,
//       _id: new Date().getTime().toString(),
//     };
//     db.modules.push(newModule);
//     res.send(newModule);
//   });


// app.put("/api/assignments/:mid", (req, res) => {
//     const { aid } = req.params;
//     const assignmentIndex = db.assignments.findIndex(
//     (a) => a._id === aid);
//     db.assignments[assignmentIndex] = {
//     ...db.modules[assignmentIndex],
//     ...req.body
//     };
//     res.sendStatus(204);
// });

// }
// export default AssignmentsRoutes;

