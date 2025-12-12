document.addEventListener("DOMContentLoaded", function () {
    cargarProductos();
    actualizarContadorCarrito();
    
    
});

function cargarProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Parece que hubo un error. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al cargar los productos:', error));
}

    function mostrarProductos(productos) {
     const contenedor = document.getElementById("contenedor-productos");
     productos.forEach(producto => {
         const productoCard = `
             <article class="tarjeta">
                 <img class="product-image" src="${producto.image}" alt="${producto.title}">
                 <h3>${producto.title}</h3>
                 <p>Precio: $${producto.price}</p>
                 <button onclick="agregarAlCarrito(${producto.id},'${producto.title}',${producto.price})">Agregar al carrito</button>
             </article>
         `;
         contenedor.innerHTML += productoCard;
        });   
    }

    function agregarAlCarrito(id, title, price) {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
        
        const productoExistente = carrito.find(item => item.id === id);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push({ id, title, price, cantidad: 1 });
            }
            
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarContadorCarrito();
        
        alert(`"${title}" agregado al carrito`);
   
        }
    function actualizarContadorCarrito() {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        const listaCarrito = document.getElementById("lista-carrito");
        listaCarrito.innerHTML = " (" + totalProductos + ") ";
    }


    

    document.getElementById("vaciar-carrito").addEventListener("click", function () {
    localStorage.removeItem("carrito");
    actualizarContadorCarrito();
});
