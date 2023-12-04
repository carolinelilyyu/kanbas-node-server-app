import * as dao from "./dao.js";
let currentUser = null;
function UserRoutes(app) {
  const createUser = async (req, res) => { };
  const deleteUser = async (req, res) => { };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
   };
  const findUserById = async (req, res) => {

   };
  const updateUser = async (req, res) => { };
  const signup = async (req, res) => { };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
   };
   const account = async (req, res) => {
    res.json(currentUser);
  };
  const signout = (req, res) => { };
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
//   app.get("/api/users/username/:id", findUserById);
//   app.get("/api/users/username/:username", findUserByUsername);
//   app.get("/api/users/username/:username/:password", findUserByCredentials);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default UserRoutes;

