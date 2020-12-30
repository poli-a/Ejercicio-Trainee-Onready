class Marca {
    constructor(marca) {
        this.nombre = marca.nombre;
        this.modelo = marca.modelo;
    }
    
    getInfo() {
        return "Marca: " + this.nombre + " // Modelo: " + this.modelo;
    }

    getNombre() {
        return this.nombre;
    }

    getModelo() {
        return this.modelo;
    }
}

export { Marca };