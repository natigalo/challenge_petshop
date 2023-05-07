function createCart(productos) {
    let card = document.getElementById("cart2");
    const cartItems = productos
      .map(
        (producto, index) => `
        <tr>
          <td>${producto.nombre}</td>
          <td>$ ${producto.precio}</td>
          <td>
            <button class="btn-decrease">-</button>
            <input type="number" value="1" min="1" max="10" data-stock="${producto.stock}">
            <button class="btn-increase">+</button>
          </td>
          <td>${producto.stock}</td>
        </tr>
      `
      )
      .join("");
  
    const calculateTotal = () => {
      let total = 0;
      const valorInputs = card.querySelectorAll("input[type='number']");
      valorInputs.forEach((input, index) => {
        const currentValue = parseInt(input.value);
        const price = productos[index].precio;
        total += currentValue * price;
      });
      return total;
    };
  


    const updateTotal = () => {
        const totalElement = card.querySelector(".cart-total");
        const valorInputs = card.querySelectorAll("input[type='number']");
        const stockInputs = card.querySelectorAll("[data-stock]");
      
        valorInputs.forEach((input, index) => {
          const currentValue = parseInt(input.value);
          const stock = parseInt(stockInputs[index].dataset.stock);
          if (currentValue < stock * 0.51) {
            input.classList.remove("input-high-stock");
            input.classList.add("input-low-stock");
          } else {
            input.classList.remove("input-low-stock");
            input.classList.add("input-high-stock");
          }
        });
      
        totalElement.textContent = `$ ${calculateTotal()}`;
      };
  
    card.innerHTML = `
      <h2>Carrito de compras</h2>
      <table class="cart-items">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          ${cartItems}
          <tr>
            <td>Total:</td>
            <td colspan="2" class="cart-total">$ 0</td>
          </tr>
        </tbody>
      </table>
    `;
  
    // Obtener todos los elementos de botón de disminución y agregar event listener
    const disminuirButtons = card.getElementsByClassName("btn-decrease");
    Array.from(disminuirButtons).forEach(button => {
      button.addEventListener("click", () => {
        const input = button.nextElementSibling;
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
          input.value = currentValue - 1;
          updateTotal();
        }
      });
    });
  
    // Obtener todos los elementos de botón de incremento y agregar event listeners
    const incrementarButtons = card.getElementsByClassName("btn-increase");
    Array.from(incrementarButtons).forEach((button, index) => {
      button.addEventListener("click", () => {
        const input = button.previousElementSibling;
        const currentValue = parseInt(input.value);
        const stock = productos[index].stock;
        if (currentValue < stock) {
          input.value = currentValue + 1;
          updateTotal();
        }
      });
    });
  
    updateTotal(); // Actualizar el valor total después de agregar los elementos al DOM
  }
  
  export default createCart;
  