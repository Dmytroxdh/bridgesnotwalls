import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, () =>{
    console.log(`server listening on port ${port}`);
});

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});