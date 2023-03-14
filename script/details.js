details = data.events;
const queryString = location.search
console.log("DETAILS.JS queryString :" + queryString);
const params = new URLSearchParams(queryString)
console.log("DETAILS.JS params : " + params);
const id = params.get("id")
console.log("EL _id : " + id);
const item = details.find(event => event._id == id)
/* details.forEach(element => {
	console.log(element);
}); */
console.log("ITEM",item);
const div = document.querySelector(".contenido_details")
div.innerHTML = `
<div class="d-flex container-fluid justify-content-center align-items-center m-5 p-2 box1 shadow> 
<div class="card_details d-flex container-fluid justify-content-center align-items-center text-center align-self-center shadow">
  	<img class="img_target" src=" ${item.image} " alt="Picture...." width="400px" height="400px"/>
        <div class="card-body">
          	<h3 class="card-title1">${item.name} </h5>
            <h5 class="card-subtitle1">${item.description}</h5>
			<p class="card-text m-1"><b>Category : </b>${item.category}</p>
			<p class="card-text m-1"><b>Capacity : </b>${item.capacity}</p>
			<p class="card-text m-1"><b>Assistance : </b>${item.assistance}</p>
			<p class="card-text m-1"><b>Price : </b>${item.price}</p>
			<input class="m-3 bg-warning" type="button" value="Back..." name="Back..." onclick="history.back()" style="backgroundColor: yellow; border-style=15%; font-size: 20px;" />
		</div>
</div>
</div>`