function createCardsCart(productos) {
    let medicines = document.getElementById("createCard1");
  
    productos.forEach((producto) => {
      const { id, imagen, nombre, descripcion } = producto;
  
      const card = document.createElement("div");
      card.classList.add("card", "col-lg-10", "col-sm-8", "m-2");
      card.innerHTML = `
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
            <button class="addToCart" name="${producto._id}">❌</button>
          </div>
        </div>
      `;
      medicines.appendChild(card);

    });
  }
  
  export default createCardsCart;
  
  






// function createCardsCart(productos) {
//     let medicines = document.getElementById("createCard1");
//     let row = document.createElement("div");
//     row.classList.add("row");
//     productos.forEach((producto, index) => {
//       const { id, imagen, nombre, descripcion } = producto;
//       let carrito = document.getElementById("cart1");
//       const cart = document.createElement("div");
//       cart.innerHTML = `
//       <h2>Carrito de compras</h2>
//       <ul class="cart-items">
//         <li>'${producto.nombre}'</li>
//         <li>Producto 2</li>
//         <li>Producto 3</li>
//       </ul>
//       <p class="cart-total">Total: $100</p>
//     `;
//     carrito.appendChild(card);

//       const card = document.createElement("div");
//       card.classList.add("card", "col-lg-10", "col-sm-8", "m-2");
//       card.innerHTML = `
//         <div class="image">
//           <img src="${imagen}"/>
//         </div>
//         <div class="details">
//           <div class="center">
//             <h1>${nombre}<br><span>""</span></h1>
//             <p>${descripcion}</p>
//             <ul>
//               <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
//             </ul>
//             <button class="addToCart" name='${producto._id}'>❌</button>
//           </div>
//         </div>
//       `;
//       row.appendChild(card);
  
//       // Añadir la fila al contenedor y crear una nueva fila después de cada tercer producto
//       if ((index + 1) % 3 === 0 || index === productos.length - 1) {
//         medicines.appendChild(row);
//         row = document.createElement("div");
//         row.classList.add("row");
//       }
//     });
//   }
  
//   export default createCardsCart;
  

// function createCardsCart(productos) {
//     let medicines = document.getElementById("createCard");
//     productos.forEach((producto) => {
//       const { id, imagen, nombre, descripcion } = producto;
//       medicines.innerHTML += `<div class="card col-lg-10 col-sm-8 m-2">
//              <div class="image">
//                <img src="${imagen}"/>
//              </div>
//              <div class="details">
//                <div class="center">
//                  <h1>${nombre}<br><span>""</span></h1>
//                  <p>${descripcion}</p>
//                  <ul>
//                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
//                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
//                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
//                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
//                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
//                  </ul>
//                  <button class="addToCart" name='${producto._id}'>🛒</button>
//                </div>
//              </div>
//            </div>`;
//     });
//   }
  
//   export default createCardsCart;