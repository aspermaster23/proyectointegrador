let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
console.log(id);
//Detalles Cancion
let infodetallescancion=document.querySelector(".infodetallescancion");
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesc =>{
    console.log(dataDetallesc);

    infodetallescancion.innerHTML += `<article class="infodetalles"> </a> <h2>Cancion: ${dataDetallesc.title}</h2></article> <article class="infodetalles">  <h2>Artista: ${dataDetallesc.artist.name}</h2> </article> <article class="infodetalles"> <h2>Album: ${dataDetallesc.album.title}</h2> </article> <article class="contenido"><img src=${dataDetallesc.album.cover_big} alt=${dataDetallesc.album.title} class="imgdetalles"> <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}?tracklist=false" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write" class="video"></iframe> </article> `
})
.catch(error => console.log(error));

//Detalle Album
let infodetallesalbum=document.querySelector(".infodetallesalbum");
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesa =>{
    console.log(dataDetallesa);
    infodetallesalbum.innerHTML += `<article class="infodetalles"> </a> <h2>Album: ${dataDetallesa.title}</h2></article> <article class="infodetalles">  <h2>Artista: ${dataDetallesa.artist.name}</h2> </article> <article class="infodetalles"> <h2>Genero: ${dataDetallesa.genres.data[0].name}</h2> </article> <article class="infodetalles"> <h2>Fecha de Publicacion: ${dataDetallesa.release_date}</h2> </article> <article class="detallesalbum"> <img src=${dataDetallesa.cover_big} alt=${dataDetallesa.title} class=imgdetalles> <ul class="listadocanciones"> <li><h2 class="listacanciones">Lista de Canciones:</h2></li>`
    
    for(let i = 0; i < dataDetallesa.tracks.data.length; i++){
        infodetallesalbum.innerHTML += `<li><h2>${dataDetallesa.tracks.data[i].title}</h2></li>` 
    }

    infodetallesalbum.innerHTML += `</ul> `
})
.catch(error => console.log(error));

