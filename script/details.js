// var arrCategory = [];
var deEvents = "";
let qStr = location.search;
let params = new URLSearchParams(qStr);
let id=params.get("id");


console.log(id);
daEvents = data.events.filter(events => events._id == id);

const container = document.getElementById("cardsDetails");

		document.open();
        document.write('<div class="card">');
		document.write(`<img src=${deEvents.image} class="card-img-top" alt="Picture...">`);
		document.write('<div class="card-body">');
		document.write(`<h5 class="card-title">${deEvents.name}</h5>`);
		document.write(`<p class="card-text">${deEvents.description}</p>`);
		document.write('</div>');
		document.write('<div class="card-footer d-flex aling-items-center">');
		document.write('<div class="col aling-items-center">');
		document.write(`<span class="justify-content-start">Price $ ${deEvents.price}</span>`);
		document.write('</div>');
		document.write('<div class="justify-content-end">');
		document.write(`<a href="./details.html?${deEvents._id}"><button class="btn btn-primary justify-content-end">Ver más</button></a>`);
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
	document.close();

/* function showCategory() {
	for (let i = 0; i <= deEvents.length - 1; i++) {
		if (!arrCategory(deEvents.category.toLowerCase())) {
			console.log("Busca no repetidos");
			arrCategory.push(deEvents.category);
			console.log("Agrega push:", deEvents.category);
		}
	}
	console.log("Total de elementos:",arrCategory.length);
}

showCategory();
 */