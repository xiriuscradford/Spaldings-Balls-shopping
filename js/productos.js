const shopContent = document.getElementById("shopwan");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio}$</p>
        <p>${product.descripcion}</p>
    `;

    shopContent.append(content)

    let comprar = document.createElement("button");
    comprar.innerText = "añadir al carrito 🛒";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () => {
        const productoExistente = carrito.find((prod) => prod.id === product.id);
    
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: 1,
            });
        }
    
        carritoCounter();
        saveLocal();
    });
});


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify((carrito)));
}




