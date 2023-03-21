/* CHE FUNCTIONS */
//var arrFiltros = [];
/* var allEvents = [];
var upcomingEvents = [];
var pastEvents = [];
var arrCategory = [];
var arrA = [];
var arrB = [];
var data = [];
var curDate = "";
var dataLen = 0; */


const queryString = location.search
console.log("DETAILS.JS queryString :" + queryString);
const params = new URLSearchParams(queryString)
console.log("DETAILS.JS params : " + params);
const id = params.get("id")
console.log("EL _id : " + id);
// const item = details.find(event => event._id == id)
// const item = details.find(parseInt(_id) == id)

let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"
console.log("API ="+urlAPI);
async function getEvents()
{
	try{
		let respuesta = await fetch(urlAPI)
		let datos = await respuesta.json()
		data=datos;
		// allEvents=data.events;
		dataLen=data.events.length;
		// curDate=data.currentDate;
		for (let i = 0; i <= dataLen - 1; i++) {
			if( data.events[i]._id == id) {
				item=data.events[i];
				crearCard();
				break;
			}
		}
	} catch {
		alert("Ocurrio un error al leer la API");
	}
}


getEvents();
// showda();
/* function showID(id,arr) {

	x=id;
	console.log("SHOWID")
	if(!typeof arr[x].assistance ) {
		console.log("assistance es tipo  undefined")
		allEvents[x].assistance=0;
	} 
	console.log("assistance",allEvents[x].assistance);
	console.log("capacity",allEvents[x].capacity);
	console.log("category",allEvents[x].category);
	console.log("date",allEvents[x].date);
	console.log("description",allEvents[x].description);
	if(!typeof arr[x].estimate ) {
		console.log("estimate es tipo  undefined")
		allEvents[x].estimate=0;
	}
	console.log("image",allEvents[x].image);
	console.log("name",allEvents[x].name);
	console.log("place",allEvents[x].place);
	console.log("price",allEvents[x].price);
	console.log("id",allEvents[x]._id);
	
}
 */
/* details.forEach(element => {
	console.log(element);
}); */
function crearCard() {
console.log("ITEM",item);
const div = document.querySelector(".contenido_details")
div.innerHTML = `
<div class="d-flex container-fluid justify-content-center align-items-center m-5 p-2 box1 shadow> 
<div class="card_details d-flex container-fluid justify-content-center align-items-center text-center align-self-center shadow">
  	<img class="img_target" src=" ${item.image} " alt="Picture...." width="600px" height="500px"/>
        <div class="card-body">
          	<h3 class="card-title1">${item.name} </h5>
            <h5 class="card-subtitle1">${item.description}</h5>
			<p class="card-text m-1"><b>Category : </b>${item.category}</p>
			<p class="card-text m-1"><b>Capacity : </b>${item.capacity}</p>
			<p class="card-text m-1"><b>Assistance : </b>${item.assistance}</p>
			<p class="card-text m-1"><b>Place : </b>${item.place}</p>
			<p class="card-text m-1"><b>Price : </b>${item.price}</p>
			<input class="m-3 bg-warning" type="button" value="Back..." name="Back..." onclick="history.back()" style="backgroundColor: yellow; border-style=15%; font-size: 20px;" />
		</div>
</div>
</div>`
}