var homeEvents = [];
function showda()
{

var arrCategory = [];
var arrA = [];
var arrB = [];
//var arrFiltros = [];
arrCategory.push(data.events[0].category.toLowerCase());
// console.log("Category:",arrCategory[0]);
    let curDate = data.currentDate;
    let category1 = "";
    for(let i=0;i<=data.events.length-1;i++) {
            homeEvents.push(data.events[i]);
            arrA.push(data.events[i].name.toLowerCase());
            arrA.push(data.events[i].description.toLowerCase());
            category1=data.events[i].category.toLowerCase();
            if (arrCategory.indexOf(category1)===-1) {
              //  console.log("Busca no repetidos");
                arrCategory.push(category1);
             //   console.log("Agrega push:", category1);
            }
        } 
       // console.log("Total de elementos:",arrCategory.length);
}

function showHome()
{
    a=document.getElementById('homeCards');
    for(let i=0;i<=data.events.length-1;i++) {
            document.open();
            document.write('<div class="card">');
            document.write(`<img src=${homeEvents[i].image} class="card-img-top" alt="Picture...">`);
            document.write('<div class="card-body">');
            document.write(`<h5 class="card-title">${homeEvents[i].name}</h5>`);
            document.write(`<p class="card-text">${homeEvents[i].description}</p>`);
            document.write('</div>');
            document.write('<div class="card-footer d-flex aling-items-center">');
            document.write('<div class="col aling-items-center">');
            document.write(`<span class="justify-content-start">Price $ ${homeEvents[i].price}</span>`);
            document.write('</div>');
            document.write('<div class="justify-content-end">');
            document.write(`<a href="./details.html?${homeEvents[i]._id}"><button class="btn btn-primary justify-content-end">Ver más</button></a>`);
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
        }
    }
    
function showCards(arrayCards)
{
    hEvents = arrayCards;
    console.log("arrayCards",hEvents);
    a=document.getElementById('homeCards');
    for(let i=0;i<=hEvents.length-1;i++) {
            document.open();
            document.write('<div class="card">');
            document.write(`<img src=${hEvents[i].image} class="card-img-top" alt="Picture...">`);
            document.write('<div class="card-body">');
            document.write(`<h5 class="card-title">${hEvents[i].name}</h5>`);
            document.write(`<p class="card-text">${hEvents[i].description}</p>`);
            document.write('</div>');
            document.write('<div class="card-footer d-flex aling-items-center">');
            document.write('<div class="col aling-items-center">');
            document.write(`<span class="justify-content-start">Price $ ${hEvents[i].price}</span>`);
            document.write('</div>');
            document.write('<div class="justify-content-end">');
            document.write(`<a href="./details.html?${hEvents[i]._id}"><button class="btn btn-primary justify-content-end">Ver más</button></a>`);
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
        }
    }
   /*  let m;
    m.addEventListener("click",mensaje()); */
 

 /*    showda();
    showHome(); */

// ------------------- EVENTS

// onclick
/* function mensaje(){
    alert("mensaje");
} */

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