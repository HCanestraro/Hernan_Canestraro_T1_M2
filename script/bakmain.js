var allEvents = [];
var upcomingEvents = [];
var pastEvents = [];
var arrCategory = [];
var arrA = [];
var arrB = [];
//var arrFiltros = [];

console.log("BAKMAIN.JS");
function showda() {
    console.log("SHOWDA");
    let curDate = data.currentDate;
    for (let i = 0; i <= data.events.length - 1; i++) {
        allEvents.push(data.events[i]);
        if( data.events[i].date <= curDate) {
            pastEvents.push(data.events[i]);
        } else {
            upcomingEvents.push(data.events[i]);
        }
        arrA.push(data.events[i].name.toLowerCase());
        arrA.push(data.events[i].description.toLowerCase());
        category1=data.events[i].category.toLowerCase();
        if (arrCategory.indexOf(category1)===-1) {
            arrCategory.push(category1);
        }
    }
}
// Create Arrays
showda();

let fragmento1 = document.createDocumentFragment();
function crearCheckBoxes(array, containerCheckBoxes){
let i = 0;
array.forEach((arrCategory)=>{
  let div = document.createElement("div");
  div.className = "form-check"
  div.innerHTML += `<input class="form-check-input" type="checkbox" name="category" value="${categoria}" id="flexCheckDefault${i}">
                    <label class="form-check-label" for="flexCheckDefault${i}">${categoria}</label>`
  fragmento1.appendChild(div);
  i++;
})
containerCheckBoxes.appendChild(fragmento1);
}

function cheCreateCards(arrayCards, bid) {
    a = document.getElementById(bid);
    for (let i = 0; i <= arrayCards.length - 1; i++) {

    codeLines = `    
        <img src=${arrayCards.image} class="card-img-top" alt="Picture...">
        <div class="card-body">
        <div class="card">
        <h5 class="card-title">${arrayCards.name}</h5>
        <p class="card-text">${arrayCards.description}</p>
        </div>
        <div class="card-footer d-flex aling-items-center">
        <div class="col aling-items-center">
        <span class="justify-content-start">Price $ ${arrayCards.price}</span>
        </div>
        <div class="justify-content-end">
        <a href="./details.html"><button class="btn btn-primary justify-content-end">Ver más</button></a>
        </div>
        </div>
        </div>
        `
    }
}



// ------------------- EVENTS

// onclick
// function mensaje(){
//     console.log("mensaje");
// }

// function busqueda(barr1)
// {
//     console.log("Busqueda");
//     let ba1 = getElementById("btn-search");
//     btn-search.addEventListener("click",mensaje());
//     console.log(ba1);
// }

// const formulario = document.forms[0];
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault()
//     mensaje();
// })

// const menu1 = getElementById("op");
// menu1.addEventListener("click",e=> {
//     console.log(e);
// })