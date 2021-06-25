// Creo un evento para que el navegador complete la carga antes de ejcutar las funciones.
window.addEventListener ('load', function () {

// Guardo la "querystring" como objeto.
let objetoId = new URLSearchParams(window.location.search);
// Guardo el valor en una variable.
const id =  objetoId.get('id');

let artistas=document.querySelector(".artistas");
let nombreDelGenero= document.querySelector(".nombreDelGenero");

// Estructura de Fetch para traer los datos del nombre correspondiente al genero.
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
    .then(respuesta=>{
        return respuesta.json()  
    })
    .then(dataNombreGenero=>{
        nombreDelGenero.innerHTML=` Artistas de: ${dataNombreGenero.name}` 
    })

// Estructura de fetch para traer los datos de los artistas
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)
.then(respuesta =>{
    return respuesta.json()  
})
.then(dataDelGenero =>{
    for(let i =0;i<24;i++){
        artistas.innerHTML += `<article class="generoscss">
        <a href="detalleartista.html?id=${dataDelGenero.data[i].id}">
         <img src=${dataDelGenero.data[i].picture_big}>
          </a>
          <h3>${dataDelGenero.data[i].name}</h3>
           </article>` 
       }    
})
.catch(error=>console.log(error))
})

