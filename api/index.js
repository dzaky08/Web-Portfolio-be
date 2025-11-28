import express from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import db  from '../config/Database.js';
import router from "../routes/index.js";

dotenv.config();
const app = express();

try {     
    await db.authenticate();
    console.log('Database connected');
    //jika database kita tidak punya tabel
    // await db.sync(); 
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(express.json());
app.use("/", router);


export default app;
