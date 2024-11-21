const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
        <h1 class="modal-header-button">x</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = modalHeader.querySelector(".modal-header-button");
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContainer.append(modalContent);

    carrito.forEach((product) => {
        const carritoItem = document.createElement("div");
        carritoItem.className = "carrito-item";
        carritoItem.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
            <span class="restar"> ➖ </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> ➕ </span>
            <p>Total: ${product.cantidad * product.precio}</p>
            <span class="delete-product"> ❌ </span>
        `;

        modalContent.append(carritoItem);

        const restar = carritoItem.querySelector(".restar");
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        const sumar = carritoItem.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        const eliminar = carritoItem.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $ <a href="formulario.html"><button class="vender-button">Comprar</button></a>`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();