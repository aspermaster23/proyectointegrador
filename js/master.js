//----------------------COSAS GENERALES-----------------------

//----------------------------VALEN---------------------------------

//----------------------------GERO--------------------------------

//-----------------------------GONZA----------------------------------
//resultados de busqueda

//aqui llamamos a la API 
fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
//.then(objbuscado =>{
//    return objbuscado.json()
//})
//.then()
let buscar = busqueda.get('buscar'); 
let busqueda = new URLSearchParams(location.search);
console.log(buscar);

//capturamos elemento
let busqueda = document.querySelector('.busqueda');
let palabraABuscar = location.search;

busqueda.innerHTML = objetoBuscar.get('buscar')






// pagina playlist
