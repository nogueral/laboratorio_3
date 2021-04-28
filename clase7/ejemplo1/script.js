import {Mascota} from "./mascota.js"
import {Animal} from "./animal.js"

const a = new Animal("vaca", 5);
const b = new Mascota("Bobby", "Perro", 3, true);

console.log(a);
console.log(b);

console.log(a.presentarse());
console.log(b.presentarse());

b.informarHambre();
//a.informarHambre(); el animal no hereda de mascota