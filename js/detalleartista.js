//Detalle Artista
let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');
console.log(id);

let infodetallesartista=document.querySelector(".infodetallesartista");
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesar =>{
    console.log(dataDetallesar);

    infodetallesartista.innerHTML += `<h2 class="infodetalles">Artista: ${dataDetallesar.name}</h2> <article class="detallesartista"><img src=${dataDetallesar.picture_big} alt=${dataDetallesar.name} class="imgdetalles"><ul class="listadocanciones"></article>`
})
.catch(error => console.log(error));

let listadoscanciones=document.querySelector(".listadoscanciones");
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataDetallesart =>{
    console.log(dataDetallesart);

    listadoscanciones.innerHTML += `<li><h2 class="listacanciones">Mejores 5 canciones:</h2></li>`

    for(let i=0;i<5;i++){
        listadoscanciones.innerHTML += `<li><h2>${dataDetallesart.data[i].title}</h2></li>`
    }
})
.catch(error => console.log(error));

let recomendaciones=document.querySelector(".recomendaciones");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbumes =>{
    //console.log(dataAlbumes);
    for(let i =0;i<5;i++){
        recomendaciones.innerHTML += `<article class="discoalbum"><a href="detallealbum.html?id=${dataAlbumes.data[i].id}"> <img src=${dataAlbumes.data[i].cover_big}> </a> <h2>${dataAlbumes.data[i].title}</h2> </article>`
    }    
})
.catch(error=>console.log(error))