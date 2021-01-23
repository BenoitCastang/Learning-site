/* Ceci est un fichier javascript : ouvre la console, débilos ! */

let textConsole;
textConsole = "sans toucher la Corse";
console.log(textConsole);

const textConsole2 = "et tu casses !"
console.log(textConsole2);

const textConsole3 = 'c\'est beau mais c\'est loin !'
console.log(textConsole3);

console.log(typeof(textConsole));

let a=5;
let b=10;
let c=3;

console.log((a+b)*(a-b));
console.log(a%c);
a **=c;
console.log(a);

let firstname = 'Hélène. ';
let message = 'Je suis une fille comme les autres '
let concat='Hélène, je m\'appelle '+ firstname + message + 
'🎵';
console.log(concat);

console.log(2 === '2');
console.log(2 !== '2');

if(a===b){
    console.log('a vaut b');
}

if(a!=b){
    console.log('a différent de b');
}

a=10
console.log(a);
if(a!=b){
    console.log('a différent de b');
} else {
    console.log('a vaut b');
}

let y=10;
do {
    console.log(y);
    y--
} while (y>1)

let x=(-5);
while(x<16){
    if (x>-10 && x<0 || x>10){
        console.log('Pour x =' + x + 'alors (-10)<x<0 ou x>10');    
    } else if (!(x>=-11)){
        console.log('Pour x =', x, 'alors x<=11');
    } else if (x>0 && x<10) {
        console.log('Pour x =', x, 'alors 0<x<10');
    }
    x++
}

for(let i=0; i<=10; i++){
    if(i>3 && i<8){
        continue;
    }
    else if(i==10){
        console.log('Je refuse de dire qu\'i est égale à 10');
        break;
    }
    console.log('i=' + i);
}

function random(){

}
function add(x,y,z,a){
    console.log('Pour x='+x+', y='+y+' et z='+z+' alors :')
    console.log('x+y=' + (x+y));
    console.log('x+y+z=' + (x+y+z));
    a*=z
    console.log('a*z=' + a);
}
add(5,2,3,Math.random());

function moyenne(a,b,c){
    return(a+b+c)/3;
}

const m1=moyenne(10,15,20);
let m2=moyenne(24, 65, 78);
var m3=moyenne(45, 67, 555555);

console.log(m1,m2,m3);
let moyenne_des_moyennes=moyenne(m1,m2,m3);
console.log(moyenne_des_moyennes);

let moi = {
    name: 'Castang',
    firstname: 'Benoit',
    age: 23,
    traction: 1,
    bonjour: function(){
        console.log('Bonjour '+this.firstname+' '+this.name+' ! Tu as grossi !');
    }
};

console.log(moi);
console.log(moi.firstname);
moi.traction++;
console.log(moi.traction);
moi.bonjour();

//Constructeur d'objets
function Person(n,f,a,w,t){
    this.name=n;
    this.firstname=f;
    this.age=a;
    this.weight=w;
    this.traction=t;
    this.bonjour=function(){
        console.log('Bonjour '+this.firstname+' '+this.name
        +'. Tu pèses '+this.weight+' kilos ! Tu as grossi ! Fais donc '+this.traction+' tractions !');
    }
}

let robert = new Person('Robert','Dupont',70,100,20);
console.log(robert);
robert.bonjour();

let chn=new String("Another text");
console.log(chn);
let str='text example';
let substr='x';
if (str.includes(substr)){
    console.log(str+' has an '+substr);
}

console.log(str.substring(5,12));
console.log(str.indexOf('m')+' et '+str.lastIndexOf('t'));
console.log(str.indexOf('w'));

let nb=new Number(5);
console.log(nb);
let nb2=7;
console.log(nb2);
console.log(Number.isNaN(nb2));

