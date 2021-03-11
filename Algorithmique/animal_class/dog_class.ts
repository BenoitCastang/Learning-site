import {Animal} from "./animal_class.js";

export class Dog extends Animal {
    public bark(): string {
        return this.mName+' is barking.';
    }
}