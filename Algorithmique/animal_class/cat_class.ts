import {Animal} from "./animal_class.js";

export class Cat extends Animal {
    public meow(): void {
        console.log('The cat is meowing.')
    }
}