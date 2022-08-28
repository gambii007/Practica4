//This
//palabra reservada

const reservacion = {
    nombre: 'Fernando',
    apellido: 'Gamboa',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${reservacion.total}`);
    }
}

/**
 * Se puede poner this para referirse a los datos locales con los que trabaja, pero igual se puede poner reservacion
 * pero usar reservacion, es innecesario ya que se trabaj de manera local
*/

/**
 * usar function dentro del objeto, trabaja de manera local con los datos en el objeto, pero,
 * implentar un arrow trabajara de manera global con la ventana de windos, es decir,
 * los datos que consultara seran los globales no los locales.
 */
reservacion.informacion();