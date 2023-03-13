function cheFooter() {
   f= ` 
   <footer class="d-flex container-fluid box1 justify-content-between align-content-center align-items-center"> 
   <div class="justify-content-start">
    <a href=""><img src="./assets/cheinstagram.png" class="loguitos" alt="Instagram..."></a>
    <a href=""><img src="./assets/chefacebook.jpg" class="loguitos" alt="Facebook..."></a>
    <a href=""><img src="./assets/chewhatsapp.jpg" class="loguitos" alt="Whatsapps.."></a>
    </div>
    <div class="justify-content-end">
    <span>COHORT FE-07TN</span>
    </div>
    </footer>`;

document.open();
document.write(f);
document.close();

}
function cheNavbar() {
   g=`
   <nav class="navbar d-flex container-fluid box1">
   <div class="d-flex container-fluid aling-items-center">
   <div class="justify-content-start aling-content-center">
   <img src="./assets/LogoAmazingEvents.png" alt="Logo" class="logo1">
   </div>
   <div class="justify-content-end">
   <a id="op" class="navbar-brand btn btn-outline-success me-2" role="button" data-bs-toggle="tooltip"	data-bs-placement="bottom" title="Go to Home Page..." href="./index.html">Home</a>
   <a id="op" class="navbar-brand btn btn-outline-success me-2" role="button" data-bs-toggle="tooltip"	data-bs-placement="bottom" title="Go to Upcoming Events Page..." href="./upcomingEvents.html">Upcoming Events</a>
   <a id="op" class="navbar-brand btn btn-outline-success me-2" role="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to Past Events Page..." href="./pastEvents.html">Past Events</a>
   <a id="op" class="navbar-brand btn btn-outline-success me-2" role="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to Contact Us Page..." href="./contact.html">Contact</a>
   <a id="op" class="navbar-brand btn btn-outline-success me-2" role="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go to Stats Page..." href="./stats.html">Stats</a>
   </div>
   </div>
   </nav>`;
   document.open();
document.write(g);
document.close();

}
function cheCreateCards(arrayCards, bid) 
{
   console.log(arrayCards,bid);
   a = document.getElementById(bid);
   for (let i = 0; i <= arrayCards.length - 1; i++) {

   codeLines = `    
       <img src=${arrayCards.image} class="card-img-top" alt="Picture...">
       <div class="card-body">
       <div class="card">
       <h5 class="card-title">${arrayCards.name}</h5>
       <p class="card-text">${arrayCards.description}</p>
       </div>
       <div class="card-footer d-flex aling-items-center">
       <div class="col aling-items-center">
       <span class="justify-content-start">Price $ ${arrayCards.price}</span>
       </div>
       <div class="justify-content-end">
       <a href="./details.html"><button class="btn btn-primary justify-content-end">Ver más</button></a>
       </div>
       </div>
       </div>
       `
   }
}