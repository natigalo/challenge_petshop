const medicines = document.getElementById("createCard");


document.addEventListener("DOMContentLoaded", traerProductos);

async function traerProductos() {
  let url = "https://pro-talento.up.railway.app/api/mindy/products?tipo=medicamento";
  try {
    let response = await fetch(url);
        response = await response.json();
        response = response.products
        console.log(response)
        crearTarjetas(response)
  } catch (error) {
    console.log(error)
  }
}

function crearTarjetas(productos){
  
}

// for (let i = 1; i < 30; i++) {
//   fetch(url + i)
//         .then((response)=> response.json())
//         .then(data => crearTarjetas(data))

// }

// function crearTarjertas(medicine) {
//   medicines.innerHTML =`<div class="card">
//   //         <div class="image">
//   //           <img src="${medicine.imagen}"/>
//   //         </div>
//   //         <div class="details">
//   //           <div class="center">
//   //             <h1>${medicine.nombre}<br><span>""</span></h1>
//   //             <p>${medicine.descripcion}</p>
//   //             <ul>
//   //               <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
//   //               <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
//   //               <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
//   //               <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
//   //               <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
//   //             </ul>
//   //           </div>
//   //         </div>
//   //       </div>`;

// }
// async function crearTarjetas() {
//     let createCard = document.getElementById('createCard');
//     let medicines = "https://pro-talento.up.railway.app/api/mindy/products?tipo=medicamento";
//     let response = await fetch(medicines);
//     response = await response.json();
//     response = response.products
//     let medicamento = response;

//     medicamento.forEach(()=> {
//         let img = medicamento.imagen;
//         let name = medicamento.nombre;
//         let description = medicamento.descripcion;
//         createCard.innerHTML +=
//         `<div class="card">
//         <div class="image">
//           <img src="${img}"/>
//         </div>
//         <div class="details">
//           <div class="center">
//             <h1>${name}<br><span>""</span></h1>
//             <p>${description}</p>
//             <ul>
//               <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
//               <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
//             </ul>
//           </div>
//         </div>
//       </div>`;
//     });
// }crearTarjetas();
