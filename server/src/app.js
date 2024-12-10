import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://rest-crud-auth-app.onrender.com",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter);
app.use("/api", taskRoutes);

export default app;
