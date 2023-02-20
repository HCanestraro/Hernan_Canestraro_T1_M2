var paEvents = [];
var upEvents = [];


function showda()
{
    let curDate = data.currentDate;

    for(let i=0;i<=data.events.length-1;i++) {
        console.log(data.events[i]);
        console.log(i);
        if(data.events[i].date <= curDate) {
            console.log("es menor");
            paEvents.push(data.events[i]);
        } else {
            console.log("es mayor");
            upEvents.push(data.events[i]);

        }
    }
}

function showPa() {
    for(let i=0;i<=paEvents.length;i++) {
        console.log("showpa:",paEvents[i]);
    }
}

function showUp() {
    for(let i=0;i<=upEvents.length;i++) {
        console.log("showup:",upEvents[i]);
    }
}

function crearUp() {
// for (let v in upEvents) {}
// <img src=${upEvents[i].image} class
// upEvents[i].name
// upEvents[i].date
// upEvents[i].description
// upEvents[i].category
// upEvents[i].place
// upEvents[i].capacity
// upEvents[i].assistance
// upEvents[i].price
}

function crearPa() {
    // for paEvents
    // paEvents[i].image
    // paEvents[i].name
    // paEvents[i].date
    // paEvents[i].description
    // paEvents[i].category
    // paEvents[i].place
    // paEvents[i].capacity
    // paEvents[i].assistance
    // paEvents[i].price
    }
    