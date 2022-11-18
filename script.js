

var arr=[["./img/PacMan1.png","./img/PacMan2.png"],["./img/PacMan3.png","./img/PacMan4.png"]]
var position=0;
var focus=0;
var getArray=["./img/PacMan1.png","./img/PacMan2.png"];
function run(){
    
    let img=document.getElementById("PacMan");
    focus=(focus+1)%2;
    img.src=arr[direction][focus];
    position=position+20;
    PacMan.style.left=positionx+"px";
}
setInterval(run,100);

var velocityx=15;
var velocityy=10;
var positionx=0;
var positiony=0;
var maxx=1200;
var minx=0;
var direction=0;

function pacman(){
    if(direction){
        positionx=positionx-velocityx;
        PacMan.style.left=positionx +"px";
        if (positionx<=minx) direction=0;
    }
    else{
        positionx=positionx+velocityx;
        PacMan.style.left=positionx +"px";
        if (positionx>=maxx) direction=1;
    }
   
}

setInterval(pacman,50);