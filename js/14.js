//Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ['Hola', 10, true, "si", null, {nombre: "fernando", trabajo: "programador"}]
console.table(arreglo);

//Acceder a los valores del arreglo
console.log(numeros[2]);
console.log(numeros[4]);
console.log(numeros[200]);

//Conocer las extension de un arreglo
console.log(meses.length);

numeros.forEach(function(numero){
    console.log(numero);
})

//Agregar elementos al array
numeros[5] = 60;

numeros.push(60,70,80); //Al final del arreglo
numeros.unshift(-10,-20,-30); //Al inicio del arreglo

console.log(numeros);

meses.pop();
meses.shift();
meses.splice(2,1);
console.log(meses); //Todos elementos eliminand los datos directamente

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio']; //Agregar para atras
const nuevoArreglo2 = ['Enero', ...meses]; //Agregar para adelante

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
