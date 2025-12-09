document.addEventListener("DOMContentLoaded", function () {
    cargarProductos();
    contadorCarrito();
    actualizarContadorCarrito();
    
    
});

function cargarProductos() {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
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


/*
{
    let contenedor = document.getElementById("contenedor-productos");
    productos.forEach(function (producto) {
        let tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta');

        let productName = document.createElement('h3');
        productName.textContent = producto.title;

        let productImage = document.createElement('img');
        productImage.src = producto.image;
        productImage.alt = producto.title;
        productImage.className = 'product-image';

        let productPrice = document.createElement('p');
        productPrice.textContent = "$ " + producto.price;

        let botonAgregar = document.createElement('button');
        botonAgregar.textContent = "Agregar al carrito";
        botonAgregar.id = "boton-agregar" + producto.id;

        botonAgregar.addEventListener("click", function () {
        let productoCarrito = { id: producto.id, nombre: producto.title, precio: producto.price };
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(productoCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
        });

        tarjeta.appendChild(productImage);
        tarjeta.appendChild(productName);
        tarjeta.appendChild(productPrice);
        tarjeta.appendChild(botonAgregar);
        contenedor.appendChild(tarjeta);
    })
}*/
    

    document.getElementById("vaciar-carrito").addEventListener("click", function () {
    localStorage.removeItem("carrito");
    actualizarContadorCarrito();
});
