window.addEventListener ('load', function () {











        let url= new URL ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')

    let objetoId = new URLSearchParams(window.location.search);
let id =  objetoId.get('id');
objetoId.has('id')
   console.log(id);
   console.log('probando link'); 








// const apirap= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/116/artists";
// console.log(apirap);

// declaro variables para las clases a las que me estare refiriendo
let artistas=document.querySelector(".artistas");
let nombreDelGenero= document.querySelector(".nombreDelGenero");

// Introduzco el nombre del genero pertinente a la lista de artistas 
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`)
    .then(respuesta=>{
        return respuesta.json()
    })
    .then(dataNombreGenero=>{
        console.log(dataNombreGenero)
        nombreDelGenero.innerHTML=` Artistas de: ${dataNombreGenero.name}`
    })






// 
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`)

.then(respuesta =>{
    return respuesta.json()
})
.then(dataRap =>{
    console.log(dataRap)
    for(let i =0;i<24;i++){
    
        artistas.innerHTML += `<article class="artista">
        <a href="detalleartista.html?id=${dataRap.data[i].id}">
         <img src=${dataRap.data[i].picture_big}>
          </a>
          <h3>${dataRap.data[i].name}</h3>
           </article>`
       }    
})
.catch(error=>console.log(error))
















   // let rap = document.querySelector('section');



// const apirap= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/116/artists";
// console.log(apirap);


// let artistas=document.querySelector(".artistas");
// fetch(apirap)
// .then(respuesta =>{
//     return respuesta.json()
// })
// .then(dataRap =>{
//     //console.log(dataRap);
//     for(let i =0;i<24;i++){
//         artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?id=${dataRap.data[i].id}"> <img src=${dataRap.data[i].picture_big}> </a> <h2>${dataRap.data[i].name}</h2> </article>`
//     }    
// })
// .catch(error=>console.log(error))























// let rap = document.querySelector('section');



// const apirap= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/116/artists";
// console.log(apirap);


// let artistas=document.querySelector(".artistas");
// fetch(apirap)
// .then(respuesta =>{
//     return respuesta.json()
// })
// .then(dataRap =>{
//     //console.log(dataRap);
//     for(let i =0;i<24;i++){
//         artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?id=${dataRap.data[i].id}"> <img src=${dataRap.data[i].picture_big}> </a> <h2>${dataRap.data[i].name}</h2> </article>`
//     }    
// })
// .catch(error=>console.log(error))



})

