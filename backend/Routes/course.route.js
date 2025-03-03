import { Router } from "express";
import {
  getAllCourses,
  getCourseById,
} from "../Controllers/Course.controller.js";

const courseRouter = Router();

courseRouter.get("/all", getAllCourses);
courseRouter.get("/:id", getCourseById);

export default courseRouter;
