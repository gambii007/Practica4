//Array Methods
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

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

//foreach

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes bandera para ver si existe
let resultado = meses.includes('Enero');
let resultado2 = carrito.includes('Celular');
console.log(resultado);
console.log(resultado2);  //Caundo es un arreglo de una dimension

//some ideal para arrelgo de objetos
resultado = carrito.some(function (producto) {
    return producto.nombre === 'Celular';  //cuando son mas
});

resultado2 = carrito.some(producto => producto.nombre == 'Celular Pro') //Lo mismo que arriba pero mas corto

console.log(resultado);
console.log(resultado2);

//reduce
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio;
}, 0);

console.log(resultado);

//Filter

resultado = carrito.filter(function (producto) {
    return producto.precio > 400;
});

resultado = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular';
});

console.log(resultado);