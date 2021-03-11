// Ceci est un fichier javascript : ouvre la console, débilos !

// let textConsole;
// textConsole = "sans toucher la Corse";
// console.log(textConsole);

// const textConsole2 = "et tu casses !"
// console.log(textConsole2);

// const textConsole3 = 'c\'est beau mais c\'est loin !'
// console.log(textConsole3);

// console.log(typeof(textConsole));

// let a=5;
// let b=10;
// let c=3;

// console.log((a+b)*(a-b));
// console.log(a%c);
// a **=c;
// console.log(a);

// let firstname = 'Hélène. ';
// let message = 'Je suis une fille comme les autres '
// let concat='Hélène, je m\'appelle '+ firstname + message + 
// '🎵';
// console.log(concat);

// console.log(2 === '2');
// console.log(2 !== '2');

// if(a===b){
//     console.log('a vaut b');
// }

// if(a!=b){
//     console.log('a différent de b');
// }

// a=10
// console.log(a);
// if(a!=b){
//     console.log('a différent de b');
// } else {
//     console.log('a vaut b');
// }

// let y=10;
// do {
//     console.log(y);
//     y--
// } while (y>1)

// let x=(-5);
// while(x<16){
//     if (x>-10 && x<0 || x>10){
//         console.log('Pour x =' + x + 'alors (-10)<x<0 ou x>10');    
//     } else if (!(x>=-11)){
//         console.log('Pour x =', x, 'alors x<=11');
//     } else if (x>0 && x<10) {
//         console.log('Pour x =', x, 'alors 0<x<10');
//     }
//     x++
// }

// for(let i=0; i<=10; i++){
//     if(i>3 && i<8){
//         continue;
//     }
//     else if(i==10){
//         console.log('Je refuse de dire qu\'i est égale à 10');
//         break;
//     }
//     console.log('i=' + i);
// }

// function random(){

// }
// function add(x,y,z,a){
//     console.log('Pour x='+x+', y='+y+' et z='+z+' alors :')
//     console.log('x+y=' + (x+y));
//     console.log('x+y+z=' + (x+y+z));
//     a*=z
//     console.log('a*z=' + a);
// }
// add(5,2,3,Math.random());

// function moyenne(a,b,c){
//     return(a+b+c)/3;
// }

// const m1=moyenne(10,15,20);
// let m2=moyenne(24, 65, 78);
// var m3=moyenne(45, 67, 555555);

// console.log(m1,m2,m3);
// let moyenne_des_moyennes=moyenne(m1,m2,m3);
// console.log(moyenne_des_moyennes);

// let moi = {
//     name: 'Castang',
//     firstname: 'Benoit',
//     age: 23,
//     traction: 1,
//     bonjour: function(){
//         console.log('Bonjour '+this.firstname+' '+this.name+' ! Tu as grossi !');
//     }
// };

// console.log(moi);
// console.log(moi.firstname);
// moi.traction++;
// console.log(moi.traction);
// moi.bonjour();

// //Constructeur d'objets
// function Person(n,f,a,w,t){
//     this.name=n;
//     this.firstname=f;
//     this.age=a;
//     this.weight=w;
//     this.traction=t;
//     this.bonjour=function(){
//         console.log('Bonjour '+this.firstname+' '+this.name
//         +'. Tu pèses '+this.weight+' kilos ! Tu as grossi ! Fais donc '+this.traction+' tractions !');
//     }
// }

// let robert = new Person('Robert','Dupont',70,100,20);
// console.log(robert);
// robert.bonjour();

// let chn=new String("Another text");
// console.log(chn);
// let str='text example';
// let substr='x';
// if (str.includes(substr)){
//     console.log(str+' has an '+substr);
// }

// console.log(str.substring(5,12));
// console.log(str.indexOf('m')+' et '+str.lastIndexOf('t'));
// console.log(str.indexOf('w'));

// let nb=new Number(5);
// console.log(nb);
// let nb2=7;
// console.log(nb2);
// console.log(Number.isNaN(nb2));

// //Arrondir les nombres, à l'entier sup, inf, ou en coupant les chiffres après la virgule)
// console.log(Math.round(8.6));
// console.log(Math.floor(8.5));
// console.log(Math.ceil(8.5));
// console.log(Math.trunc(8.6));
// function dice(){
//     console.log(Math.ceil(Math.random()*6));
// }
// dice();

// let tab1=new Array(2,6,8,5);
// let tab2=["texte",30,true,["txt",10]];
// console.log(tab2[0]);
// console.log(tab1);
// for (let i=0; i<tab2.length; i++){
//     console.log(tab2[i]);
// }

// //for of sert à tout afficher
// for (let elt of tab1){
//     console.log(elt);
// }

