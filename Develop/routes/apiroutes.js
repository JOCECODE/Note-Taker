const db = require("../db/db.json");
const fs = require("fs");
let notesId = [];
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
    notesId = db; 
    let chosen = req.params.id;
    let less = notesId[chosen - 1].id;
    console.log(notesId)
     if(chosen === less.toString()){
   let filteredNotes = notesId.filter(
     (note) => note.id === parseInt(chosen));
         fs.writeFile("../db/db.json", JSON.stringify(filteredNotes), (err) => {
           if (err) throw err;
         });
     };
        return res.json(db);
});
};
