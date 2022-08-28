//Objetos

const nombreProducto = 'Monitor 20 Pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.precio); //Se accede a las propiedaddes y solo se toma el de precio

//Agregar Valores
producto.imagen = 'imagen.jpg';


//Elimnar Valoresingles
delete producto.disponible;
console.log(producto);