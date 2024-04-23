import express from "express";
import { deoProfile, loginDeo, registerDeo } from "../../controller/deo/deoAuthController.js";
import isAuthenticated from "../../middlewares/auth.js";
const deoRouter = express.Router();

deoRouter.post("/register-deo", registerDeo);
deoRouter.post("/login-deo", loginDeo);
deoRouter.get("/deo-profile", isAuthenticated, deoProfile)

export default deoRouter;