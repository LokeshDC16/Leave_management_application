import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/route.js"

const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/' , Routes);

const PORT = 8000;

const URL = process.env.MONGO_CONNECTION_URL//URL stored in .env

Connection(URL);

app.listen(PORT , () => console.log(`Server Listening on ${PORT}`));