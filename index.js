import express from "express"
import Connection from "./db/Conn.js"
const app = express();
import cors from "cors";
import teacherRouter from "./routes/teacher/teacherRoutes.js";
import deoRouter from "./routes/deo/deoRoutes.js";
import transferRequestRouter from "./routes/teacher/tranferRequestRoute.js"
import handleRequests from "./routes/deo/handleRequests.js";


app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000;

Connection()

app.use("/api/teacher", teacherRouter)
app.use("/api/deo", deoRouter)
app.use("/api", transferRequestRouter)
app.use("/api", handleRequests)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
