import { MatriculaStrategy } from "./matriculaStrategy";

export class Matricula {


    constructor(
        public anioAuto: number,
        public valorOriginal: number,
        public anioCalculo: number,
        public strategy: MatriculaStrategy,
    ) { }


    public setStrategy(strategy: MatriculaStrategy) {
        this.strategy = strategy;
    }
  

}