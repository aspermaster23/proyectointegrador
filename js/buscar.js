let busqueda = new URLSearchParams(location.search) //location.search  me trae la info de la query string - 
                                                   //url search params la pasa de formato string a objeto

let buscar = busqueda.get('buscar') // enlazo la propiedad declarada anteriormente con un .get (enlaza esta propiedad con una función 
                                    //que será llamada cuando la propiedad es buscada.)
let resultados = document.querySelector('.resultados') //caputuro la clase de una seccion de resultadosbusqueda.html
let contenido = ''                                      // declaro una variable vacia para despues agregarle lo que serian los resultados de la busqueda
let titulo = document.querySelector('.titulogonchy')   // declaro una variable al titulo de resultadosbusqueda.html

titulo.innerHTML += buscar              // llamo a la variable que declaramos en la linea anterior (la cual contiene a la clase '.titulogonchy' y
                                        // con la propiedad '.innerhtml' le modifico su estructura 
   //el += me permite que no se me borre el titulo y que lo que escribio el usuario en el campo "buscar" se agregue al titulo

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(respuesta =>{
   return respuesta.json()       // en esta promesa transformo los datos en objeto literal con el .json
})
.then(dataBusqueda =>{ // llamo al array y le indico que quiero que me traiga todo lo que contenga el array y que me lo traiga de uno en uno
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