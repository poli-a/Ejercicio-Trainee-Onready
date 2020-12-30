import { Auto } from './Auto.js';
import { Moto } from './Moto.js';

class Lista {
    constructor() {
        this.datos = this.cargarLista();
    }

    getDatos() {
        return this.datos;
    }

    cargarLista() {
        let datos = [{
            marca: {
                nombre: 'Peugeot',
                modelo: '206'
            },
            puertas: 4,
            precio: 200000.00
        }, {
            marca: {
                nombre: 'Honda',
                modelo: 'Titan'
            },
            cilindrada: '125cc',
            precio: 60000
        }, {
            marca: {
                nombre: 'Peugeot',
                modelo: '208'
            },
            puertas: 5,
            precio: 250000
        }, {
            marca: {
                nombre: 'Yamaha',
                modelo: 'YBR'
            },
            cilindrada: '160cc',
            precio: 80500.50
        }];

        let vehiculos = [];

        for(let vehiculo of datos) {
            if (vehiculo.puertas) {
                let auto = new Auto(vehiculo);
                vehiculos.push(auto);
            } else {
                let moto = new Moto(vehiculo);
                vehiculos.push(moto);
            }
        }

        return vehiculos;
    }
}

export { Lista };