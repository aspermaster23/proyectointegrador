//Detalle Artista
let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');

let detallesartista=document.querySelector(".detallesartista");
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesar =>{
    detallesartista.innerHTML += `<h2 class="infodetalles">Artista: ${dataDetallesar.name}</h2> <img src=${dataDetallesar.picture_big} alt=${dataDetallesar.name} class="imgdetalles">`
})
.catch(error => console.log(error));

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
.then(respuesta =>{
    return respuesta.json()
})
.then(topdata =>{
    detallesartista.innerHTML += `<li class="listadetart"><h2 class="listacanciones">Mejores 5 canciones:</h2></li>`

    for(let i =0;i<5;i++){
        detallesartista.innerHTML += `<article class="discoalbumbis"><a href="detallecancion.html?id=${topdata.data[i].id}"> <img src=${topdata.data[i].album.cover_big} class="imgdetalless"> </a> <h2>${topdata.data[i].title}</h2> </article>`
    }    
})
.catch(error => console.log(error));

let recomendaciones=document.querySelector(".recomendaciones");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbumes =>{
    for(let i =0;i<5;i++){
        recomendaciones.innerHTML += `<article class="discoalbum"><a href="detallealbum.html?id=${dataAlbumes.data[i].id}"> <img src=${dataAlbumes.data[i].cover_big}> </a> <h2>${dataAlbumes.data[i].title}</h2> </article>`
    }    
})
.catch(error=>console.log(error))