// creo cada Evento
function createCard(eventoParaCard){
    console.log("EVENTOPARACARD");
    const contenedorOtraCard = `
    <div class="card">
    <img src="${eventoParaCard.image}" class="card-img-top" alt="${eventoParaCard.name}">
    <div class="card-body">
    <h5 class="card-title">${eventoParaCard.name}</h5>
    <p class="card-text">${eventoParaCard.description}</p>
    <div class="fila-inferior-card">
        <p>Price:<br> ${eventoParaCard.price}</p>
        <a href="./details.html?id=${eventoParaCard._id}" class="btn btn-primary">Saber más...</a>
    </div>
    </div>
    </div>`
    return contenedorOtraCard
}

// create checkbox|
// function createCheckbox(categoria){
    function createCheckbox(){

    console.log("CREATECHECKBOX","END");
    let htmlCategorias = ""
    for (let categoria of arrCategory){
        htmlCategorias += `<div class="col-6 col-md-4 col-xl-2 form-check">
        <input class="form-check-input" type="checkbox" value="${categoria}" id="input-${categoria}">
        <label class="form-check-label" for="input${categoria}">
            ${categoria}
        </label>
    </div>`
    }

}