// let person = {
//     name: "Masse",
//     firstname: "Quentin",
//     age: 30,
//     traction: 0,
//     bonjour: function () {
//         console.log("Bonjour " + this.firstname + ", tu as " + this.age + " ans");
//     }
// };
// for (let propriete in person) {
//     console.log(propriete);
//     console.log(person[propriete]); // OK / Exemple : person["name"] affiche "Masse"
//     console.log(person.propriete); // N'existe pas de propriété qui s'appelle propriete dans mon objet
// }

// let tab3=new Array(3,7,9,4);
// console.log((tab3[0]+tab3[1]+tab3[2]+tab3[3])/4);

// function moytable(table){
//     let somme=0;
//     let moyenne=0;
//     for (let i=0; i<table.length; i++){
//         console.log('nombre de notes='+i);
//         console.log('somme des notes='+somme);
//         console.log('moyenne des notes='+moyenne);                                                                                                                                                                          
//         somme=table[i]+somme;
//         moyenne=somme/(i+1);
//         console.log('nouveau nombre de notes='+(i+1));
//         console.log('nouvelle somme des notes='+somme);
//         console.log('nouvelle moyenne='+moyenne);
//     }
//     console.log(moyenne);
//     return moyenne;
// }
// moytable(tab3);

// let list = [5,11,7];
// sumofelements=0
// for(let element of list){
//     console.log(element);
//     sumofelements+=element;
//     console.log(sumofelements);

// }

// let tab5=[0,1,2,3,7,9,75,99,44];
// //ajout ou retrait d'éléments
// tab5.push(4);
// console.log(tab5);
// tab5.pop();
// console.log(tab5);
// tab5.unshift(5);
// console.log(tab5);
// tab5.shift();
// console.log(tab5);
// //tab.splice(a,b,c);a=position modif;b=combien de modif;c=modif)
// tab5.splice(1,0,25);
// console.log(tab5);
// tab5.splice(3,2,88);
// console.log(tab5);
// tab5.splice(2,2);
// console.log(tab5.join(" - "));
// console.log(tab5.slice(2,6));
// console.log(tab5.includes(75));

// console.log(document);
// console.log(document.querySelector("tr"));
// console.log(document.querySelector("#table1"));
// console.log(document.querySelector(".blue-th"));
// console.log(document.querySelectorAll("td"));
// console.log(document.querySelectorAll("td").length);
// console.log(document.querySelector("#table1").textContent);
// console.log(document.querySelector("#table1").innerHTML);
// console.log(document.querySelector("tbody tr").nextElementSibling);
// console.log(document.querySelector("tr").firstElementChild);
// console.log(document.querySelector("tr").lastElementChild);
// console.log(document.querySelector("tr").parentNode);

// let newElement=document.createElement("p");
// newElement.textContent="Je suis un paragraphe rajouté grâce à JS";
// newElement.style.color="red";
// newElement.style.backgroundColor='green';
// document.body.prepend(newElement);
// document.querySelector("p").remove();

// document.querySelector('button').addEventListener("click",function(e){
//     console.log("button clicked")
//     let newElement=document.createElement("p");
//     newElement.textContent="Clicking on the button is forbidden but you can't know it before you did.";
//     document.body.insertBefore(newElement,document.querySelector("button"));
//     let newElement2=document.createElement("p");
//     newElement2.textContent="Your death has come !";
//     document.body.append(newElement2);
// });

// document.querySelector('button').addEventListener("mouseover",function(e){console.log("button selected")});
// document.querySelector('button').addEventListener("mouseout",function(e){console.log("button unselected")});

// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
// console.log('%cExo  1 :', 'color: red');
// for (let i=0 ; i<50 ; i++) {
//     console.log('bonjour');
//   }
  
// // Exercice 2 : écrire dans la console :
// // A
// // B
// // A
// // B
// // A
// // B
// // A
// // B
// // A
// // B

// console.log('%cExo  2 :', 'color: red');
// for (let i=0 ; i<5 ; i++) {
//     console.log('A');
//     console.log('B');
// }

// // Exercice 3 : écrire dans la console :
// // A
// // A
// // A
// // A
// // A
// // B
// // A
// // A
// // A
// // A
// // A
// // B
// // A
// // A
// // A
// // A
// // A
// // B

// console.log('%cExo  3 :', 'color: red');
// for (let i=0 ; i<3 ; i++) {
//     for (let j=0 ; j<5 ; j++) {
//         console.log('A');
//     }
//     console.log('B');
// }

// // Exercice 4 : écrire dans la console :
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9

// console.log('%cExo  4 :', 'color: red');
// let a=0;
// for (let i=0 ; i<10 ; i++) {
//     console.log(a);
//     a++;
// }

// // Exercice 5 : écrire dans la console :
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
// // 11

// console.log('%cExo  5 :', 'color: red');
// let b=3;
// for (let i=0 ; i<9 ; i++) {
//     console.log(b);
//     b++;
// }

