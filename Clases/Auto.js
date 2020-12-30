import { Vehiculo } from './Vehiculo.js';

class Auto extends Vehiculo {
    constructor(vehiculo) {
        super(vehiculo);
        this.puertas = vehiculo.puertas;
    }
    
    getInfo() {
        return "Puertas: " + this.puertas + " // " + super.getInfo();
    }
}

export { Auto };