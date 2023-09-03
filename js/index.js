document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {

    const NASA_API = 'e2dSmG18fNYeJVk8PJXBpfDa6vF2HYoHgP27c7qA';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`;

    fetch(url)
    .then(response => response.json())
    .then(result => mostrarDatos(result))
};

function mostrarDatos({ date, explanation, media_type, title, url}) {

    const titleHTML = document.getElementById('titleHTML')
    titleHTML.innerHTML = title; 
    const dateHTML = document.getElementById('dateHTML')
    dateHTML.innerHTML = date;
    const descriptionHTML = document.getElementById('description')
    descriptionHTML.innerHTML = explanation;
    const multimediaHTML = document.getElementById('multimedia')
    if(media_type == 'video') {
        multimediaHTML.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`
    }else{
        multimediaHTML.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
    }
};