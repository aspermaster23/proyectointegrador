window.addEventListener ('load', function () {
    let searchid = new URLSearchParams (location.search);
    let codigo= searchid.get('id');
    console.log(('id: '+ codigo));;
const generos= document.querySelector('section')
//  endpoint de generos (deezer)
const apiGeneros= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"
console.log(apiGeneros);
fetch(apiGeneros)
 .then(response=> response.json())
 .then(dataGeneros => console.log(dataGeneros))


 let Generos=document.querySelector(".generos");
fetch(apiGeneros)
.then(respuesta =>{
    return respuesta.json()
})
.then(dataGeneros =>{  
    //console.log(dataGeneros);
    for(let i =0;i<24;i++){
        generos.innerHTML +=`<article class="generoscss"><a href="detalle-generos.html?id=${dataGeneros.data[i].id}"> <img src=${dataGeneros.data[i].picture_big}> </a> <h2>${dataGeneros.data[i].name}</h2> </article>`
    }    
})
.catch(error=>console.log(error))
})

//<article class="artista"><a href="detalleartista.html?id=${dataRap.data[i].id}"> <img src=${dataRap.data[i].picture_big}> </a> <h2>${dataRap.data[i].name}</h2> </article>





// `<article class="artista"><a href="detalleartista.html?id=${dataGeneros.data[i].id}"> <img src=${dataGeneros.data[i].picture_big}> </a> <h2>${dataGeneros.data[i].name}</h2> </article>`






