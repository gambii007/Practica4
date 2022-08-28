//String
const producto = 'Monitor de 20 Pulgadas';
const producto2 = String('Monitor 30 Pulgadas');
const producto3 = new String('Monitor de 350 Pulgadas');
const producto4 = 'Monitor de 20 Pulgadas"';

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const email = 'correo@correo.com'

console.log(producto);
console.log(producto2);
//console.log(typeof producto3); puede ver que tipo de objeto es el que se manda
console.log(producto4); //Si se tiene doble comillas para definir se puede usar \" para que salga

//lenth retorna la extension de la cadena
console.log(producto.length); //Exclusivi para los metodos

//indexof retorna la posicion
console.log(tweet.indexOf('JavaScript'));
console.log(email.indexOf('@'));

//includes retorna true o false
console.log(tweet.includes('JavaScript'));
console.log(producto.includes('Tablet'));