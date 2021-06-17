//----------------------COSAS GENERALES-----------------------

//----------------------------VALEN---------------------------------
//Listado Canciones
let canciones=document.querySelector(".canciones");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
.then(response =>{
    return response.json()
})
.then(dataCancion =>{
    //console.log(dataCancion);
    for(let i =0;i<5;i++){
        canciones.innerHTML += `<article class="cancion"><a href="detallecancion.html?${dataCancion.id}"> <img src=${dataCancion.data[i].album.cover_big}> </a> <h2>${dataCancion.data[i].title}</h2> </article>`
    }    
})
.catch(error=>console.log(error))

//Listado albumes
let albumes=document.querySelector(".discosalbumes");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
.then(respuesta =>{
    return respuesta.json()
})
.then(dataAlbum =>{
    //console.log(dataAlbum);
    for(let i =0;i<5;i++){
        albumes.innerHTML += `<article class="discoalbum"><a href="detallealbum.html?${dataAlbum.id}"> <img src=${dataAlbum.data[i].cover_big}> </a> <h2>${dataAlbum.data[i].title}</h2> </article>`
    }    
})
.catch(error=>console.log(error))

//Listado artistas
let artistas=document.querySelector(".artistas");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
.then(respuesta =>{
    return respuesta.json()
})
.then(dataArtista =>{
    //console.log(dataArtista);
    for(let i =0;i<5;i++){
        artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?${dataArtista.id}"> <img src=${dataArtista.data[i].picture_big}> </a> <h2>${dataArtista.data[i].name}</h2> </article>`
    }    
})
.catch(error=>console.log(error))
//----------------------------GERO--------------------------------

//-----------------------------GONZA----------------------------------
let busqueda = new URLSearchParams(location.search)
let buscar = busqueda.get('buscar');