// // Exerice 6 : écrire dans la console :
// // 0
// // 1
// // 2
// // 3
// // 0
// // 1
// // 2
// // 3
// // 0
// // 1

// // console.log('%cExo  6 :', 'color: red');
// // let c=0;
// // for (let i=0 ; i<12 ; i++) {
// //     if(c<4) {
// //         console.log(c);
// //         c++;
// //     }
// //     else {
// //         c=0;
// //     }
// // }

// for (let i=0 ; i<10 ; i++) {
//     console.log(i%4);
// }
// // Exercice 7 : écrire dans la console :
// // 0
// // 1
// // 2
// // 3
// // 4
// // A
// // A
// // A
// // 8
// // 9

// // pq ça marche pas avec deux if ?
// console.log('%cExo  7 :', 'color: red');
// let d=0;
// for (let i=0 ; i<10 ; i++) {
//     if(d<5) {
//         console.log(d);
//         d++;
//     }
//     else if(d>7) {
//         console.log(d);
//         d++;
//     }
//     else {
//         console.log('A');
//         d++;
//     }
// }

// // Exercice 8 : écrire dans la console :
// // 100
// // 1
// // 2
// // 103
// // 4
// // 5
// // 106
// // 7
// // 8
// // 109

// console.log('%cExo  8 :', 'color: red');
// let e=0;
// for (let i=0 ; i<10 ; i++) {
//     if(e>0 && e<3 || e>3 && e<6 || e>6 && e<9) {
//         console.log(e);
//         e++;
//     }
//     else {
//         console.log('10'+e);
//         e++;
//     }
// }

// // Exercice 9 : écrire dans la console :
// // 0
// // 101
// // 202
// // 3
// // 104
// // 205
// // 6
// // 107
// // 208
// // 9

// console.log('%cExo  9 :', 'color: red');
// let f=0;
// for (let i=0 ; i<10 ; i++) {
//     if(f==0 || f==3 || f==6 || f==9) {
//         console.log(f);
//         f++;
//     }
//     else if(f==1 || f==4 || f==7) {
//         console.log('10'+f);
//         f++;
//     }
//     else {
//         console.log('20'+f);
//         f++;
//     }
// }

// // Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dé :
// // 1 1
// // 1 2
// // 1 3
// // ...
// // 6 4
// // 6 5
// // 6 6

// // function dice(min, max) {
// //     return Math.floor(Math.random()*(max-min+1))+min;
// // }
// // console.log(dice(1, 6)+' '+dice(1,6));

// console.log('%cExo  10', 'color: red');
// for (let i=1 ; i<7 ; i++) {
//     for (let i=1 ; i<7 ; i++) {
//         console.log(i,i);
//     }
// }

// // Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).

// console.log('%cExo  11', 'color: red');
// for (let k=1 ; k<7 ; k++) {
//     for(let m=k ; m<7 ; m++) {
//         console.log(k,m);
//     }
// }

// // Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)

// console.log('%cExo  12', 'color: red');
// result=0;
// for (let k=1 ; k<21 ; k++) {
//     for(let m=k ; m<21 ; m++) {
//         result++;
//     }
// }
// console.log('On peut dénombrer '+result+' résultats différents');


// // Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// // 1x1 = 1
// // 1x2 = 2
// // 1x3 = 3
// // 1x4 = 4
// // 1x5 = 5
// // 1x6 = 6
// // 1x7 = 7
// // 1x8 = 8
// // 1x9 = 9

// console.log('%cExo  13', 'color: red');
// for (let multiple=1 ; multiple<10 ; multiple++) {
//     console.log('1x'+multiple+' = '+1*multiple);
// }

// // Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// // 2x1 = 2
// // 2x2 = 4
// // 2x3 = 6
// // 2x4 = 8
// // 2x5 = 10
// // 2x6 = 12
// // 2x7 = 14
// // 2x8 = 16
// // 2x9 = 18

// console.log('%cExo  14', 'color: red');
// for (let multiple=1 ; multiple<10 ; multiple++) {
//     console.log('2x'+multiple+' = '+2*multiple);
// }

// // Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// // 1x1 = 1
// // 1x2 = 2
// // 1x3 = 3
// // 1x4 = 4
// // ...
// // 9x7 = 63
// // 9x8 = 72
// // 9x9 = 81

// // J'ai enlevé les doublons avec let multiple=facteur
// console.log('%cExo  15', 'color: red');
// facteur=1;
// for(let facteur=1 ; facteur<10 ; facteur++) {
//     for (let multiple=facteur ; multiple<10 ; multiple++) {
//         console.log(facteur+'x'+multiple+' = '+facteur*multiple);
//     }
// }

// // Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)

// // console.log('%cExo  16', 'color: red');
// // number=0;
// // for(let i=1 ; i<101 ; i++) {
// //     number+=i;
// //     console.log(number);
// // }

// // Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253

// // console.log('%cExo  17', 'color: red');
// // number=0;
// // for(let i=1 ; ; i++) {
// //     if(number==302253) {
// //         break;
// //     }
// //     else {
// //     number+=i;
// //     console.log(number);
// //     }
// // }

// // Exercice 18 : Afficher :
// // 1
// // 1
// // 2
// // 3
// // 5
// // 8
// // 13
// // 21
// // 34
// // 55

// // console.log('%cExo  18', 'color: red');
// // function exo18(a) {
// //     result=a(a-i);
// //     console.log(result);
// // }
// // for(i=0 ; i<10 ; i++) {
// //     exo18(i);
// // }

// // Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

// console.log('%cFonction 1', 'color: red');
// function fun() {
//     console.log(17);
// }
// fun();

// // Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.

// console.log('%cFonction 2', 'color: red');
// function f2() {
//     return 17;
// }
// f2();
// console.log(f2());

// // Utiliser la fonction f1 pour afficher 17 dans la console.

// console.log('%cFonction 3', 'color: red');
// function f1(a) {
//     console.log(a);
// }
// f1(17);

// // Utiliser la fonction f2 pour afficher 17 dans la console.

// console.log('%cFonction 4', 'color: red');
// function f2() {
//     return 17;
// }
// f2();
// console.log(f2());


// // La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// // Elle retourne un nombre.


// // Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

// console.log('%cFonction 5', 'color: red');
// function f3(a) {
//     console.log(a*2);
// }
// f3(5);

// // Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.

// console.log('%cFonction 6', 'color: red');
// function f4(a) {
//     return a*2;
// }
// console.log(f4(5));

// // Utiliser la fonction f3 pour écrire dans la console le double de 99.


// console.log('%cFonction 7', 'color: red');
// function fun3(a) {
//     console.log(a*2);
// }
// fun3(99);


// // Utiliser la fonction f4 pour écrire dans la console le double de 99.

// // console.log('%cFonction 8', 'color: red');
// // function f4(a) {
// //     return a*2;
// // }
// // console.log(f4(99));

// // Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
// console.log('%cStocker double 99', 'color: red');
// a=f4(99);
// console.log(a)

// // Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

// console.log('%cFontion f5', 'color: red');
// function f5(a, b) {
//     console.log(a+b);
// }
// f5(42, 77);

// // Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

// console.log('%cFontion f6', 'color: red');
// function f6(a, b) {
//     return a+b;
// }
// console.log(f6(42, 77));

// // Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
// // Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

// // Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
// a=5;
// a+=f6(42, 77);
// console.log(a);

// // Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.

// console.log('%cFontion f7', 'color: red');
// function f7(a, b) {
//     if(a<b) {
//         console.log('b est plus grand que a');
//         return b;
//     }
//     else if(a>b){
//         console.log('a est plus grand que b');
//         return a;
//     }
//     else {
//         console.log('Les deux nombres me semblent égaux.');
//     }
// }
// f7(6, 5);

// // Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// // (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

// console.log('%cFontion f8', 'color: red');
// function f8(a, b, c) {
//     if(a>b && a>c) {
//         console.log('a est le plus grand');
//         return a;
//     }
//     else if(b>a && b>c){
//         console.log('b est le plus grand');
//         return b;
//     }
//     else if(c>a && c>b){
//         console.log('c est le plus grand');
//         return c;
//     }
//     else {
//         console.log('deux nombres sont ex aequo');
//     }
// }
// f8(6, 6, 4);



// // Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

// console.log('%cFontion f9', 'color: red');
// function f9(a, b) {
//     for(let i=0; i<b ; i++) {
//         console.log(a);
//     }
// }
// f9('voiture', 3);

// const tag = document.getElementsByTagName('h1');
// console.log(tag);

// const id = document.getElementById('firstParagraph');
// console.log(id);

// const title = document.getElementById('title');
// console.log(title);
// const txt = 

// const par = document.getElementsByTagName('p');
// console.log(par);

// const par1 = document.getElementById('firstParagraph');

// for(let i=0 ; i<par.length ; i++) {
//     console.log(par[i]);
// }
// let newNode = document.createElement('span');
// let parentDiv = document.getElementById('childElement').parentNode;
// let sp2 = document.getElementById('childElement');
// parentDiv.insertBefore(newNode,sp2);
// document.body.insertBefore(par[3],title);
// document.body.insertBefore(par1,title);
// document.body.appendChild(title);
// console.log(document.body);
// document.body.removeChild(title);
// const newTxt = document.createTextNode('New text');
// document.body.appendChild(newTxt);
// document.body.replaceChild(newTxt,par[2]);

// function addTxt(pseudo,txt) {
//     const newPar = document.createElement('p');
//     newPar.innerHTML=`<strong>${pseudo}</strong> ${txt}`;
//     // newPar.innerHTML+=" So he's happy now.";

