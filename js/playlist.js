// Trayendo los datos del local storage
let canciones = localStorage.getItem('pepito')

// Ahora transformo los datos que vienen en string en un array
let arrayplaylist = JSON.parse(canciones)
//console.log(arrayplaylist);
//3
let listaCanciones = document.querySelector('.listaCanciones')

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
} 