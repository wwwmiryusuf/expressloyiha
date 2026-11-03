import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my API server");
});

app.get("/about", (req, res) => {
    res.json({
        name: "yusuf",
        age: 14,
        hobby: {
            1: "musics",
            2: "games",
            3: "xantares peek",
        }
    });
});

export const handler = serverless(app);