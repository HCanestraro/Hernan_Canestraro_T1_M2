// Here create/add card for events

function createCard(eventForCard)
{
	const containerNextCard = `<div class="card">
	<img src="${eventForCard.image}" class="card-img-top" alt="${eventForCard.name}">
	<div class="card-body"
	<h5 class="card-title">${eventForCard.name}</h5>
	<p class="card-text">${eventForCard.description}</p>
	<div class="card-footer">
	<p>Price:<br> ${eventForCard.price}</p>
	<a href="./../details.html?id=${eventForCard._id}" class="btn btn-primary">Saber más</a>
	</div>
	</div>
	</div>
	`
	return containerNextCard;
}

// Create function checkBoxCreate
function checkBoxCreate(category)
{
	let htmlCategory = "";
	for ( let categoryA of arrCategory ) {
		htmlCategory += `<div class="col-6 form1">
		<input class="form-check-input" type="checkbox" value="${category}" id="imput-${category}">
		<label class="form-check-label" for="input${category}">${category}</label>
		</div>`
	}
}