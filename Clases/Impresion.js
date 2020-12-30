class Impresion {
    constructor(vehiculos) {
        this.lista = this.imprimirLista(vehiculos);
        this.informe = this.imprimirInforme(vehiculos);
        this.ordenamiento = this.imprimirOrdenamiento(vehiculos);
    }
    imprimirResultados() {
        console.log(this.lista);
        console.log("=============================");
        console.log(this.informe);
        console.log("=============================");
        console.log(this.ordenamiento);
    }

    imprimirLista(vehiculos) {
        let cadena = '';
        for(let item of vehiculos) {
            cadena += "\n" + item.marca.getInfo() + " // " + item.getInfo();
        }
        return cadena;
    }

    // Imprime vehiculo mas caro, mas barato y que contiene letra 'y' en modelo //
    imprimirInforme(vehiculos) {
        let mayor = 0;
        let indexMay = 0;
        let menor = vehiculos[0].getPrecio();
        let indexMen = 0;
        let indexY = 0;
        for(let i = 0; i < vehiculos.length; i++) {            
            // Buscando Mayor Precio//
            if (vehiculos[i].getPrecio() > mayor) {
                mayor = vehiculos[i].getPrecio();
                indexMay = i;
            }

            // Bucando Menor Precio //
            if (vehiculos[i].getPrecio() < menor) {
                menor = vehiculos[i].getPrecio();
                indexMen = i;
            }

            // Buscando modelos con letra 'Y' //
            let marca = vehiculos[i].getMarca();
            let modelo = marca.getModelo();
            // Esto se puede optimizar en el caso de existan mas modelos con 'Y' //
            if (modelo.indexOf("Y") > -1) {
                indexY = i;
            }
        }

        let marcaMay = vehiculos[indexMay].getMarca();
        let marcaMen = vehiculos[indexMen].getMarca();
        let marcaY = vehiculos[indexY].getMarca();

        return "Vehiculo mas caro: " + marcaMay.getNombre() + " " + marcaMay.getModelo() +
            "\nVehiculo mas barato: " + marcaMen.getNombre() + " " + marcaMen.getModelo() +
            "\nVehículo que contiene en el modelo la letra 'Y': " + marcaY.getNombre() + " " + marcaY.getModelo() +
            " " + new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(vehiculos[indexY].getPrecio());
    }

    // Ordenamiento por precio decreciente //
    imprimirOrdenamiento (vehiculos) {
        for(let i = 0; i < vehiculos.length-1; i++) {
            for(let j = i + 1; j < vehiculos.length; j++) {
                if (vehiculos[i].getPrecio() < vehiculos[j].getPrecio()) {
                    let aux = vehiculos[i];
                    vehiculos[i] = vehiculos[j];
                    vehiculos[j] = aux;
                }
            }
        }
        
        let cadena = '';
        for (let item of vehiculos) {
            cadena += "\n" + item.getMarca().getNombre() + " " + item.getMarca().getModelo();
        }

        return "Vehículos ordenados por precio de mayor a menor:" + cadena;
    }
}

export { Impresion };