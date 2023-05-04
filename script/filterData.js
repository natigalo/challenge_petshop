import createCards from "../modules/createCards";

async function createChecks() {
    const url = "https://pro-talento.up.railway.app/api/mindy/products";
    let response = await fetch(url);
    response = await response.json();
    const categorys = document.getElementById('contenedorCategorias');
    const checksCategorys = [];
    
    for (let i = 0; i < response.products.length; i++) {
        const categoria = response.products[i].tipo;
        if (!checksCategorys.includes(categoria)) {
            checksCategorys.push(categoria);
            categorys.innerHTML += `<li class="list-group-item">
            <input type="checkbox" value="${categoria}" name="${categoria}" id="filtroCheck">
            <label for="${categoria}">${categoria}</label>
            </li>`;
        }

    }
    const checkbox = document.querySelector('input[type="checkbox"]');
    for (var i = 0; i < checkbox.length; i++)
        checkbox[i].addEventListener("click", filterType);
} createChecks("https://pro-talento.up.railway.app/api/mindy/products")

async function filterType() {
    try {
        let text = document.addEventListener("keyup", e => {
            if (e.target.matches("#buscarInput")) {
                document.querySelectorAll(".tCard").forEach(card => {
                    card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                        ? card.classList.remove("filtro")
                        : card.classList.add("filtro")
                })
            }
        })
        let categoria = [...document.querySelectorAll("#filtroCheck:checked")].map(each => each.value).join(",");
        let url = `https://pro-talento.up.railway.app/api/mindy/products/?nombre=${text}&tipo=${categoria}`;
        let response = await fetch(url);
        response = await response.json;
        createCards(response.products);
        console.log()
    } catch (error) {
console.log(error)
    }

}

 document.addEventListener("keyup", e => {
    if (e.target.matches("#buscarInput")) {
        document.querySelectorAll(".tCard").forEach(card => {
            card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? card.classList.remove("filtro")
                : card.classList.add("filtro")
        })
    }
})