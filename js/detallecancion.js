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

    infodetallescancion.innerHTML += `<article class="infodetalles"> <h2>Cancion: ${dataDetallesc.title}</h2></article> <article class="infodetalles"><a href="detalleartista.html?id=${dataDetallesc.artist.id}"> <h2>Artista: ${dataDetallesc.artist.name}</h2></a> </article> <article class="infodetalles"> <a href="detallealbum.html?id=${dataDetallesc.album.id}"> <h2>Album: ${dataDetallesc.album.title}</h2> </a> </article> <article class="contenido"><img src=${dataDetallesc.album.cover_big} alt=${dataDetallesc.album.title} class="imgdetalles"> <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}?tracklist=false" width="100%" height="260px" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write" class="video"></iframe> </article> `
})
.catch(error => console.log(error));
