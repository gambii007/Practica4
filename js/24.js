//ciclos

//For loop
for (let i = 1; i <= 10; i++) {
    if (i%2 == 0) {
        console.log(`${i} Es par`);    
    } else {
        console.log(`${i} Es impar`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

//while doop

let j = 1;
while (j <= 10) {
    console.log(`${j}`);
    j++;
}

//DoWhile
let k = 1   ;
do {
    console.log(`${k}`);
    k++;
} while (k <= 10);