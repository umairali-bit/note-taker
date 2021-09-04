const express = require("express");
const path = require('path');
const app = express();
const PORT = 3001;
var uniqid = require('uniqid'); 

app.use(express.static("public")) 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// functions


//api route

app.delete("/notes/:id", (req,res) => {
  //look up req.params.id
})


//set up HTMLroutes here
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/notes', (req, res) => {
  return res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
