import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html"));
})
app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "upload.html"));
})

app.listen(PORT, () => {
    console.log("Server is live on http://localhost:3000");
})