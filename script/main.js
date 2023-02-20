var paEvents = [];
var upEvents = [];


function showda()
{
    let curDate = data.currentDate;

    for(let i=0;i<=data.events.length;i++) {
        console.log(data.events[i]);
        if(data.events[i].date <= curDate) {
            console.log("es menor");
            paEvents.push(data.events[i]);
        } else {
            console.log("es mayor");
            upEvents.push(data.events[i]);

        }
    }
}