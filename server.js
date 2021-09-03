// start by writing all the routs 
// create a routes directory, two js files for backened and frontend
// db is database


//create a route and add a parameter in the req that would identifiy which note id we want to delete.

// for api routes, get route, post route and delete route.

// two html routes, ones gling to handle notes.html and the other one should be default


const express = require("express");
const path = require('path');
const app = express();
const PORT = 3001;

//app.use(express.static("public")) --google

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
