import {Lista} from './Lista.js';
import {Impresion} from './Impresion.js';

class App {
    constructor() {
        this.lista = new Lista();
        this.impresion = new Impresion(this.lista.getDatos());
    }

    startApp() {
        // Imprimiendo informes //
        this.impresion.imprimirResultados();
    }
}

export { App };

