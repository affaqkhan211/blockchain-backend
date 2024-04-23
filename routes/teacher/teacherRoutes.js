import express from "express";
import { loginTeacher, registerTeacher, teacherProfile } from "../../controller/teacher/teacherAuthController.js";
import isAuthenticated from "../../middlewares/auth.js";
const teacherRouter = express.Router();

teacherRouter.post("/register-teacher", registerTeacher);
teacherRouter.post("/login-teacher", loginTeacher)
teacherRouter.get("/teacher-profile", teacherProfile)

export default teacherRouter;