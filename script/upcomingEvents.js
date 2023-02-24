var upEvents = [];


function showda()
{
    let curDate = data.currentDate;
    for(let i=0;i<=data.events.length-1;i++) {
        console.log(data.events[i]);
        console.log(i);
        if(data.events[i].date >= curDate) {
            console.log("es mayor");
            upEvents.push(data.events[i]);
        } 
    }
}

function showUp() {
    let arrLen = upEvents.length;
    let a;
    console.log("shoeUp.arrLen:",arrLen);
    a=document.getElementById('divCards');
    for(let i=0;i<arrLen;i++) {
        // console.log("showup:",upEvents[i]);
        // a=document.getElementById(`card${i}`);
        document.open();
        document.write('<div class="card">');
        // console.log(`<img src=${upEvents[i].image} class="card-img-top" alt="Picture...">`);
		document.write(`<img src=${upEvents[i].image} class="card-img-top" alt="Picture...">`);
		document.write('<div class="card-body">');
		document.write(`<h5 class="card-title">${upEvents[i].name}</h5>`);
		document.write(`<p class="card-text">${upEvents[i].description}</p>`);
		document.write('</div>');
		document.write('<div class="card-footer d-flex aling-items-center">');
		document.write('<div class="col aling-items-center">');
		document.write(`<span class="justify-content-start">Price $ ${upEvents[i].price}</span>`);
		document.write('</div>');
		document.write('<div class="justify-content-end">');
		document.write('<a href="./details.html"><button class="btn btn-primary justify-content-end">Ver más</button></a>');
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
    }
}

showda();
showUp();

