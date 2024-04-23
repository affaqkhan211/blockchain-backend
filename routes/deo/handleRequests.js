import express from "express";
import { allRequests } from "../../controller/deo/allRequests.js";
const handleRequests = express.Router();


handleRequests.get("/all-requests", allRequests)
export default handleRequests;