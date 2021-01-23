"use strict";

//Niveau A-1

/*set_pos(500,500);
change_color(color.red);
forward(200);
face_right();
forward(100);

//Niveau A-2

change_color(color.yellow);
set_pos(500,500);
face_left();
forward(100);
face_down();
forward(100)
face_right();
forward(200)
face_up();
forward(200);

//Niveau A-3

change_color(color.red);
set_pos(500,500)
face_left();
forward(100);
face_right();
forward(200);
face_left();
forward(100);
face_up();
forward(100);
face_down();
forward(200);*/

//Niveau A-4

/*set_pos(500,500);
change_color(color.green);
face_right();
forward(200);
arc_left(100,180);
forward(100);
arc_right(100,180);
forward(200);*/

//Niveau A-5

/*set_pos(500,200);
change_color(color.black);
face_right();
arc_right(200,180);
arc_right(100,180);
arc_left(100,180);
arc_left(200,180);*/

//Niveau A-6

/*set_pos(500,500)
change_color(color.blue);
face_up();
forward(100);
up();
forward(100); 
down();
forward(200);*/

//Niveau A-7

/*set_pos(400, 500);
change_color(color.green);
face_down();
forward(200);
arc_left(100,180);
forward(100)
up();
forward(100);
down();
forward(200);
arc_left(100,180);
forward(100);*/

//Niveau A-8

/*set_pos(500,500);
change_color(color.red);
face_up();
forward(100);
face_right();
forward(200);
face_down();
forward(400);
face_left();
forward(100);
up();
forward(100);
face_up();
forward(100);
down();
forward(100);*/

//Niveau B-1

/*set_pos(300,300);
change_color(color.green);
face_right();
for(let i=0;i<4;i++){
    for(let j=0;j<2;j++){
        forward(100)
        face_down();
        forward(100)
        face_right()}
};*/

//Niveau B-2

/*set_pos(100,500);
change_color(color.red);
face_up();
for(let i=0;i<4;i++){
    forward(100);
    face_right();
    forward(100);
    face_down();
    forward(100);
    face_right();
    forward(100)
    face_up();
}*/

//Niveau B-3

/*set_pos(400,400)
face_right();
for(let i=0;i<4;i++){
    go_straight(200);
    right(90);
}*/

//Niveau B-4

/*set_pos(400,400);
change_color(color.aqua);
face_right();
for(let i=0;i<3;i++){
    forward(200)
    left(120)
}*/

//Niveau B-5

/*set_pos(500,500);
change_color(color.orange);
face_up();
forward(200);
for(let i=0;i<3;i++){
    change_color(color.red);
    forward(100);
    right(120);
}*/

//Niveau C-4

/*set_pos(50,500);
face_right();
for(let i=0;i<5;i++){
    change_color(color.red);
    for(let j=0;j<3;j++){
        forward(100);
        left(120);
    }
    change_color(color.orange);
    for(k=0;k<4;k++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
}*/

/*test

let rayon=parseInt(prompt("Looser !"));
set_pos(500,200);
forward(rayon);
left(rayon);
forward(rayon);*/

//Niveau C-11

/*set_pos(300,300);
face_right();
shift_color(0.5);
for(let i=0;i<6;i++){
    for(let j=0;j<6;j++){
        for(let k=0;k<3;k++){
            forward(100);
            left(120);
        }
        forward(100);
        left(60);
    }
    up();
    shift_color(0.1);
    forward(200);
    right(60);
    down();
}*/

//Niveau D-12

/*set_pos(500,500)
face_right();
set_line_width(5);
change_color(color.aqua);
let longueur=100;
for(let i=0;i<6;i++){
    for(let j=0;j<3;j++){
        forward(longueur);
        left(120);
    }
    forward(longueur);
    left(60);
    longueur=longueur+50;
}*/

//Niveau D-13

/*let rayon=40;
set_pos(500,500);
face_right();
change_color(color.fuchsia);
for(let repeat=0;repeat<8;repeat++){
    arc_right(rayon,180);
    up();
    forward(100);
    down();
    rayon=rayon+50;
}*/

//Niveau D-16

/*set_pos(500,500);
set_line_width(5);
face_down();
change_color(color.green);
forward(200);
right(120);
forward(100);
face_left();
for(let i=0;i<3;i++){
    forward(100);
    right(90);
}
left(120);
forward(100);
face_right();
up();
forward(100);
change_color(color.orange);
down();
let rayon=100;
for(let j=0;j<3;j++){
    arc_right(rayon,180);
    up();
    face_up();
    forward(100+rayon*2);
    face_right();
    down();
    rayon=rayon+100;
}*/

//Niveau E-12

/*set_pos(100,300);
face_right();
set_line_width(5);
shift_color(0.6);
function squares(longueur){
    for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            forward(longueur);
            arc_left(37.5,90);
        }
        longueur=longueur+37.5;
    }
}
squares(75);
up();
shift_color(0.18);
face_down();
forward(200);
down();
squares(75);
up();
shift_color(0.3);
face_right();
forward(500);
down();
squares(75);*/

//Jeux de Cercles

/*set_pos(500,500);
face_up();
shift_color(0);
let linewidth=220;
for(let i=0;i<5;i++){
    set_line_width(linewidth);
    linewidth=linewidth-50;
    arc_left(180,360);
    arc_right(180,360)
    shift_color(0.79);
}*/

//Spirale infernale

/*let longueur=5;
set_pos(500,500);
face_up();
shift_color(0);
for(let i=0;i<100000;i++){
    longueur=longueur*1.00025;
    forward(longueur);
    right(91);
    shift_color(0.1);
}*/

/*set_pos(450,700);
face_right();
set_line_width(2);
shift_color(0);
let angle=120;
for(let h=0;h<6;h++){
    for(let i=90;i<3;i++){
        forward(100);
        left(i);
    }
}*/

/*for(let i=90;i<3;i++){
    alert ("bonjour")
}*/

set_pos(500,500);
face_right();
set_line_width(2);
shift_color(0);
let a=100;
for(let i=0;i<7;i++){
        forward(a);
        left(60);
        a*=1.25;
}