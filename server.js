import express from 'express';
import db from './config/database.js';
import users from "./routes/users.js";
import customers from "./routes/customers.js";
import cors from "cors";
import bodyParser from 'body-parser';


const app = express();

try {
    await db.authenticate();
    console.log("DB connected!");
} catch (error) {
    console.error(`DB error with message: ${error}`);
}

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/customers", customers);



const PORT = 8080;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));