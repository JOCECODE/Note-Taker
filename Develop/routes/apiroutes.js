const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
      return res.json(db);
    });
    
    app.post("/api/notes", (req, res) => {
           const newNotes = req.body;
           db.push(newNotes);
           fs.writeFile("../db/db.json", JSON.stringify(db), err => {
               if (err) throw err;
               console.log("wrote it");
               return res.json(db)
           });
})};
