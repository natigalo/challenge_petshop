import postDataFetch from "../helpers/postData.js";

const createform = async (event) => {

    // Detener el comportamiento por defecto del formulario
    event.preventDefault();
  
    // Obtener los valores de los campos de entrada del formulario
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value;
    const descripcion = document.getElementById("Descripcion").value;
    const tipo = document.getElementById("Tipo").value;
    const precio = parseInt(document.getElementById("precio").value);
    const stock = parseInt(document.getElementById("configstock").value);

    // Endpoint de la API para POST
    const url = "https://pro-talento.up.railway.app/api/mindy/products";

    //Objeto del nuevo producto
    let data = {
      nombre,
      imagen,
      descripcion,
      tipo,
      precio,
      stock,
    };

    //Solicitud de crear producto
    const resp = await postDataFetch(url, data);
    if (resp.ok) {
      alert('¡Se ha creado un nuevo producto!');
      //Borra los datos del formulario
      event.target.reset();
    }
  }
  export default createform;