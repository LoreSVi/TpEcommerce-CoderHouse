const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const botonDatos = document.getElementById('botonDatos')

botonDatos.onclick = () => {
    Toastify({
        text: `Hola ${inputNombre.value + " " + inputApellido.value}`,
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast()

    inputNombre.value = ''
    inputApellido.value = ''
};

const listaTop3 = document.getElementById('lista-top3');
const boton = document.getElementById('boton');

/*boton.onclick = () => {
    fetch("./data.json")
        .then((response) => response.json())
        .then(response =>{
        
            const top3 = response.results
            top3.forEach(top3=>){

                const li = document.createElement('li')
              li.innerText = product.nombre + " -$" + product.precio;
                lista.append(li)
            })
        })
        .catch((error) => console.log(error))
    }
*/
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
        `;

        shopContent.append(content);

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
            });
            console.log(carrito);
        });
});

verCarrito.addEventListener("click", () => {
modalContainer.innerHTML = '';
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = 
`<h1 class="modal-header-title">Carrito</h1>
`;
modalContainer.append(modalHeader);

const modalbutton = document.createElement("h1");
modalbutton.innerText = "x";
modalbutton.className = "modal-header-button";

modalbutton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

modalHeader.append(modalbutton);

carrito.forEach((product) => {
let carritoContent = document.createElement("div");
carritoContent.className = "modal-content";
carritoContent.innerHTML = `
<img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-content"
  totalCompra.innerHTML =  `Total a pagar: ${total}$`;
  modalContainer.append(totalCompra);
});