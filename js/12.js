//'use strict'; //Correr javascript en modo estricto

//Objetos 

const producto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto);
producto.imagen = 'image.jpg';
console.log(Object.isSealed(producto));

delete producto.precio;

console.log(producto);