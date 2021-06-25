//----------------------------VALEN---------------------------------
//Listado Canciones
let canciones=document.querySelector(".canciones");
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
.then(response =>{
    return response.json()
})
.then(dataCancion =>{
  for(let i =0;i<5;i++){
      canciones.innerHTML += `<article class="cancion"><a href="detallecancion.html?id=${dataCancion.data[i].id}"> <img src=${dataCancion.data[i].album.cover_big}> </a> <h2>${dataCancion.data[i].title}</h2> </article>`
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
    for(let i =0;i<5;i++){
        albumes.innerHTML += `<article class="discoalbum"><a href="detallealbum.html?id=${dataAlbum.data[i].id}"> <img src=${dataAlbum.data[i].cover_big}> </a> <h2>${dataAlbum.data[i].title}</h2> </article>`
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
    for(let i =0;i<5;i++){
        artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?id=${dataArtista.data[i].id}"> <img src=${dataArtista.data[i].picture_big}> </a> <h2>${dataArtista.data[i].name}</h2> </article>`
    }    
})
.catch(error=>console.log(error))
//-----------------------------GONZA----------------------------------

//validando formulario de busqueda 

let form = document.querySelector('form')    //capturo el formulario de busqueda con una variable 
let buscar = document.querySelector('[name=buscar]')   // capturo el campo name del formulario en el html

form.addEventListener('submit', function(e){    // creo un evento
                                                // las cuales son: que no escriba nada: salte una alerta que diga que ...
                                                // si el largo, es decir el length de lo que se manda a buscar es menor a 3 digitos, que salte otra alerta que diga ..
                                                // Por ultimo, si lo que escribio el usuario  cumple esos requisitos, que se haga la funcion submit.

    e.preventDefault() //cancela el evento de la etiqueta - es decir - evita que la etiqueta haga lo que hace por defecto
    if(buscar.value === ''){                            
        alert('El buscador no puede estar vacio')
    }else if (buscar.value.length < 3){
        alert('El termino buscado debe tener al menos 3 caracteres')

    }else {
        form.submit()
    }
})