//     // const newPseudo = document.createTextNode(pseudo);
//     // const newTxt = document.createTextNode(txt);
//     // newPar.appendChild(newPseudo);
//     // newPar.appendChild(newTxt);
//     document.body.appendChild(newPar);

// }

// addTxt('Porcellino', 'has left the chat.');

// const a = document.getElementsByTagName('a')[0];
// const link = a.getAttribute('href');
// console.log(link);
// a.setAttribute('href','https://www.youtube.com/watch?v=KDmiID_iLTE&t=77s&ab_channel=MotorSports');

// ap pour modifier tous les innierHTML de txt en "LOL HACKED"

// fonction fléchée + fonction anonyme
// console.log(Array.from([1,2,3], x => x*x));

// create array of paragraphs
// const txtArr = Array.from(par);
// console.log(txtArr);

// replace all by new txt
// txtArr.map(x => x.innerHTML = `LOL jvc t'a hacké`);
// const title = document.querySelector('#title');
// console.log(title);

// title.style.width = '400px';
// title.style.display = 'flex';
// title.style.flexDirection = 'column';
// title.style.alignItems = 'center';
// title.style.paddingLeft = '10px';
// title.style.border = 'solid 1px';
// title.style.boxShadow = '5px 5px 7px red';

// console.log(`Title element's box is ${title.clientHeight} pixels of height.`);
// console.log(`Title element's box is ${title.clientWidth} pixels of width.`);
// console.log(`Title element's box is ${title.offsetHeight} pixels of width including border.`);
// console.log(`Title element's box is ${title.offsetWidth} pixels of width including border.`);
// title.style.color = 'red';

// const par = document.querySelector('p');
// select a defined element
// const allPar = document.querySelectorAll('p')[1];
// console.log(par);
// console.log(allPar);

// function changeText1() {
//     title.classList.add('myColor');
//     title.innerHTML = `changed color`;
// }
// function changeText2() {
//     title.classList.remove('myColor');
//     title.innerHTML = `cancelled change color`;
// }
// function changeText3() {
//     title.classList.toggle('myColor');
//     title.innerHTML = `toggling change color`;
// }
// const links = document.querySelectorAll('a');
// links[0].addEventListener('click', changeText1);
// links[1].addEventListener('click', changeText2);
// links[2].addEventListener('click', changeText3);

// const titles = document.querySelectorAll('h1');
// console.log(titles[24].offsetTop);
// function goTitle(numTitle) {
//         let dist = titles[numTitle].offsetTop;
//         window.scrollTo(0,dist);
// }
// links[3].addEventListener('click', goTitle(10));

// let title = document.querySelector('h1');
// console.log(title);
// let frame = document.querySelector('div');
// console.log(frame);
// let maxHeight = frame.clientHeight;
// let maxWidth = frame.clientWidth;
// console.log(maxHeight,maxWidth);
// title.style.position = 'relative';
// let topPos = 0;
// let leftPos = 0;
// let speedH = -2;
// let speedV = -2;
// function animV() {
//     if(topPos===0) {
//         speedV*=-1;
//     }
//     else if(topPos===maxHeight-title.offsetHeight) {
//         speedV*=-1;
//     }
//     topPos+=speedV;
//     title.style.top = topPos+'px';
//     requestAnimationFrame(animV);
// }
// requestAnimationFrame(animV)

// function animH() {
//     if(leftPos===0) {
//         speedH*=-1;
//     }
//     else if(leftPos===290) {
//         speedH*=-1;
//     }
//     leftPos+=speedH;
//     title.style.left = leftPos+'px';
//     requestAnimationFrame(animH);
// }
// requestAnimationFrame(animH);


// function consoleLogEvent(event){
//     console.log(event.key);
// }
// let event = document.addEventListener('keypress',consoleLogEvent);

// addEventListener('click',function(event) {
//     // console.log(`x=${event.clientX}`,`y=${event.clientY}`);
//     let eventX = event.clientX;
//     let eventY = event.clientY;
// });

// addEventListener('mousemove',function(event) {
//     let eventX = event.clientX;
//     let eventY = event.clientY;
//     let width = 200;
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src','Vanessa.jpg');
//     newImg.setAttribute('width',width+'px');
//     document.body.appendChild(newImg);
//     newImg.style.position = 'absolute';
//     newImg.style.left = eventX-width/2+'px';
//     newImg.style.top = eventY-width/2+'px';
//     // console.log(newImg);
// });

// addEventListener('mouseout',function(){
//     let newTitle = document.createElement('h2');
//     document.body.appendChild(newTitle);    
//     newTitle.innerHTML = 'bla bla';
//     console.log(newTitle);
// });

