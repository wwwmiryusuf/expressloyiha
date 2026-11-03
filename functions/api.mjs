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

app.get("/mirkomil", (req, res) => {
    res.json({
        name: "Mirkomil",
        age: 48,
        hobby: {
            1: "remont",
            2: "programmalar bilan tanishish",
            3: "uy ishlari",
        }
    });
});

app.get("/yulduz", (req, res) => {
    res.json({
        name: "Yulduz",
        age: 43,
        hobby: {
            1: "kitob oqish",
            2: "taom pishirish",
            3: "masalluqlar",
        }
    });
});

export const handler = serverless(app);