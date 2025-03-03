import { Router } from "express";
import {
  getUserData,
  purchaseCourse,
  userEnrolledCourses,
} from "../Controllers/User.controller.js";

const userRouter = Router();

userRouter.get("/data", getUserData);
userRouter.get("/enrolled-courses", userEnrolledCourses);
userRouter.post("/purchase", purchaseCourse);

export default userRouter;