// let input = document.querySelector('input');
// console.log(input);
// input.addEventListener('focus',function() {
//     input.style.backgroundColor = 'royalBlue';
// })
// input.addEventListener('blur',function() {
//     input.style.backgroundColor = 'white';
// })

// for(let i=0 ; i<10 ; i++) {
//     let image = document.createElement('img');
//     document.body.appendChild(image);
//     image.setAttribute('src','https://www.fillmurray.com/1080/1080');
//     image.setAttribute('id',`img${i}`);
// }
// let images = document.getElementsByTagName('img');
// imgArray = Array.from(images);
// console.log(imgArray);
// imgArray.map((images,i) => images.addEventListener('load',function() {
//     console.log(`img Num : ${i} - OK`);
// }));

// let textArea = document.querySelector('textarea');
// let button = document.querySelector('button');
// textArea.addEventListener('keyup',function(event) {
//     if(textArea.value.length>5) {
//         button.disabled = true;
//     }
// });

// const titre = document.querySelector("h1");
// const txt = setTimeout(function() {
//    titre.textContent = "SALUT C'EST COOL";
//    titre.style.opacity = 1;
//    document.body.style.background = "royalblue";

// }, 2000);

// let textArea = document.querySelector('textarea');
// // si on rentre un paramètre il prend la valeur de l'événement
// textArea.addEventListener('keyup',function(event) {
//     let textAreaArray = Array.from(event.key);
//     // console.log(textAreaArray.includes('b','c'));
//     if(textAreaArray.includes('a')===true || textAreaArray.includes('e')===true ||
//     textAreaArray.includes('i')===true || textAreaArray.includes('o')===true ||
//     textAreaArray.includes('u')===true || textAreaArray.includes('y')===true) {
//         console.log('user entered vowel');
//     }
//     else;
// });

// bar displaying scrolling statey
// scrollHeight = document.querySelector('#superScroll').scrollHeight;
// let bar = document.querySelector('.bar');
// document.addEventListener('scroll', function(event){
//     let scrollMax = scrollHeight-innerHeight;
//     let whereAreWe = (pageYOffset/scrollMax)*100;
//     bar.style.width = whereAreWe+'%';
// });

// let title = document.querySelector('#title');
// let timer = 3;
// title.value = timer;
// title.addEventListener('click', function() {
//         let countDown = setInterval(function(){
//             title.innerHTML = timer--;
//             if(timer<0) {
//                 title.innerHTML = 'Green green green';
//             };
//         },1000);
// });

// let myForm = document.querySelector('fieldset');
// let button = document.querySelector('button');
// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('OK');
//     myForm.reset;
// })

// let myText = document.querySelector('textarea');
// let div = document.querySelector('div');
// myText.addEventListener('keyup',function(event) {
//     div.innerHTML = marked(myText.value);
// });

// let textArea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textArea.value = localStorage.getItem('myText');
// localStorage.removeItem('myText');
// if (textArea.value) {
    //     div.innerHTML = marked(localStorage.getItem('myText'));
//     // }
// textArea.addEventListener('keyup',function(event) {
//     window.localStorage.setItem('myText',textArea.value);
//     div.innerHTML = marked(textArea.value);
// });
// console.log(textArea.value);
    // console.log(window);


// localStorage.clear();
// window.localStorage.value = 'ssgdst';

// console.log(window.localStorage.value);
// console.log(window.localStorage.length);
// console.log(localStorage);
// window.alert.sert
// console.log(window);
// console.log(div);

// let myStorage = window.localStorage;
// console.log(myStorage);
// console.log(window);
// let a = 5;
// let b = 2;
// let c = 3;
// let re = /ab+c/; /* OR */ let regex = new RegExp('ab+c')
// console.log();

// ----------------------------------------------------
// CLASS
// ----------------------------------------------------

// let myCar = new Object();
// myCar.maker = 'McLaren';
// myCar.model = 'formula one';
// myCar.year = 1982;
// myCar.pilot = 'Keke Rosberg';
// myCar.spoilers = ['frontWing', 'rearWing'];
// console.log(myCar.spoilers[1]);
// delete myCar.model;
// // Cette propriété existe-t-elle ?
// console.log(myCar.hasOwnProperty('pilot'));

// let myCar = {
//     maker: 'McLaren',
//     model: 'formula one',
//     year: 1982,
//     spoilers: ['frontWing', 'rearWing'],
//     pilot: {
//         name: 'Keke Rosberg',
//         teammate: 'Alain Prost'
//     }   
// };        
        
// let myCar = new Object();
// myCar.maker = 'McLaren';
// myCar.model = 'formula one';
// myCar.year = 1982;
// myCar.spoilers = ['frontWing', 'rearWing'];
// let pilot = new Object();
// pilot.name = 'Keke Rosberg';
// pilot.teammate = 'Alain Prost';
// myCar.pilot = pilot;
// console.log(myCar.pilot);
// console.log(myCar.pilot.teammate);
// delete myCar.model;
// Cette propriété existe-t-elle ?
// console.log(myCar.hasOwnProperty('pilot'));

