const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televicion 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

//ForEach
carrito.forEach(producto => console.log(`Name: ${producto.nombre}`)); //Para consola html, mostrar resultados e iterar

//MAP
carrito.map(producto => console.log(`Name: ${producto.nombre}`)); //Para crear nuevos arreglos, consulta de datos, etc
    //Ejemplo
const arreglo = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo);