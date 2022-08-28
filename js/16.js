//Funciones
sumar();
function sumar() {
    console.log(10 * 10);
}

//Es de doble vuelta, primero checa las funciones y luego lo demas, en el de arrriba
//Si jala pero el de abajo no, por que lo considera como una variable
//al llamar primero la funcion

//Expresion de la funcion
//sumar2();
const sumar2 = function () {
    console.log(3 + 3);
}
sumar2();

//IIFE
(function () {
    console.log('Esto es una funcion');
})();