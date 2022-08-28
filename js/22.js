const puntaje = 1000;

if (puntaje === 1000) { // rl triple = es ,as estricto checa el tipo de dato y lo que contiene sea igual
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if (efectivo < carrito) {
    console.log('el usuario puede pagar');
} else {
    console.log('Fondo insuficientes');
}

const rol = 'ADMINISTRADOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
}else if (rol == 'EDITOR') {
    console.log('Eres editor, puedes entrar pero mo puedes hacer mucho');
}else{
    console.log('No tienes acceso');
}