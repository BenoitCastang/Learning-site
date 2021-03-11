class Fighter {
    set name(newName) {
        this._name = newName;
    }
    set life(newLife) {
        this._life = newLife;
    }
    get life() {
        return this._life;
    }
    set strength(newStrength) {
        this._strength = newStrength;
    }
    display() {
        console.log(`${this._name} has ${this._life} life points and ${this._strength} of strength.`);
    }
    hit(opponent) {
        opponent.life -= this._strength;
    }
}
const ryu = new Fighter;
const ken = new Fighter;
ryu.name = 'Ryu';
ryu.life = 100;
ryu.strength = 20;
ryu.display();
ken.name = 'Ken';
ken.life = 100;
ken.strength = 15;
ken.display();
ken.hit(ryu);
ryu.display();
ken.display();
// ryu.hit(ken);
// console.log(ryu,ken);
// class Voiture
// {
//     private couleur: string;
//     public nom: string;
//     calculer(x: number, y: number)
//     {
//         return x * y ;
//     }
// }
// const ferrari= new Voiture;
// ferrari.nom = "ferrari";
// // ferrari.couleur = "rose";
// console.log(ferrari)
// console.log(ferrari.calculer(5,10));
// document.write(ferrari.nom) 
