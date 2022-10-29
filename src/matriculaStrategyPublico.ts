import { MatriculaStrategy } from "./matriculaStrategy";

export class MatriculaStrategyPublico implements MatriculaStrategy {
    MATRICULA = 0.05;
    DEPRECIACION = 0.20;

    public calcularMatricula(valorOriginal: number, anioCalculo: number, anioAuto: number): number {
        let tiempo_depreciacion = anioCalculo - anioAuto;
        let depreciacion = tiempo_depreciacion * this.DEPRECIACION;
        let avaluo = valorOriginal - depreciacion;
        let matricula = avaluo * this.MATRICULA;
        return matricula;
    }


}