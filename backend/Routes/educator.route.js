import { Router } from "express";
import upload from "../Config/Multer.config.js";
import {
  addCourse,
  educatorDashboardData,
  getEducatorCourses,
  getEnrolledStudentsData,
  updateRoleToEducator,
} from "../Controllers/Educator.controller.js";
import { protectEducator } from "../Middleware/Auth.middleware.js";

const educatorRouter = Router();

educatorRouter.get("/update-role", updateRoleToEducator);

educatorRouter.post(
  "/add-course",
  upload.single("image"),
  protectEducator,
  addCourse
);
educatorRouter.get("/courses", protectEducator, getEducatorCourses);
educatorRouter.get("/dashboard", protectEducator, educatorDashboardData);

educatorRouter.get(
  "/enrolled-students",
  protectEducator,
  getEnrolledStudentsData
);
export default educatorRouter;
