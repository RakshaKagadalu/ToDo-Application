//importing all modules which are added in npm
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import model from "./models/index.js";

//create an express app variable used to configure our server
const app = express();

//to connect to mongodb
mongoose.connect("mongodb://localhost:27017/toDoitemsdb");

//to parse request body and convert that into a json object
app.use(express.json());
//to use data which has been encoded
app.use(express.urlencoded());
app.use(cors());

routes(app);
export default app;
