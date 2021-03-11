import { Animal } from "./animal_class.js";
export class Dog extends Animal {
    bark() {
        return this.mName + ' is barking.';
    }
}
