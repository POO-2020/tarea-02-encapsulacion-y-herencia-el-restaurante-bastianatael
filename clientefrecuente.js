import Cliente from "./cliente.js"
export default class clienteFrecuente extends Cliente{

    constructor({nombre, direccion, tel, nocliente, fechRegis})
    {
        super({nombre, direccion, tel})
        this._ncliente = nocliente
        this.fechaRegistro = fechRegis
    }



    getPerfil()
    {
        return (`${this._ncliente}, ${this.fechaRegistro.getFecha()}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`)
    }
}