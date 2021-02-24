import express from 'express';
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());//habilitando para usar o formato Json
app.use(router);

app.listen(3333, () => console.log("Server is running!"));
