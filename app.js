// const express = require("express");
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import ModuleRoutes from "./modules/routes.js";
import CourseRoutes from "./courses/routes.js";
import "dotenv/config";
import session from "express-session";

const app = express();
app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);

Lab5(app);
HelloRoutes(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);

