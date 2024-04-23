import express from "express";
import { transferRequest } from "../../controller/teacher/request.js";
const transferRequestRouter = express.Router();

transferRequestRouter.post("/transfer-request", transferRequest);

export default transferRequestRouter