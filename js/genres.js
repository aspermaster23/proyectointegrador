// Creo un evento para que el navegador complete la carga antes de ejcutar las funciones
window.addEventListener ('load', function () {



console.log(location);
    
let objetoId = new URLSearchParams(window.location.search);
// Guardo el valor en una variable
const id =  objetoId.get('id');

   console.log(id); // lo paso por consola para chequear hhaberlo traído con exito
//    console.log('probando link'); 



// declaro variables para las clases a las que me estare refiriendo
let artistas=document.querySelector(".artistas");
let nombreDelGenero= document.querySelector(".nombreDelGenero");

// Estructura de Fetch para traer los datos del nombre correspondiente al genero 
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
    .then(respuesta=>{
        console.log(respuesta);// ← Paso la respuesta por consola para corroborar su estado
        return respuesta.json()
        
    })
    .then(dataNombreGenero=>{
        console.log(dataNombreGenero)// ← Paso la respuesta por consola para corroborar su estado
        nombreDelGenero.innerHTML=` Artistas de: ${dataNombreGenero.name}` // ←← agrego el nombre del genero en el subtitulo
    })


// Estructura de fetch para traer los datos de los artistas
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)

.then(respuesta =>{
    console.log(respuesta);
    return respuesta.json()
    
})
.then(dataRap =>{
    console.log(dataRap)
    for(let i =0;i<24;i++){
            // Agrego la info de los artistas en la clase artista (del section)
        artistas.innerHTML += `<article class="generoscss">
        <a href="detalleartista.html?id=${dataRap.data[i].id}">
         <img src=${dataRap.data[i].picture_big}>
          </a>
          <h3>${dataRap.data[i].name}</h3>
           </article>` 
       }    
})
.catch(error=>console.log(error))

})

