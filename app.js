import "dotenv/config";
import express from "express";
import corsMiddleware from "./middlewares/corsMiddleware.js";
import {
  errorHandlerMiddleware,
  errorLoggerMiddleware,
  invalidPathHandler,
} from "./middlewares/errorHandlerMiddleware.js";
import { otpRoute } from "./routes/index.js";

const app = express();

app.use(express.json());

//routes

app.use(corsMiddleware());

app.use(otpRoute);

//middlewares
app.use(errorLoggerMiddleware);
app.use(errorHandlerMiddleware);
app.use(invalidPathHandler);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
