// class Fighter {
//     private _name: string;
//     private _life: number;
//     private _strength: number;
//     get name() {
//         return this._life;
//     }
//     set name(newName:string) {
//         this._name = newName;
//     }
//     get strength() {
//         return this._life;
//     }
//     set strength(newStrength:number) {
//         this._strength = newStrength;
//     }
//     get life() {
//         return this._life;
//     }
//     set life(pLife:number) {
//         this._life = pLife;
//     }
//     // public getLife(): number
//     // {
//     //     return this._life;
//     // }
//     // public setLife(pLife:number):void
//     // {
//     //     this._life = pLife;
//     // }
//     display() {
//         console.log(`${this._name} has ${this._life} life points and ${this._strength} of strength.`);
//     }
//     // hit(opponent: Fighter) {
//     //     opponent.life -= this._strength;
//     //     opponent.setLife( opponent.getLife() - this._strength);
//     // }
// }

// const ryu = new Fighter;
// const ken = new Fighter;
// ryu.name = 'Ryu';
// ryu.life = 100;
// ryu.strength = 20;
// ryu.display();
// ken.name = 'Ken';
// ken.life = 100;
// ken.strength = 15;
// ken.display();
// ken.hit(ryu);
// ryu.display();
// ken.display();