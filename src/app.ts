import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userConroller";
import * as professorController from "./controllers/professorController"
import * as periodController from './controllers/periodController'
import * as disciplineController from './controllers/disciplineController'

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", userController.getUsers);






app.post("/exams", userController.postNewExam)




app.post("/disciplines", disciplineController.addDiscipline)





app.get("/professors", professorController.getProfessors)
app.post("/professors", professorController.addProfessor)



app.get("/periods", periodController.getPeriods)
app.post("/periods", periodController.addPeriod)

export async function init () {
  await connectDatabase();
}






export default app;
