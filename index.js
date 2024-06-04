import express from "express";
import dotenv from "dotenv"; //Es para cargar variables de entorno
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/auth-routes.js";
import bodyParser from "body-parser";
import {errorHandler, notFound } from "./middleware/error-handler.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);


app.use(notFound);
app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`The app is running at port ${PORT}`);
});
