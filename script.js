/* api endpoint : 
   https://striveschool-api.herokuapp.com/api/deezer/search?q=
*/

/// Chiamare l'endpoint per ottenere risultati da mostrare sulla webpage 

let eminenRow = document.getElementById('eminemSection');

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminen')
.then(response => response.json())
.then((data) => {
    console.log(data.data[0].album.cover)

    let newLi = document.createElement('div'); 
    let newImg = document.createElement('img');
    newImg.src = data.data[0].album.cover; 
    newLi.appendChild(newImg);
    eminenRow.appendChild(newLi);

})
.catch(error => console.log(error))