// class Rectangle {
//   constructor(name, height, width) {
//     this.name = name;
//     this.height = height;
//     this.width = width;
//   }
// }

// Exos classes

// // var myRectangle1 = new Rectangle('myRectangle1',10,20);

// // var myRectangle2 = new Rectangle();
// // myRectangle2.name = 'myRectangle2';
// // myRectangle2.height = 5;
// // myRectangle2.width = 15;


// // console.log(new Rectangle('myRectangle1',10,20));
// // console.log(myRectangle2);

// class Empty {}
// var myEmpty = new Empty;
// myEmpty.name = 'empty1';
// console.log(myEmpty);

// // // console.log(Rectangle.height);
// // // console.log(Car);
// // // console.log(RegExp);


// class User {
//     constructor(name,age,email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
// }

// let user1 = new User('user1',17,'user1@gmail.com');
// console.log(user1);

// class Car {
//     constructor() {
//         this.engineIsRunning = false;
//     }
//     startEngine() {
//         this.engineIsRunning = true;
//     }
// }

// const myCar1 = new Car;
// // myCar1.startEngine();
// console.log(myCar1);

// class Color extends Car {
    
// }

// const myColor1 = new Color;
// // myCar1.startEngine();
// console.log(myCar1);

// ------------------------
// Calcul IMC
// ------------------------
// class IMC {
//     constructor(name,weight,height) {
//         this.name = name;
//         this.weight = weight;
//         this.height = height;
//     }
//     imc() {
//         let imc = (this.weight/this.height**2).toFixed(2);
//         return imc;
//     }
//     display() {
//         console.log(`${this.name} a un IMC de ${(this.weight/(this.height**2)).toFixed(0)}`);
//     }
// }

// let benoitIMC = new IMC('Benoît',95,1.85);
// let vanessaIMC = new IMC('Vanessa',25,1.90);
// let jeffIMC = new IMC('Jeff',200,1.20);
// let arr = [vanessaIMC,jeffIMC];
// const arrDisplay = arr.forEach(x => x.display());
// const arrDisplay = arr.map(x => x.display());

// --------------------------------------------

// Arrondir = toFixed()
// console.log((1.4554631).toFixed(0));
// let str = 'string';
// let str2 = str;
// str2.forEach(x => a);
// console.log(str2);
// console.log(String);
// console.log(Map);
// let array = new Array;
// console.log(array);
// console.log(Boolean);
// let string = new String;
// console.log(string);
// let boolean = new Boolean;
// console.log(boolean);

// ----------------------------------------------
// Bilan PME
// ----------------------------------------------

// class Employee {
//     constructor(firstName,lastName,monthsWorked,wedge) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.monthsWorked = monthsWorked;
//         this.wedge = wedge;
//     }
//     totalWedgePerEmployee() {
//         let totalWedge = this.monthsWorked*this.wedge;
//         return totalWedge;
//     }    
// }

// class Company {
//     constructor(name,team,sales,taxes,material) {
//         this.name = name;
//         this.team = team;
//         this.sales = sales;
//         this.taxes = taxes;
//         this.material = material;
//     }
//     balanceSheet() {
//         let balanceSheet = 0;
//         for(const employee of this.team) {
//             balanceSheet += employee.totalWedgePerEmployee();
//         }
//     }       
// }

// let myCompany = new Company(
//     'myCompany',
//     [new Employee('Benoît','C',30,2000),
//     new Employee('Vanessa','P',30,3000),
//     new Employee('Jeff','P',40,4000)],
//     300000,
//     20000,
//     10000
// )

// console.log(myCompany);

// let bastien = new Employee('Bastien','C',30,2000);
// console.log(bastien.totalWedgePerEmployee());
// for (const property in bastien) {
//     console.log(`${property}: ${bastien[property]}`);
// }
// // let bastienWedge = 0;
// for(const property in bastien) {
//     // bastienWedge += bastien.wedge;
//     console.log(bastien.monthsWorked*bastien.wedge);
// }

// let marwa = new Employee('Marwa','C',20,4000);
// for (const property in marwa) {
//     console.log(`${property}: ${marwa[property]}`);
// }

// let list = [bastien,marwa];
// console.log(list);
// let wedgeSum = 0;
// for(element of list) {
//     // console.log(element.wedge);
//     wedgeSum += element.wedge;
// }
// console.log(wedgeSum);

// --------------------
// for...of (arrays) et for...in (objects)
// --------------------

// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }

// const object = { a: 1, b: 2, c: 3 };
// console.log(object);
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// // const tag = document.getElementsByTagName('h1');
// // console.log(tag);

// // const id = document.getElementById('firstParagraph');
// // console.log(id);

