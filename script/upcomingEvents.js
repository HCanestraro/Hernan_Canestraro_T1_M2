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
showda();/* var paEvents = [];
/*fecha*/
function filtraPorFecha(array){
	let fecha_actual = new Date('2022,01,01');
	let eventosFiltradosPorFecha=[]
	array.forEach((evento)=>{
	  let anno_evento = evento.date.split('-')[0]
	  let mes_evento = evento.date.split('-')[1]
	  let dia_evento = evento.date.split('-')[2]
	  let fecha_evento = new Date(anno_evento, mes_evento, dia_evento)
	  if(fecha_evento.getTime()>fecha_actual.getTime()){
		eventosFiltradosPorFecha.push(evento)
	  }
	})
	return eventosFiltradosPorFecha
	}
	
	let fragmento = document.createDocumentFragment();
	function cards(array, containerCard){
	  containerCard.innerHTML=''
	  array.forEach((evento)=>{
		let div = document.createElement("div");
		div.className = "card"
		// div.id = `${evento._id}`
		div.innerHTML += `
		<img class="card-img-top ad" src=${evento.image}" alt="Picture..." >
                        	<div class="card-body">
                          		<h5 class="card-title">${evento.name}</h5>
                          		<p class="card-text">${evento.description}</p>
							</div>
                        	<div class="card-footer d-flex align-items-center">
                           		<div class="col align-items-center align-self-center">
                           			<span class="justify-content-start text-small">Price: $ ${evento.price}</span>
                           		</div>
                            	<div class="justify-content-end">
                            		<a class="btn btn-primary btn-small" href="./../details.html?id=${evento._id}">Saber más...</a>
                            	</div>
                        	</div>                    
                        </div>`
		  fragmento.appendChild(div);
	  })
	  containerCard.appendChild(fragmento);
	}
	
	/*funcion para crear las categorias de los checkboxes desde el Json*/
	function createCategories(array){
	let items = [];
	array.forEach((categoria)=>{
	  if(!items.includes(categoria.category)){
		items.push(categoria.category);
	  }   
	})
	return items;
	}
	
	/*funcion para crear los checkboxes desde las categorias recien obtenidas*/
	let fragmento1 = document.createDocumentFragment();
	function crearCheckBoxes(array, containerCheckBoxes){
	let i = 0;
	array.forEach((categoria)=>{
	  let div = document.createElement("div");
	  div.className = "form-check"
	  div.innerHTML += `<input class="form-check-input" type="checkbox" name ="category" value="${categoria}" id="flexCheckDefault${i}">
						<label class="form-check-label" for="flexCheckDefault${i}">${categoria}</label>`
	  fragmento1.appendChild(div);
	  i++;
	})
	containerCheckBoxes.appendChild(fragmento1);
	}
	
	
	/*Funcion para mostrar un mensaje cuando la busqueda no arroja resultados*/
	let fragmento2 = document.createDocumentFragment();
	function mensaje(containerCard){
	let div = document.createElement("div");
	div.className = "not_found"
	div.innerHTML += `<h1>Nada encontrado... Revisa tus filtros...</h1>`
	fragmento2.appendChild(div);
	containerCard.appendChild(fragmento2);
	}
	
	
	/*agregar un eventListener a la busqueda asi se filtra por categoria*/
	let buscador = document.querySelector('input[placeholder="Search"]')
	buscador.addEventListener('keyup',()=>{
	let checkBoxes = document.querySelectorAll('input[name="category"]')
	checkBoxes.forEach((checkbox)=>{
	  checkbox.checked = false;
	})
	let datafiltrada = [];
	data.events.forEach(element => {    
	  if(element.category.toLowerCase().includes(buscador.value.toLowerCase())){
		datafiltrada.push(element);
	  }
	})
	if(datafiltrada.length==0){
	  /*Mostrar tarjeta o mensaje que no hay un carajo*/
	  cards([],containerCard);
	  mensaje(containerCard)
	}else{
	  cards([],containerCard);
	  cards(datafiltrada,containerCard);
	}
	
	});
	
	/*Creo una funcion que filtra la data segun los checkboxes activos*/
	function filtroArray(array, filtro){
	let dataFinal=[];
	array.forEach((evento)=>{
	  filtro.forEach((categoria)=>{      
		if(evento.category==categoria){
		  dataFinal.push(evento)
		}
	  })
	})
	return dataFinal;
	}
	
	/*agregar un eventListener a cada checkbox desde el elemento padre y obtengo su estado*/
	let checkBoxes = document.querySelectorAll('input[name="category"]')
	let datosa = []
	checkBoxes.forEach((checkbox)=>{
	checkbox.addEventListener('change',()=>{
	  /* buscador.value=''; */
	  let elementos=[]
	  let listaChecked = document.querySelectorAll('input[name="category"]:checked')
	  listaChecked.forEach((item)=>{
		elementos.push(item.defaultValue)
	  })
	  if(elementos.length==0){
		console.log('paso por aca');
		crearCards([],containerCard);
		crearCards(data.events,containerCard);
	  }
	  else{
		console.log('paso por allá');
		crearCards([],containerCard);      
		datosa = filtroArray(data.events, elementos)
		crearCards(datosa, containerCard)
	  }
	})
	})
	
	/*Inicio los checkboxes*/
	let dataFiltradaPorFecha = filtraPorFecha(data.events)
	
	let datos = createCategories(dataFiltradaPorFecha)
	crearCheckBoxes(datos, containerCheckBoxes);
	
	/*Cargo por primera vez las cards con todos los datos*/
	cards(dataFiltradaPorFecha,containerCard);
	
	/*Inicializo el filtroArray con todas las categorias*/
	filtroArray(dataFiltradaPorFecha, datos)
	
	/*hasta aca esta ok*/