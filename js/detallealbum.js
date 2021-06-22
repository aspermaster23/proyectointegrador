//Detalle Album
let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
console.log(id);

let infodetallesalbum=document.querySelector(".infodetallesalbum");

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesa =>{
    console.log(dataDetallesa);
    infodetallesalbum.innerHTML += `<article class="infodetalles"> <h2>Album: ${dataDetallesa.title}</h2></article> <article class="infodetalles">  <h2>Artista: ${dataDetallesa.artist.name}</h2> </article> <article class="infodetalles"> <h2>Genero: ${dataDetallesa.genres.data[0].name}</h2> </article> <article class="infodetalles"> <h2>Fecha de Publicacion: ${dataDetallesa.release_date}</h2> </article> `

})
.catch(error => console.log(error));

let detallesalbum=document.querySelector(".detallesalbum");

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesa =>{
    console.log(dataDetallesa);
    infodetallesalbum.innerHTML += `<img src=${dataDetallesa.cover_big} alt=${dataDetallesa.title} class=imgdetalles> <ul><h2 class="listacanciones">Lista de Canciones:</h2></ul>`
    
    for(let i = 0; i < dataDetallesa.tracks.data.length; i++){
        infodetallesalbum.innerHTML += `<li class="listadocanciones"><h2>${dataDetallesa.tracks.data[i].title}</h2></li>` 
    }

})
.catch(error => console.log(error));
