const songUrl = "https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=";
const artistUrl = "https://spotify23.p.rapidapi.com/artists/?ids=";

var songId = "1692196";
var artistId = "0ghlgldX5Dd6720Q3qFyQB";

/*
 * Functions for RAPID API requests.
 */
async function getArtist() {
  let reqUrl = `${artistUrl}${artistId}`;
  var response = await fetch(reqUrl, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "154c6d3faamsh1d807fe819985e5p19951cjsn189f3b112be4",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  });
  //the JSON response data will be found in response.json()
  return await response.json();
}

async function getSongList() {
  let reqUrl = `${songUrl}${songId}`;
  var response = await fetch(reqUrl, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "70fa7969f2msh473685a350cb9e2p1cccd2jsn3dea17af6b47",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  });
  // the JSON response data will be found in response.json()
  return await response.json();
}

// //EXPORT any functions to be used outside this file
module.exports = {
  getSongList,
  getArtist,
};