//Arrondir les nombres, à l'entier sup, inf, ou en coupant les chiffres après la virgule)
console.log(Math.round(8.6));
console.log(Math.floor(8.5));
console.log(Math.ceil(8.5));
console.log(Math.trunc(8.6));
function dice(){
    console.log(Math.ceil(Math.random()*6));
}
dice();

let tab1=new Array(2,6,8,5);
let tab2=["texte",30,true,["txt",10]];
console.log(tab2[0]);
console.log(tab1);
for (let i=0; i<tab2.length; i++){
    console.log(tab2[i]);
}

//for of sert à tout afficher
for (let elt of tab1){
    console.log(elt);
}

let person = {
    name: "Masse",
    firstname: "Quentin",
    age: 30,
    traction: 0,
    bonjour: function () {
        console.log("Bonjour " + this.firstname + ", tu as " + this.age + " ans");
    }
};
for (let propriete in person) {
    console.log(propriete);
    console.log(person[propriete]); // OK / Exemple : person["name"] affiche "Masse"
    console.log(person.propriete); // N'existe pas de propriété qui s'appelle propriete dans mon objet
}

let tab3=new Array(3,7,9,4);
console.log((tab3[0]+tab3[1]+tab3[2]+tab3[3])/4);

function moytable(table){
    let somme=0;
    let moyenne=0;
    for (let i=0; i<table.length; i++){
        console.log('nombre de notes='+i);
        console.log('somme des notes='+somme);
        console.log('moyenne des notes='+moyenne);                                                                                                                                                                          
        somme=table[i]+somme;
        moyenne=somme/(i+1);
        console.log('nouveau nombre de notes='+(i+1));
        console.log('nouvelle somme des notes='+somme);
        console.log('nouvelle moyenne='+moyenne);
    }
    console.log(moyenne);
    return moyenne;
}
moytable(tab3);

let list = [5,11,7];
sumofelements=0
for(let element of list){
    console.log(element);
    sumofelements+=element;
    console.log(sumofelements);

}

let tab5=[0,1,2,3,7,9,75,99,44];
//ajout ou retrait d'éléments
tab5.push(4);
console.log(tab5);
tab5.pop();
console.log(tab5);
tab5.unshift(5);
console.log(tab5);
tab5.shift();
console.log(tab5);
//tab.splice(a,b,c);a=position modif;b=combien de modif;c=modif)
tab5.splice(1,0,25);
console.log(tab5);
tab5.splice(3,2,88);
console.log(tab5);
tab5.splice(2,2);
console.log(tab5.join(" - "));
console.log(tab5.slice(2,6));
console.log(tab5.includes(75));

console.log(document);
console.log(document.querySelector("tr"));
console.log(document.querySelector("#table1"));
console.log(document.querySelector(".blue-th"));
console.log(document.querySelectorAll("td"));
console.log(document.querySelectorAll("td").length);
console.log(document.querySelector("#table1").textContent);
console.log(document.querySelector("#table1").innerHTML);
console.log(document.querySelector("tbody tr").nextElementSibling);
console.log(document.querySelector("tr").firstElementChild);
console.log(document.querySelector("tr").lastElementChild);
console.log(document.querySelector("tr").parentNode);

let newElement=document.createElement("p");
newElement.textContent="Je suis un paragraphe rajouté grâce à JS";
newElement.style.color="red";
newElement.style.backgroundColor='green';
document.body.prepend(newElement);
document.querySelector("p").remove();

document.querySelector('button').addEventListener("click",function(e){
    console.log("button clicked")
    let newElement=document.createElement("p");
    newElement.textContent="Clicking on the button is forbidden but you can't know it before you did.";
    document.body.insertBefore(newElement,document.querySelector("button"));
    let newElement2=document.createElement("p");
    newElement2.textContent="Your death has come !";
    document.body.append(newElement2);
});

document.querySelector('button').addEventListener("mouseover",function(e){console.log("button selected")});
document.querySelector('button').addEventListener("mouseout",function(e){console.log("button unselected")});