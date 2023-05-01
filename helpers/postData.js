const postDataFetch = async (url, objeto) => {
    try {
        const option = {
            method: "POST",
            body: JSON.stringify(objeto),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        }
        const response = await fetch(url,option);
        return response;
    } catch (error) {
        alert('No se ha podido crear el producto.');
    }
}
export default postDataFetch;

