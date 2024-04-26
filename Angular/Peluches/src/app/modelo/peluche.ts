export class Peluche {

    static numPeluches:number=0;
    id:number;

    constructor(
        public nombre:string, 
        public marca:string, 
        public precio:number,
        public imagenUrl:string) {
        

        Peluche.numPeluches++;
        this.id=Peluche.numPeluches;
    }
    
    
}

