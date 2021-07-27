document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('link')){
    
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
    .then(response =>{ 
        return response.text()
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.grid-structure');
    resultado.innerHTML = response;
}