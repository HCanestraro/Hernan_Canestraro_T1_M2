var statEvents = [];

function showda()
{
    let curDate = data.currentDate;
    for(let i=0;i<=data.events.length-1;i++) {
            statEvents.push(data.events[i]);
        } 
}

showda();

function showStats()
{
    a=document.getElementById('statsTable');
    for(let i=0;i<=data.events.length-1;i++) {
        
            document.open();
            document.write('<div class="card">');
            // console.log(`<img src=${homeEvents[i].image} class="card-img-top" alt="Picture...">`);
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
            document.write('<a href="./details.html"><button class="btn btn-primary justify-content-end">Ver más</button></a>');
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
        }
    }
    
