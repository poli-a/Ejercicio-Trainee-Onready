import { Marca } from './Marca.js';

class Vehiculo {
    constructor(vehiculo) {
        this.marca = new Marca(vehiculo.marca);
        this.precio = vehiculo.precio;
    }
    
    getInfo() {
        return "Precio: " + new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(this.precio);
    }

    getPrecio() {
        return this.precio;
    }

    getMarca() {
        return this.marca;
    }
}

export { Vehiculo };