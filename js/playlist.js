// Trayendo los datos del local storage
let canciones = localStorage.getItem('pepito')

// Ahora transformo los datos que vienen en string en un array
let arrayplaylist = JSON.parse(canciones)
console.log(arrayplaylist);
//3
let listaCanciones = document.querySelector('.listaCanciones')

// determinamos si hay o no alguna cancion en la playlist y que pasa
if( arrayplaylist == 0){
    listaCanciones.innerHTML = '<li> No tienes ninguna cancion en tu playlist </li>' // si no hay fotos le muestro esto
}else{ 
    for(let i =0; i < arrayplaylist.length; i++){                       // Si tiene fotos, las muestro como imagenes
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${arrayplaylist[i]}`) //si pongo eso apunta exactamente al id en el que estoy posicionado
        .then(respuesta =>{
            return respuesta.JSON()
        })
        .then(foto =>{         //el += se pone para que los objetos no se pisen, es decir, para que haga la impresion de la primera imagen, luego la segunda, luego la tercera, y asi sucesivamente
            listaCanciones.innerHTML += `<li>${foto.hits} <li/>`
        })
        .catch(error =>console.log(error))
    }
} 






//Trabajo Local Storage -- Gonchy
// capturamos elemento
let agregarQuitar = document.getElementById('agregarQuitar')

// creamos un array
let miplaylist = [];

// traemos los datos del local storage
let traercanciones = localStorage.getItem('pepito')
//console.log(traercanciones);
//En las proximas lineas dice basicamente lo sgte: si los datos que traigo de "traercanciones" no son nulos, eso quiere decir que hay datos, por lo tanto, pido que se los traiga en forma de un array
if(traercanciones != null){
    miplaylist = JSON.parse(traercanciones) //Estoy haciendo que dentro del array "miplaylist" el cual es un Array vacio, 
                                            //Ahora va a contener todos los datos en lo que seria el navegador a travez del local storage.
                                            // me los trae en formato string y lo convierto en un Array
}

//verificando si el id esta o no en el Array
if(miplaylist.includes(id)){
    agregarQuitar.innerText = 'Quitar de mi playlist'   //si en mi playlist ya esta la cancion, le digo que me cambie el titulo "anadir a favoritos" y que aparezca "quitar de favoritos"
}
// controlamos el evento click sobre el elemento capturado
console.log(agregarQuitar);
agregarQuitar.onclick = function(e){
    e.preventDefault()                        // si se hace click en el "agregar a favoritos" (el cual esta dentro de la clase agregarQuitar)
        console.log('estoy en agrgg');                                  // le pedimos que agregue el elemento a el array de miplaylist
    if(miplaylist.includes(id)){
        let posicionCancion = miplaylist.indexOf(id)
        miplaylist.splice(posicionCancion,1)
        agregarQuitar.innerText = 'Agregar a mi playlist'
    }else{
        miplaylist.push(id)
        agregarQuitar.innerText = 'Quitar de mi playlist'
    }
    //cargamos los datos al local storage aplicandole el json.stringify a mi array
    let cadenatexto = JSON.stringify(miplaylist)
    localStorage.setItem('pepito',cadenatexto)
    console.log(localStorage);
}