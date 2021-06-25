let busqueda = new URLSearchParams(location.search)   
let buscar = busqueda.get('buscar') 
let resultados = document.querySelector('.resultados') 
let contenido = ''                                      
let titulo = document.querySelector('.titulogonchy')  
titulo.innerHTML += buscar         
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
   return respuesta.json()       // en esta promesa transformo los datos en objeto literal con el .json
})
.then(dataBusqueda =>{     // llamo al array y le indico que quiero que me traiga todo lo que contenga el array y que me lo traiga de uno en uno
   for(let i=0; i < dataBusqueda.data.length; i++){      

      //uso la variable anteriormente declarada como contenido para que contenga los datos que quiero que me traiga el array
       contenido += `<article class="contenidoResultados"> 
                        <p class="titulosCanciones"><a href="detallecancion.html?id=${dataBusqueda.data[i].id}"> ${dataBusqueda.data[i].title} </a></p>
                    </article>`
   }
   resultados.innerHTML += contenido
   if(dataBusqueda.data.length == 0){
      alert('La busqueda no trajo resultados')
   }
})
.catch(error =>{
   console.log(error);
})