const db = require("../db/db.json")
const fs = require("fs")


module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(db);
    });
    app.post("/api/notes", (req, res) => {
        const newNotes = req.body;
       res.json(db.push(newNotes));
    });
    // app.delete("/api/notes/:id", (req, res) => {
    //     const requestId = req.params.id;
    // })
};