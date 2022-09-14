import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import user_controller from "./controller/user-controller.js";
import { PORT } from "./config.js";

const app = express();
const corsObject = {
  origin: true,
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsObject)); // config cors so that front-end can use
app.options("*", cors(corsObject));

app.use("/api/users", user_controller).all((_, res) => {
  res.setHeader("content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
});
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));
app.listen(PORT, () => console.log(`user-service listening on port ${PORT}`));

export default app;
