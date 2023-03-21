/* CHE FUNCTIONS */
var allEvents = [];
var upcomingEvents = [];
var pastEvents = [];
var arrCategory = [];
var arrA = [];
var arrB = [];
var data = [];
var curDate = "";
var dataLen = 0;
var category1 = "";
var elementos = [];

let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"
console.log("API =" + urlAPI);
async function getEvents() {
	try {
		let i = 0;
		let respuesta = await fetch(urlAPI)
		let datos = await respuesta.json()
		data = datos;
		allEvents = data.events;
		dataLen = data.events.length;
		curDate = data.currentDate;
		for (let i = 0; i <= dataLen - 1; i++) {
			if (data.events[i].date <= curDate) {
				pastEvents.push(data.events[i]);
			} else {
				upcomingEvents.push(data.events[i]);
			}
			arrA.push(data.events[i].description.toLowerCase());
			category1 = data.events[i].category.toLowerCase();
			arrA.push(data.events[i].name.toLowerCase());
			if (arrCategory.indexOf(category1) === -1) {
				arrCategory.push(category1);
			}
		}
		chePrint([data, dataLen, allEvents, curDate, pastEvents, upcomingEvents,arrCategory
		]);
		crearCheckBoxes(arrCategory, containerCheckBoxes);
		crearCards(allEvents, containerCard);
		let checkBoxes = document.querySelectorAll('input[name="category"]')
		let datos1 = []
		checkBoxes.forEach((checkbox) => {
			checkbox.addEventListener('change', () => {
				let elementos = []
				let listaChecked = document.querySelectorAll('input[name="category"]:checked')
				listaChecked.forEach((item) => {
					elementos.push(item.defaultValue)
				})
				if (elementos.length == 0) {
					crearCards([], containerCard);
					crearCards(allEvents, containerCard);
				}
				else {
					crearCards(filtroArray(allEvents, elementos), containerCard);
					allEvents.forEach((evento) => {
						elementos.forEach((categoria) => {
							if (evento.category == categoria) {
								// dataFinal.push(evento)
								datos1.push(evento);
								console.log(categoria);
							}
						})
					})
					datos1 = filtroArray(allEvents, elementos)
					crearCards(datos1, containerCard);
					crearCards(filtroArray(data.events,elementos), containerCard);
				}
			})
		})

		let fragmento2 = document.createDocumentFragment();
		function mensaje(containerCard) {
			let div = document.createElement("div");
			div.className = "no_hay_un_porongo"
			div.innerHTML += `<h1>Nada que ver lo que estas buscando</h1>`
			fragmento2.appendChild(div);
			containerCard.appendChild(fragmento2);
		}
		let buscador = document.querySelector('input[placeholder="Search"]')
		buscador.addEventListener('keyup', () => {
			let datafiltrada = [];
			let elementos = [];
			let listaChecked = [];
			listaChecked = document.querySelectorAll('input[name="category"]:checked')
			listaChecked.forEach((item) => {
				elementos.push(item.defaultValue)
			})
			datos1 = filtroArray(allEvents, elementos)
			datos1.forEach(element => {
				if (element.name.toLowerCase().includes(buscador.value.toLowerCase())) {
					datafiltrada.push(element);
				}
			})
			if (datafiltrada.length == 0) {
				crearCards([], containerCard);
				mensaje(containerCard)
			} else {
				crearCards([], containerCard);
				crearCards(datafiltrada, containerCard);
			}
		});
	} catch {
		alert("Ocurrio un error al leer la API");
	}
}

getEvents();
let fragmento = document.createDocumentFragment();
function crearCards(array, containerCard) {
	containerCard.innerHTML = ''
	array.forEach((evento) => {
		let div = document.createElement("div");
		div.className = "card"
		div.innerHTML += `
							<img class="card-img-top ad" src=${evento.image}" alt="Picture..." >
                        	<div class="card-body">
                          		<h5 class="card-title">${evento.name}</h5>
                          		<p class="card-text">${evento.description}</p>
							</div>
                        	<div class="card-footer d-flex align-items-center">
                           			<p class="justify-content-center align-items-center text-small">Price: $ ${evento.price}</p>
                           			<a class="btn btn-primary btn-small" href="./../details.html?id=${evento._id}">Saber más...</a>
                        	</div>                    
                        </div>`
		fragmento.appendChild(div);
	})
	containerCard.appendChild(fragmento);
}

// Mi array de showda() con todos los eventos
crearCards(allEvents, containerCard);

function createCategories(array) {
	let items = [];
	array.forEach((categoria) => {
		if (!items.includes(categoria.category)) {
			items.push(categoria.category);
		}
	})
	// return items;
	return arrCategory;
}

let fragmento1 = document.createDocumentFragment();
function crearCheckBoxes(array, containerCheckBoxes) {
	let i = 0;
	array.forEach((categoria) => {
		let div = document.createElement("div");
		div.className = "form-check"
		div.innerHTML += `<input class="form-check-input" type="checkbox" name="category" value="${categoria}" id="flexCheckDefault${i}">
                    <label class="form-check-label" for="flexCheckDefault${i}">${categoria}</label>`
		fragmento1.appendChild(div);
		i++;
	})
	containerCheckBoxes.appendChild(fragmento1);
}
function filtroArray(array, filtro) {
	let dataFinal = [];
	array.forEach((evento) => {
		filtro.forEach((categoria) => {
			if (evento.category.toLowerCase() == categoria) {
				dataFinal.push(evento)
			}
		})
	})
	return dataFinal;
}
// crearCheckBoxes(createCategories(data.events), containerCheckBoxes)
crearCheckBoxes(arrCategory, containerCheckBoxes)
let checkBoxes = document.querySelectorAll('input[name="category"]')
let datos1 = []
checkBoxes.forEach((checkbox) => {
	checkbox.addEventListener('change', () => {
		// let elementos = []
		let listaChecked = document.querySelectorAll('input[name="category"]:checked')
		listaChecked.forEach((item) => {
			elementos.push(item.defaultValue)
		})
		if (elementos.length == 0) {
			crearCards([], containerCard);
			crearCards(allEvents, containerCard);
		}
		else {
			crearCards([], containerCard);
			datos1 = filtroArray(allEvents, elementos)
			crearCards(datos1, containerCard)
		}
	})
})
let fragmento2 = document.createDocumentFragment();
function mensaje(containerCard) {
	let div = document.createElement("div");
	div.className = "no_hay_un_porongo"
	div.innerHTML += `<h1>Nada que ver lo que estas buscando</h1>`
	fragmento2.appendChild(div);
	containerCard.appendChild(fragmento2);
}
let buscador = document.querySelector('input[placeholder="Search"]')
buscador.addEventListener('keyup', () => {
	let datafiltrada = [];
	let elementos = [];
	let listaChecked = [];
	listaChecked = document.querySelectorAll('input[name="category"]:checked')
	listaChecked.forEach((item) => {
		elementos.push(item.defaultValue)
	})
	datos1 = filtroArray(allEvents, elementos)
	datos1.forEach(element => {
		if (element.name.toLowerCase().includes(buscador.value.toLowerCase())) {
			datafiltrada.push(element);
		}
	})
	if (datafiltrada.length == 0) {
		crearCards([], containerCard);
		mensaje(containerCard)
	} else {
		crearCards([], containerCard);
		crearCards(datafiltrada, containerCard);
	}
});
