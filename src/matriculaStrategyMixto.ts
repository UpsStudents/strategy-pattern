import { MatriculaStrategy } from "./matriculaStrategy";

export class MatriculaStrategyMixto implements MatriculaStrategy {
    MATRICULA = 0.07;
    DEPRECIACION = 0.05;
    DEPRECIACION_MAYOR_5 = 0.10;

    public calcularMatricula(valorOriginal: number, anioCalculo: number, anioAuto: number): number {
        let tiempo_depreciacion = anioCalculo - anioAuto;
        let depreciacion: number;
        
        if (tiempo_depreciacion <= 5) {
            depreciacion = tiempo_depreciacion * this.DEPRECIACION;
        } else {
            depreciacion = tiempo_depreciacion * this.DEPRECIACION_MAYOR_5;
        }

        let avaluo = valorOriginal - depreciacion;
        let matricula = avaluo * this.MATRICULA;
        return matricula;
    }


}