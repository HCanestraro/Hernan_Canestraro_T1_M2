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

<div class="card_details d-flex container-fluid justify-content-center align-items-center text-center align-self-center shadow">
  	<img class="img_target" src=" ${item.image} " alt="Picture...." width="400px" heigth="400px"/>
        <div class="card-body">
          	<h5 class="card-title">${item.name} </h5>
            <h6 class="card-subtitle">${item.description}</h6>
			<p class="card-text"><b>Category : </b>${item.category}</p>
			<p class="card-text"><b>Capacity : </b>${item.capacity}</p>
			<p class="card-text"><b>Assistance : </b>${item.assistance}</p>
			<p class="card-text"><b>Price : </b>${item.price}</p>
			<input class="m-3 bg-warning" type="button" value="Back..." name="Back..." onclick="history.back()" style="backgroundColor: yellow;" />
		</div>
</div>
		`