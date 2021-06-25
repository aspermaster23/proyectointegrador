let cancionesFavoritas = localStorage.getItem('pepito')
let arrayplaylist = JSON.parse(cancionesFavoritas)

let imgplaylist = document.querySelector('.imgplaylist')
let tituloplaylist = document.querySelector('.titulogonchy')


if(arrayplaylist.length == 0){
    tituloplaylist.innerHTML = 'No agregaste ninguna cancion a tu playlist'
} else{
    for(let i=0 ; i < arrayplaylist.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayplaylist[i]}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(track){
         console.log(track);
         imgplaylist.innerHTML += `<a href="detallecancion.html?id=${track.id}"><img src="${track.album.cover_xl}" alt="Album${track.album.title}">${track.title}</img></a>`

        })

        .catch(function(error){
            console.log(error);
        })}}        
