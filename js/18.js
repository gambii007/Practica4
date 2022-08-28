//Funciones
function sumar(numero1 = 0, numero2 = 0) { //parametros numero1, numero2, etc  //Si no tiene un parametro se pasa el 0
    console.log(numero1 +  numero2);
}
sumar(10,10); //parametros
sumar(10);
sumar(.5,10);
sumar(10,4);

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);
