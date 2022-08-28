//Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    returnPrecio(nombre) {
        return `El precio del producto solicitado es: ${this.precio}`;
    }
}

const producto2 = new Producto('Monitos curvo de 49"', 800);
const producto3 = new Producto('celular"', 450);

class Libro extends Producto {
    constructor(nombre, precio,isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '65564564');
console.log(libro.formatearProducto());
console.log(producto2.returnPrecio());

//Evitar duplicar codigo