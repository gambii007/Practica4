//POO

//Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object constructor, solo cuando se requiera
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
//Crear funciones que solo se utilizan en un objeto en especifico.
Cliente.prototype.formatearProducto = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
//Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

Producto.prototype.obtenerPrecio = function() {
    return `Tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitos curvo de 49"', 800);
const producto3 = new Producto('celular"', 450);
const cliente = new Cliente('Fernando', 'Example')

console.log(cliente.formatearProducto());
console.log(producto2.formatearProducto());
console.log(producto2.obtenerPrecio());
console.log(producto3.formatearProducto());