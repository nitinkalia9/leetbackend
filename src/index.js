import express from "express"
import dotenv, { config } from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"


import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";
import executionRoute from "./routes/executeCode.routes.js";
import submissionRoute from "./routes/submission.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";

dotenv.config();


const app = express();

app.use(
    cors({
    origin: "https://leetlab.netlify.app",
    // credentials: true,
}))

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello Guys Welcome to leetlab🔥");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);
app.use("/api/v1/execute-code", executionRoute);
app.use("/api/v1/submission", submissionRoute);
app.use("/api/v1/playlist", playlistRoutes);

app.listen(process.env.PORT, ()=> {
    console.log("server is running on port 8080")
});

