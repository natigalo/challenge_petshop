const medicines = document.getElementById("createCard");
let url = "https://pro-talento.up.railway.app/api/mindy/products?tipo=medicamento";

for (let i = 0; i < url.length; i++) {
  fetch(url + i)
        .then((response)=> response.json())
        .then(data => crearTarjetas(data))
  
}

function crearTarjertas(medicines) {
  
}
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