let fragmento = document.createDocumentFragment();
function crearCards(array, containerCard){
  containerCard.innerHTML=''
  array.forEach((evento)=>{
    let div = document.createElement("div");
    div.className = "tarjeta"
    div.id = `${evento._id}`
    div.innerHTML += `
    <div class="img_tarjeta ad" style="background-image: url(${evento.image})" >
    </div>
    <div class="cuerpo_tarjeta">
                          <h3>${evento.name}</h3>
                          <p>${evento.description}</p>
                          <div class="precio_tarjeta">
                            <p>Price: ${evento.price}</p>
                            <div class="boton_tarjeta">
                              <a class="btn btn-primary" href="./details.html?id=${evento._id}">Ver más</a>
                            </div>
                          </div>                    
                        </div>
                      </div>`
                      /* `
                      <div class="card">
                      <img src=${evento.image} class="card-img-top" alt="Picture...">
                      <div class="card-body">
                      <h5 class="card-title">${evento.name}</h5>
                      <p class="card-text">${evento.description}</p>
                      </div>
                      <div class="card-footer d-flex aling-items-center">
                      <div class="col aling-items-center">
                      <span class="justify-content-start">Price $ ${evento.price}</span>
                      </div>
                      <div class="justify-content-end">
                      <a class="btn btn-primary" href="./details.html?id=${evento._id}">Ver más</a>
                      </div>
                      </div>
                      </div>
                      ` */
      fragmento.appendChild(div);
  })
  containerCard.appendChild(fragmento);
}

/*Cargo por primera vez las crearCards con todos los datos*/
crearCards(data.events,containerCard);

/*funcion para crear las categorias de los checkboxes desde el Json*/
function createCategories(array){
/* let items = [];
array.forEach((categoria)=>{
  if(!items.includes(categoria.category)){
    items.push(categoria.category);
  }   
}) */
return arrCategory;/* items; */
}

/*funcion para crear los checkboxes desde las categorias recien obtenidas*/
let fragmento1 = document.createDocumentFragment();
function crearCheckBoxes(array, containerCheckBoxes){
let i = 0;
array.forEach((arrCategoria)=>{
  let div = document.createElement("div");
  div.className = "form-check"
  div.innerHTML += `<input class="form-check-input" type="checkbox" name="category" value="${categoria}" id="flexCheckDefault${i}">
                    <label class="form-check-label" for="flexCheckDefault${i}">${categoria}</label>`
  fragmento1.appendChild(div);
  i++;
})
containerCheckBoxes.appendChild(fragmento1);
}

/*Create for checkboxes activos*/
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

  /*Run checkboxes*/
crearCheckBoxes(createCategories(data.events), containerCheckBoxes)

/*eventListener checkbox & see status*/
let checkBoxes = document.querySelectorAll('input[name="category"]')
let datos = []
checkBoxes.forEach((checkbox)=>{
  checkbox.addEventListener('change',()=>{
    let elementos=[]
    let listaChecked = document.querySelectorAll('input[name="category"]:checked')
    listaChecked.forEach((item)=>{
      elementos.push(item.defaultValue)
    })
    if(elementos.length==0){
      crearCards([],containerCard);
      crearCards(data.events,containerCard);
    }
    else{
      crearCards([],containerCard);
      datos = filtroArray(data.events, elementos)
      crearCards(datos, containerCard)      
    }
  })
})


/*Inicializo el filtroArray con todas las categorias*/
/*filtroArray(data.events, createCategories(data.events))*/


  /*hasta aca esta ok*/

/*Funcion para mostrar un mensaje cuando la busqueda no arroja resultados*/
let fragmento2 = document.createDocumentFragment();
function mensaje(containerCard){
  let div = document.createElement("div");
  div.className = "no_found"
  div.innerHTML += `<h1>Nada encontrado... Revisa tus filtros...</h1>`
  fragmento2.appendChild(div);
  containerCard.appendChild(fragmento2);
}



/*Arreglar el buscasor para que busque sin tener checkboxes activos.*/
/*agregar un eventListener a la busqueda asi se filtra por categoria*/
let buscador = document.querySelector('input[placeholder="Search"]')
buscador.addEventListener('keyup',()=>{
  let datafiltrada = [];
  let elementos=[];
  let listaChecked = [];
  listaChecked = document.querySelectorAll('input[name="category"]:checked')  
  listaChecked.forEach((item)=>{    
    elementos.push(item.defaultValue)
  })
  datos = filtroArray(data.events, elementos)
  datos.forEach(element => {    
    if(element.name.toLowerCase().includes(buscador.value.toLowerCase())){
      datafiltrada.push(element);
    }
  })  
  if(datafiltrada.length==0){
    /*Mostrar tarjeta o mensaje que no hay*/
    crearCards([],containerCard);
    mensaje(containerCard)
  }else{
    crearCards([],containerCard);
    crearCards(datafiltrada,containerCard);
  }
});