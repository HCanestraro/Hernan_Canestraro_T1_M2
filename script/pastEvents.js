var paEvents = [];



function showda()
{
    let curDate = data.currentDate;

    for(let i=0;i<=data.events.length-1;i++) {
        console.log(data.events[i]);
        console.log(i);
        if(data.events[i].date <= curDate) {
            console.log("es menor");
            paEvents.push(data.events[i]);
        }
    }
}

function showPa() {
    let aarrLen = paEvents.length;
    let aa;
    console.log("showPa.arrLen:",aarrLen);
    aa=document.getElementById('divPastCards');
    for(let i=0;i<aarrLen;i++) {
        // console.log("showup:",paEvents[i]);
        // a=document.getElementById(`card${i}`);
        document.open();
        document.write('<div class="card">');
        // console.log(`<img src=${paEvents[i].image} class="card-img-top" alt="Picture...">`);
		document.write(`<img src=${paEvents[i].image} class="card-img-top" alt="Picture...">`);
		document.write('<div class="card-body">');
		document.write(`<h5 class="card-title">${paEvents[i].name}</h5>`);
		document.write(`<p class="card-text">${paEvents[i].description}</p>`);
		document.write('</div>');
		document.write('<div class="card-footer d-flex aling-items-center">');
		document.write('<div class="col aling-items-center">');
		document.write(`<span class="justify-content-start">Price $ ${paEvents[i].price}</span>`);
		document.write('</div>');
		document.write('<div class="justify-content-end">');
		document.write(`<a href="./details.html?${paEvents[i]._id}"><button class="btn btn-primary justify-content-end">Ver más</button></a>`);
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
    }
}

showda();
showPa();
