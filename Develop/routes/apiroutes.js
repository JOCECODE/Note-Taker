const db = require("../db/db.json");
const fs = require("fs");
let counter = db.length;
function addCounter(){
  counter = counter + 1;
};

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
      return res.json(db);
    });
    

    app.post("/api/notes", (req, res) => {
           const newNotes = req.body;
           addCounter(counter);
           newNotes.id = parseInt(counter);
           db.push(newNotes);
           fs.writeFile("../db/db.json", JSON.stringify(db), err => {
               if (err) throw err;
           });
           return res.json(db);
})
    app.delete("/api/notes/:id", (req,res) => {  
    let chosen = req.params.id;
   let filteredNotes = db.filter(
     (note) => { return note.id === parseInt(chosen)});
      let index = db.indexOf(filteredNotes[0]);
     db.splice(index,1);
      res.json(db);
     });
        
};
