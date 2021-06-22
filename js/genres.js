window.addEventListener ('load', function () {
   console.log('probando link'); 
let rap = document.querySelector('section');



const apirap= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/116/artists";
console.log(apirap);


let artistas=document.querySelector(".artistas");
fetch(apirap)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataRap =>{
    //console.log(dataRap);
    for(let i =0;i<20;i++){
        artistas.innerHTML += `<article class="artista"><a href="detalleartista.html?id=${dataRap.data[i].id}"> <img src=${dataRap.data[i].picture_big}> </a> <h2>${dataRap.data[i].name}</h2> </article>`
    }    
})
.catch(error=>console.log(error))



























// // trayendo el genero de rap opcion 2
// fetch(apirap)
//     .then(response =>{
//         return response.json()
//     })
//     .then(dataRap=> imprimirHTML(dataRap.data))
//     .catch(error=>console.log(error))

//     function imprimirHTML(dataRap){
//         dataRap.forEach(usuario=>{  
//             console.log(usuario);
//             const li = document.createElement('li');
//             const{name, picture_small, id } =
//             usuario;

//             li.innerHTML = `<article class="discoalbum">
//             <a href="detalleartista.html?id=${id}">
//              <img src=${picture_small}> </a> 
//              <h2>${name}</h2> 
//              </article>
//             `;
//             document.querySelector('section').appendChild(li);
        
//         });
//     }


// // trayendo el genero de rap opcion 2
// fetch(apirap)
//     .then(response =>{
//         return response.json()
//     })
//     .then(dataRap=> imprimirHTML(dataRap.data))
//     .catch(error=>console.log(error))

//     function imprimirHTML(dataRap){
//         dataRap.forEach(usuario=>{  
//             console.log(usuario);
//             const li = document.createElement('li');
//             const{name, picture_small, id } =
//             usuario;

//             li.innerHTML = `
//             <article class="discoalbum">
//             <a href="detalleartista.html?id=${id}" target="_blank">
//              Artista: ${name}
//               <img src= "${picture_small}">
//              </a>
//              </article>
//             `;
//             document.querySelector('section').appendChild(li);
        
//         });
//     }


// // trayendo el genero de rap opcion 1 
// fetch(apirap)
//     .then(response =>{
//         return response.json()
//     })
//     .then(dataRap=>{
//     console.log(dataRap);
//     // let artistasDeRap= [ dataRap.data];
//     // console.log(artistasDeRap);
//     for(let i =0;i<10;i++){     
//     rap.innerHTML+= ` <ul class="listas">
//                         <li  class="canciones-en-lista" > <a href="detalleartista.html?id=${dataRap.data[i].id}" target="_blank"> -${dataRap.data[i].name} <></img src: ${dataRap.data[i].picture_small}a> </li > 
//                     </ul> </a>`
//     }
//     })
//     .catch(error=>console.log(error))



// rock.addEventListener('click', function () {innerHTML= apirap}

//     this.innerHTML=data.results
})

