import express from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import db  from './config/Database.js';
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {     
    await db.authenticate();
    console.log('Database connected');
    // await db.sync(); //jika database kita tidak punya tabel
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(express.json());
app.use("/api", router);


app.listen(5000, () => console.log("server running at port 5000"));
