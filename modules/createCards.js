function createCards(productos) {
  let medicines = document.getElementById("createCard");
  productos.forEach((producto) => {
    const { id, imagen, nombre, descripcion } = producto;
    medicines.innerHTML += `<div class="card col-lg-10 col-sm-8 m-2">
           <div class="image">
             <img src="${imagen}"/>
           </div>
           <div class="details">
             <div class="center">
               <h1>${nombre}<br><span>""</span></h1>
               <p>${descripcion}</p>
               <ul>
                 <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
               </ul>
             </div>
           </div>
         </div>`;
  });
}

export default createCards;
