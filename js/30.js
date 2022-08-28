//Promise

const usuarioAuntenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Auntenticado'); //el promise se cumple
    }else{
        reject('No se pudo iniciar sesión'); //el promise no se cumple
    }
});

usuarioAuntenticado
    .then((resultado) =>{  //Para acceder a los valores del promise
        console.log(resultado);
    })
    .catch(error => console.log(error));

//console.log(usuarioAuntenticado);

/**En los promises existen 3 valores posibles
 * Pending: No se ha cumplido pero tampoco se ha rechazado
 * Fulfilled: Ya se cumplio
 * Rejected: Se ha rechazado o nose pudo cumplir
 */