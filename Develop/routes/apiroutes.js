const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const notesId = [];

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
      return res.json(db);
    });
    app.get("/api/notes/:id", function(req, res){
        var chosen = req.params.id;
        console.log(chosen);
        for (let i = 0; i < notesId.length; i++){
            if (chosen === notesId[i]){
                return res.json(notesId[i]);
            }
        }
        return res.json(false)
    })

    app.post("/api/notes", (req, res) => {
           const newNotes = req.body;
           db.push(newNotes);
           notesId.push(db);
           fs.writeFile("../db/db.json", JSON.stringify(notesId), err => {
               if (err) throw err;
               console.log("wrote it");
               return res.json(db)
           });
})};
