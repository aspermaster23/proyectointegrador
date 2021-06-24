let cancionesFavoritas = localStorage.getItem('pepito')
let arrayplaylist = JSON.parse(cancionesFavoritas)

resultadoPlaylist = document.querySelector('.resultadoPlaylist')
let imgplaylist = document.querySelector('.imgplaylist')


if(arrayplaylist.lenght === 0){
    resultadoPlaylist.innerHTML += `No se ha añadido ninguna cancion`
    
} else{
    for(let i=0 ; i < arrayplaylist.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayplaylist[i]}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(track){
         console.log(track);
         //playlist.innerHTML += ` <a href="detallecancion.html?id=${track.id}">${track.title}</a>`
         imgplaylist.innerHTML += `<a href="detallecancion.html?id=${track.id}"><img src="${track.album.cover_xl}" alt="Album${track.album.title}">${track.title}</img></a>`

        })

        .catch(function(error){
            console.log(error);
        })}}        
//   imgplaylist.innerHTML += `<img src="${dataCancion.album.cover_xl}" alt="Album${dataCancion.album.title}"></img>`
         //   data.innerHTML += `<li><a href="detail-track.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
         //       <li><a href="detail-album.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> </li>`




/*// Trayendo los datos del local storage
let canciones = localStorage.getItem('pepito')

// Ahora transformo los datos que vienen en string en un array
let arrayplaylist = JSON.parse(canciones)
//console.log(arrayplaylist);
//3
let play = document.querySelector('.play')
let foto = document.querySelector('.foto')
let data = document.querySelector('.data')
//let listaCanciones = document.querySelector('.listaCanciones')
if(arrayplaylist.lenght === 0){
    listaCanciones.innerHTML += `No se ha añadido ninguna cancion`
    
} else{
    for(let i=0 ; i < arrayplaylist.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayplaylist[i]}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(dataCancion){
            foto.innerHTML += `<img src="${dataCancion.album.cover_xl}" alt="Album${dataCancion.album.title}"></img>`
            data.innerHTML += `<li><a href="detail-track.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                <li><a href="detail-album.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> </li>`
        })

        .catch(function(error){
            console.log(error);
        })}}









/*

// determinamos si hay o no alguna cancion en la playlist y que pasa
if( arrayplaylist == 0){
    listaCanciones.innerHTML = '<li> No tienes ninguna cancion en tu playlist </li>' // si no hay fotos le muestro esto
}else{ 
    for(let i =0; i < arrayplaylist.length; i++){                       // Si tiene fotos, las muestro como imagenes
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${arrayplaylist[i]}`) //si pongo eso apunta exactamente al id en el que estoy posicionado
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(foto =>{    
                console.log(foto);                 //el += se pone para que los objetos no se pisen, es decir, para que haga la impresion de la primera imagen, luego la segunda, luego la tercera, y asi sucesivamente
            //listaCanciones.innerHTML += //`<li>${foto.hits} <li/>`
        })
        .catch(error =>console.log(error))
    }
} */


/*let canciones = localStorage.getItem('pepito')
let arrayplaylist = JSON.parse(canciones)

let foto = document.querySelector ('.foto')
let data = document.querySelector('.data')

//foto.classList.add('CSSfoto')
//data.classList.add('CSSinfo')*/


/*if(arrayplaylist.lenght === 0){
    listaCanciones.innerHTML += `No se ha añadido ninguna cancion`
    
} else{
    for(let i=0 ; i < arrayCancionesFav.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCancionesFav[i]}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(dataCancion){
            foto.innerHTML += `<img src="${dataCancion.album.cover_xl}" alt="Album${dataCancion.album.title}"></img>`
            data.innerHTML += `<li><a href="detail-track.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                <li><a href="detail-album.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> </li>`
        })

        .catch(function(error){
            console.log(error);
        })}}*/











/*
let arrayplaylist = JSON.parse(canciones)
let canciones = localStorage.getItem('pepito')
//console.log(arrayCancionesFav);

let listaCanciones = document.querySelector('.listaCanciones')
let play = document.querySelector('.play')
let vacio = document.getElementById('vacio')
let eliminarTodo = document.querySelector('.eliminar')
console.log('eliminar');

console.log(arrayCancionesFav);
if(arrayCancionesFav === null){
    play.play.display = 'none'
    eliminarTodo.style.display = 'none'
} else{
    vacio.style.display = 'none'
    for(let i=0 ; i < arrayCancionesFav.length; i++){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${arrayCancionesFav[i]}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(dataCancion){
            console.log(dataCancion);
            listaCanciones.innerHTML += `<article class="favorito"><img src="${dataCancion.album.cover_big}" alt="Album${dataCancion.album.title}">
            <ul class="elegido">
                <li><a href="detailCancion.html?id=${dataCancion.id}"><h4>${dataCancion.title}</h4></a></li>
                <li><a href="detailalbum.html?id=${dataCancion.album.id}">${dataCancion.album.title}</a> | 
                <li><a class="borrarCancion" href="#"><i class="far fa-trash-alt"></i></a></li>
            </ul>
            </article>`
        })
        .catch(function(error){
            console.log(error);
        })
    }
} */
