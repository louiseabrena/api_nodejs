//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const rapid = require("./modules/rapid/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let artists = await rapid.getArtist();
  console.log(artists);
  response.render("index", { name: "Tomorrow X Together", artist: artists });
});
app.get("/lyrics", async (request, response) => {
  let songs = await rapid.getSongList();
  console.log(songs);
  response.render("lyrics", { title: "Title", song: songs });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
