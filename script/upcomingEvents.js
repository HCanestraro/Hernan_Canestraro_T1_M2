/* var paEvents = [];



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
 */

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
		div.className = "tarjeta"
		div.id = `${evento._id}`
		div.innerHTML += `<div class="img_tarjeta ad" style="background-image: url(${evento.image})" >
							</div>
							<div class="cuerpo_tarjeta">
							  <h3>${evento.name}</h3>
							  <p>${evento.description}</p>
							  <div class="precio_tarjeta">
								<p>Price: ${evento.price}</p>
								<div class="boton_tarjeta">
								  <a class="btn btn-primary" href="./../details.html?id=${evento._id}">Ver más</a>
								</div>
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
	checkBoxes.forEach((checkbox)=>{
	checkbox.addEventListener('change',()=>{
	  buscador.value='';
	  let elementos=[]
	  let listaChecked = document.querySelectorAll('input[name="category"]:checked')
	  listaChecked.forEach((item)=>{
		elementos.push(item.defaultValue)
	  })
	  if(elementos.length==0){
		console.log('paso por aca');
		cards([],containerCard);
		cards(data.events,containerCard);
	  }
	  else{
		console.log('paso por allá');
		cards([],containerCard);      
		cards(filtroArray(data.events, elementos), containerCard)
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