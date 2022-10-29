import { Matricula } from "./matricula";
import { MatriculaStrategyMixto } from "./matriculaStrategyMixto";
import { MatriculaStrategyParticulares } from "./matriculaStrategyParticulares";
import { MatriculaStrategyPublico } from "./matriculaStrategyPublico";

console.log("Matricula Mixto ");
const matricula = new Matricula(2010, 100000, 2020, 
    new MatriculaStrategyMixto());
console.log(matricula.strategy.calcularMatricula(matricula.valorOriginal, matricula.anioCalculo, matricula.anioAuto));

console.log("Matricula Particular");
const matricula2 = new Matricula(2010, 100000, 2020, 
    new MatriculaStrategyParticulares());
console.log(matricula2.strategy.calcularMatricula(matricula2.valorOriginal, matricula2.anioCalculo, matricula2.anioAuto));

console.log("Matricula Publico");
const matricula3 = new Matricula(2010, 100000, 2020, 
    new MatriculaStrategyPublico());
console.log(matricula3.strategy.calcularMatricula(matricula3.valorOriginal, matricula3.anioCalculo, matricula3.anioAuto));



console.log('');

