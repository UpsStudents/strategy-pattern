export interface MatriculaStrategy {
    MATRICULA: number;
    DEPRECIACION: number;
    calcularMatricula(valorOriginal: number, anioCalculo: number, anioAuto: number): number;
}