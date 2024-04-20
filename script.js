

var API_URL= 'https://official-joke-api.appspot.com/random_joke';

var nuevoChisteBTn= document.getElementById('nuevoChiste');
var chisteDiv= document.getElementById('chiste');

nuevoChisteBTn.addEventListener('click', obtenerChiste);

function obtenerChiste(){
    fetch(API_URL)
    .then(response => response.json())
    .then(data =>{
        var chiste= data.setup + '<br>' + data.punchline;
        mostrarChiste(chiste);
    })
    .catch( error => console.error('Error al obtener el chiste:', error));
}

function mostrarChiste(chiste){
    chisteDiv.innerHTML= chiste;
}

obtenerChiste();

