    const productos = [
        {id:10,
        name: "Remera",
        description: "Remera de algodón",
        amount: 20
        },
        {id:20,
        name: "Pantalón",
        description: "Pantalón de mezclilla",
        amount: 15
        },
        {id:30,
        name: "Zapatos",
        description: "Zapatos deportivos",
        amount: 10
        },
        {id:40,
        name: "Correa",
        description: "Correa de cuero",
        amount: 25},
        {id:50,
            name: "Gorra",
            description: "Gorra de béisbol",
            amount: 30
        }
    ];

let contenedor = document.getElementById("contenedor-productos");
productos.forEach(function(producto) {
    let card = document.createElement('article');
    card.classList.add('card');

    let productName = document.createElement('h3');
    productName.textContent = producto.name;

    let productPrice = document.createElement('p');
    productPrice.textContent = producto.amount;

    let productBoton = document.createElement('button');
    productBoton.textContent = "Ver descripción";

    let productDescription = document.createElement('p');
    productDescription.textContent = producto.description;
    productDescription.style.display = 'none';

    card.appendChild(productName);
    card.appendChild(productPrice);
    card.appendChild(productBoton);
    card.appendChild(productDescription);
    contenedor.appendChild(card);

    productBoton.addEventListener('click', function(event) {
        if (productDescription.style.display === 'none') {
            productDescription.style.display = 'block';
        };
    });
    })

    
