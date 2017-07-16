export class Saw{

    model: string;
    serial: string;
    descr: string;

    constructor(model: string, serial: string ){
        this.model = model;
        this.serial = serial;
        this.descr = this.model + ' ' + this.serial
    }
}