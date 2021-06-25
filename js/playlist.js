let cancionesFavoritas = localStorage.getItem('pepito') // Traigo los datos del localStorage con getItem que estan dentro de favoritos
let arrayplaylist = JSON.parse(cancionesFavoritas)  // Los transformo en un array // Parsee cancionesFavoritas

let imgplaylist = document.querySelector('.imgplaylist')    // Declare la variables infoplaylist para capturar el elemento en donde quiero que se muestren las fotos 
let tituloplaylist = document.querySelector('.titulogonchy')


if(arrayplaylist.length == 0){ // Lo que le indique a este bloque fue basicamente que si el array cancionesPlaylist esta vacio, que diga:
    tituloplaylist.innerHTML = 'No agregaste ninguna cancion a tu playlist'
} else{ // Hice fetch para que muestre lo que el usuario puso en la playlist
    for(let i=0 ; i < arrayplaylist.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayplaylist[i]}`)        
                                                                            // Interpolo el array carrayPlaylist, que es en donde esta la informacion. 
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(track){
         console.log(track);
         imgplaylist.innerHTML += `<a href="detallecancion.html?id=${track.id}"><img  class="links" src="${track.album.cover_xl}" alt="Album${track.album.title}">${track.title}</img></a>`

        })

        .catch(function(error){
            console.log(error);
        })}}        