// // const title = document.getElementById('title');
// // console.log(title);
// // const txt = 

// // const par = document.getElementsByTagName('p');
// // console.log(par);

// // const par1 = document.getElementById('firstParagraph');

// // for(let i=0 ; i<par.length ; i++) {
// //     console.log(par[i]);
// // }
// // let newNode = document.createElement('span');
// // let parentDiv = document.getElementById('childElement').parentNode;
// // let sp2 = document.getElementById('childElement');
// // parentDiv.insertBefore(newNode,sp2);
// // document.body.insertBefore(par[3],title);
// // document.body.insertBefore(par1,title);
// // document.body.appendChild(title);
// // console.log(document.body);
// // document.body.removeChild(title);
// // const newTxt = document.createTextNode('New text');
// // document.body.appendChild(newTxt);
// // document.body.replaceChild(newTxt,par[2]);

// // function addTxt(pseudo,txt) {
// //     const newPar = document.createElement('p');
// //     newPar.innerHTML=`<strong>${pseudo}</strong> ${txt}`;
// //     // newPar.innerHTML+=" So he's happy now.";

// //     // const newPseudo = document.createTextNode(pseudo);
// //     // const newTxt = document.createTextNode(txt);
// //     // newPar.appendChild(newPseudo);
// //     // newPar.appendChild(newTxt);
// //     document.body.appendChild(newPar);

// // }

// // addTxt('Porcellino', 'has left the chat.');

// // const a = document.getElementsByTagName('a')[0];
// // const link = a.getAttribute('href');
// // console.log(link);
// // a.setAttribute('href','https://www.youtube.com/watch?v=KDmiID_iLTE&t=77s&ab_channel=MotorSports');

// // ap pour modifier tous les innierHTML de txt en "LOL HACKED"

// // fonction fléchée + fonction anonyme
// // console.log(Array.from([1,2,3], x => x*x));

// // create array of paragraphs
// // const txtArr = Array.from(par);
// // console.log(txtArr);

// // replace all by new txt
// // txtArr.map(x => x.innerHTML = `LOL jvc t'a hacké`);
// const title = document.querySelector('#title');
// console.log(title);

// title.style.width = '150px';
// title.style.display = 'flex';
// title.style.flexDirection = 'column';
// title.style.alignItems = 'center';
// title.style.paddingLeft = '10px';
// title.style.border = 'solid 1px';
// title.style.boxShadow = '5px 5px 7px red';

// // console.log(`Title element's box is ${title.clientHeight} pixels of height.`);
// // console.log(`Title element's box is ${title.clientWidth} pixels of width.`);
// // console.log(`Title element's box is ${title.offsetHeight} pixels of width including border.`);
// // console.log(`Title element's box is ${title.offsetWidth} pixels of width including border.`);
// title.style.color = 'red';

// const par = document.querySelector('p');
// // select a defined element
// const allPar = document.querySelectorAll('p')[1];
// console.log(par);
// console.log(allPar);

// ---------------------


// ---------------------------------------------
// GETTERS AND SETTERS
// ---------------------------------------------

// class Car {
//   constructor(color,engine) {
//     this._color = color;
//     this.km = 0;
//     this.engine = engine;
//   }
//     start(distance) {
//         this.km += distance;
//         return this.km;
//     }
//     brake(){
//         return true;
//     }
//     goBack(backDistance) {
//         this.km -= backDistance;
//         return this.km;
//     }
//     startThenGoBack(distance,backDistance) {
//         this.start(distance);
//         this.goBack(backDistance);
//         return this.km;
//     }
//     display() {
//         document.write(`The car is ${this.color} and has travelled ${this.km}km so far thanks to its fantastic ${this.engine} engine.`);
//     }
//     get color() {
//         return this._color;
//     }
//     set color(newColor) {
//         if(newColor != 'pink') {
//             this._color = newColor;
//         }
//         else {
//             document.write('wrong color !');
//             this._color = 'black';
//         }
//     }
//   }
// const ferrari = new Car('red','V8 Cosworth');
// const maseratti = new Car('black','V12 hybrid');
// // document.write(`The Ferrari travelled ${ferrari.startThenGoBack(5,3)}km. <br />`);
// // document.write(`The Maseratti travelled ${maseratti.startThenGoBack(7,1)}km. <br />`);

// ferrari.color = "pink";
// console.log(ferrari.color);

class Student {
    constructor(age) {
        this._age = age;
        this._iq = false;
    }
    iqDecrease() {
        if(this._age <= 10) {
            return true
        }
        else {
            return false;
        }
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if(newAge >= 18) {
            this._age = newAge;
        }
        else {
            document.write('too young to study !');
        }
    }
}

let student1 = new Student(10);
student1.age = 17;
console.log(student1.age);
console.log(student1.iqDecrease());