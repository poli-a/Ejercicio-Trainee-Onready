import { Vehiculo } from './Vehiculo.js';

class Moto extends Vehiculo {
    constructor(vehiculo) {
        super(vehiculo);
        this.cilindrada = vehiculo.cilindrada;
    }
    
    getInfo() {
        return "Cilindrada: " + this.cilindrada + " // " + super.getInfo();
    }
}

export { Moto };