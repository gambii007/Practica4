//Objetos 

const producto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

//Forma anterior
/*const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;
console.log(precioProducto);
console.log(nombreProducto);*/

//Forma nueva Destructuring
/*const {precio}= producto;
const   {nombreProducto} = producto;*/

//Se puede simplicar asi
const {precio, nombreProducto} = producto; //debe tener el mismo nombre que se declaro en el objeto
console.log(precio);
console.log(nombreProducto);