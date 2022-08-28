//Arrow function
const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}

/*
igual se puede declarar asi
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5,10);
*/
sumar2(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//Si solo es un valor puedes ignorar los parentesis de los parametros

aprendiendo('javascript');

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
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//some ideal para arrelgo de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

//reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

//Filter

resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado);

