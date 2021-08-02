import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userConroller";
import * as professorController from "./controllers/professorController"
import * as periodController from './controllers/periodController'
import * as disciplineController from './controllers/disciplineController'
import * as categoryController from './controllers/categoryController'
import * as examController from './controllers/examController'

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", userController.getUsers);






app.post("/exams", examController.postNewExam)
app.get("/exams",examController.getExams )




app.post("/categories", categoryController.addCategory)
app.get("/categories", categoryController.getCategories)




app.post("/disciplines", disciplineController.addDiscipline)
app.get("/disciplines", disciplineController.getDisciplines)
app.get("/disciplines/:id",disciplineController.getDisciplineById)



app.get("/professors", professorController.getProfessors)
app.post("/professors", professorController.addProfessor)
app.get("/professors/:id", professorController.getProfessorById)





app.get("/periods", periodController.getPeriods)
app.post("/periods", periodController.addPeriod)

export async function init () {
  await connectDatabase();
}






export default app;
