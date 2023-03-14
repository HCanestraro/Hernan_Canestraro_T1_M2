/* CHE FUNCTIONS */
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
let fragmento = document.createDocumentFragment();
function crearCards(array, containerCard) {
	containerCard.innerHTML = ''
	array.forEach((evento) => {
		let div = document.createElement("div");
		// div.className = "tarjeta"
		div.className = "card"
		// div.id = `${evento._id}`
		/* div.innerHTML += `<img class="card-img-top ad" src=${evento.image}" alt="Picture..." >
							<div class="cuerpo_tarjeta">
							  <h3>${evento.name}</h3>
							  <p>${evento.description}</p>
							  <div class="precio_tarjeta">
								<p>Price: ${evento.price}</p>
								<div class="boton_tarjeta">
								  <a class="btn btn-primary" href="./../details.html?id=${evento._id}">Saber más...</a>
								</div>
							  </div>                    
							</div>
						  </div>` */
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
crearCards(allEvents,containerCard);
function createCategories(array) {
	let items = [];
	array.forEach((categoria) => {
		if (!items.includes(categoria.category)) {
			items.push(categoria.category);
		}
	})
	return items;
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
			if (evento.category == categoria) {
				dataFinal.push(evento)
			}
		})
	})
	return dataFinal;
}
crearCheckBoxes(createCategories(data.events), containerCheckBoxes)
let checkBoxes = document.querySelectorAll('input[name="category"]')
let datos = []
checkBoxes.forEach((checkbox) => {
	checkbox.addEventListener('change', () => {
		let elementos = []
		let listaChecked = document.querySelectorAll('input[name="category"]:checked')
		listaChecked.forEach((item) => {
			elementos.push(item.defaultValue)
		})
		if (elementos.length == 0) {
			crearCards([], containerCard);
			crearCards(data.events, containerCard);
		}
		else {
			crearCards([], containerCard);
			datos = filtroArray(data.events, elementos)
			crearCards(datos, containerCard)
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
	datos = filtroArray(data.events, elementos)
	datos.forEach(element => {
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