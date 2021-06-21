window.addEventListener ('load', function () {
const generos= document.querySelector('section')
const apiGeneros= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"
console.log(apiGeneros);
fetch(apiGeneros)
 .then(response=> response.json())
 .then(dataGeneros => console.log(dataGeneros))


})