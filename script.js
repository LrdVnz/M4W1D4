/* api endpoint : 
   https://striveschool-api.herokuapp.com/api/deezer/search?q=
*/

/// Chiamare l'endpoint per ottenere risultati da mostrare sulla webpage

let albumTitles = {};

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminen")
  .then((response) => response.json())
  .then((data) => {
    getAlbumCovers("eminem", data);
  })
  .catch((error) => console.log(error));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
  .then((response) => response.json())
  .then((data) => {
    getAlbumCovers("metallica", data);
  })
  .catch((error) => console.log(error));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
  .then((response) => response.json())
  .then((data) => {
    getAlbumCovers("queen", data);
  })
  .catch((error) => console.log(error));

let getAlbumCovers = (artist, data) => {
  let artistRow = document.getElementById(`${artist}Section`);
  albumTitles[data.data[0].artist.name] = [];

  for (let i = 0; i < 4; i++) {
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");
    newImg.src = data.data[i].album.cover_xl;
    albumTitles[data.data[i].artist.name].push(data.data[i].album.title);
    newDiv.classList.add("col");
    newDiv.appendChild(newImg);
    artistRow.appendChild(newDiv);
  }
};

let showTitles = () => {
  let modalBody = document.getElementById("modal-inner");
  modalBody.innerHTML = ''; 

  for(key in albumTitles) {
   let newUl = document.createElement('ul');
    newUl.innerText = key + ' :'; 
    console.log(key)
     for (let i = 0; i < albumTitles[key].length; i++){
      let newLi = document.createElement('li');
      newLi.innerText = albumTitles[key][i];
      newUl.appendChild(newLi);
     }

  modalBody.appendChild(newUl)
  }
  
};
