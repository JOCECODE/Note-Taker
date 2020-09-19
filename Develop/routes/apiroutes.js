const db = require("../db/db.json");
const fs = require("fs");
// const path = require("path");
const notesId = [];
let counter = 1
function addCounter(){
  counter = counter + 1;
};

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
      return res.json(db);
    });
    // app.get("/api/notes/:id", function(req, res){
    //     var chosen = req.params.id;
    //     console.log(chosen);
    //     for (let i = 0; i < db.length; i++){
    //         if (chosen === db[i]){
    //             return res.json(db[i]);
    //         }
    //     }
    //     return res.json(false)
    // })

    app.post("/api/notes", (req, res) => {
           const newNotes = req.body;
           addCounter(counter);
           newNotes.id = counter;
           db.push(newNotes);
           fs.writeFile("../db/db.json", JSON.stringify(db), err => {
               if (err) throw err;
               console.log("wrote it");
           });
           return res.json(db);
        //    addCounter(counter);
        //    console.log(newNotes)
        //    let newId = counter;
        //    console.log(newId);
        //    newNotes.id = newId;
        // //    counter = counter +1;
        // //    console.log(counter);
        // //    counter = JSON.stringify(counter);
        // //    console.log(counter);
        // //    newNotes.id = counter;
        //    console.log(newNotes);
        //     notesId.push(newNotes);
        //     console.log(notesId)
        //     console.log(db);
        //    fs.writeFile("../db/db.json", JSON.stringify(notesId), err => {
        //        if (err) throw err;
        //        console.log("wrote it");
        //        return res.json(db)
        //    });
})
    app.delete("/api/notes/:id", (req,res) => {
        const id = req.params.id;
        const notes = req.body;
        Book.removeBook(id, (err, notes)=>
        {
            if (err) {
                throw err;
            }
            res.json(notes)
        })
    })    
};
