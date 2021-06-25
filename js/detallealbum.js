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
    infodetallesalbum.innerHTML += `<article class="infodetalles"> <h2>Album: ${dataDetallesa.title}</h2></article> <article class="infodetalles"> <a href="detalleartista.html?id=${dataDetallesa.artist.id}"> <h2>Artista: ${dataDetallesa.artist.name}</h2> </a> </article> <article class="infodetalles"> <h2>Genero: ${dataDetallesa.genres.data[0].name}</h2> </article> <article class="infodetalles"> <h2>Fecha de Publicacion: ${dataDetallesa.release_date}</h2> </article> `

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
        infodetallesalbum.innerHTML += `<li class="listadocanciones"> <a href="detallecancion.html?id=${dataDetallesa.tracks.data[i].id}"> <h2>${dataDetallesa.tracks.data[i].title}</h2> </a> </li>` 
    }

})
.catch(error => console.log(error));

//Trabjando con el localStorage
//1.- Capturar el elemento
let agregarQuitar = document.getElementById('agregarQuitar');
console.log(agregarQuitar);
//2.- Crear un array
let misFotos = [];

//3.- Traer los datos del localStorage
let traerFotos = localStorage.getItem('pepito');

//console.log(traerFotos);
if(traerFotos != null){
    misFotos = JSON.parse(traerFotos);   
}

//4.- Verificar si el ( id ) esta o no en el array - Condición
if(misFotos.includes(id)){
    agregarQuitar.innerHTML = 'Quitar de favoritos';      
}

//5.- Controlar el evento sobre el elemento capturado
agregarQuitar.addEventListener('click', function(e){
    e.preventDefault();
    console.log('hola');
    //Debo programar agregar el id al array de favortitos para finalmente colocarlo dentro del localStorage
    if(misFotos.includes(id)){
        let posicionFoto = misFotos.indexOf(id);
        misFotos.splice(posicionFoto,1);
        agregarQuitar.innerHTML = 'Agregar a Favoritos';
    }else{
        misFotos.push(id);
        agregarQuitar.innerHTML = 'Quitar de Favoritos'
    }
    //cargar los datos al localStorage
    let cadenaTextoFoto = JSON.stringify(misFotos);
    localStorage.setItem('pepito',cadenaTextoFoto)
    console.log(localStorage);
})


