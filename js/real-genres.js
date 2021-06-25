// ↓Creo un evento para que el navegador complete la carga antes de ejcutar las funciones ↓
window.addEventListener ('load', function () {
    
let generos= document.querySelector(".artistas")
//  Guardo el endpoint de generos (deezer) en una variable
const apiGeneros= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"

// estructura  fetch
fetch(apiGeneros)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataGeneros =>{  
    for(let  i =1;i<25;i++){
        generos.innerHTML +=`<article class="generoscss">
        <a href="detalle-generos.html?id=${dataGeneros.data[i].id}">  
        <img src=${dataGeneros.data[i].picture_big}>
         </a>
         <h2>${dataGeneros.data[i].name}</h2> 
         </article>`
    }    
})
.catch(error=>console.log(error))

})












