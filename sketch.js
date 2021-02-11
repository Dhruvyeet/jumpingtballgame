var canvas;
var music;
var box1 , box2, box3, box4
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(0,580,360,30)
    box1.shapeColor="blue"
    box2 = createSprite(295,580,200,30)
    box2.shapeColor="red"
    box3 = createSprite(515,580,200,30)
    box3.shapeColor="green"
    box4 = createSprite(740,580,220,30)
    box4.shapeColor="orange"
    ball = createSprite(400,100,40,40)
    ball.shapeColor="white"
    //create box sprite and give velocity
    ball.velocityX=4
    ball.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(ball.isTouching(box1)){
    ball.shapeColor="blue"
    ball.bounceOff(box1)
}
if(ball.isTouching(box2)){
    ball.shapeColor="red"
    ball.bounceOff(box2)
}
if(ball.isTouching(box3)){
    ball.shapeColor="green"
    ball.bounceOff(box3)
}
if(ball.isTouching(box4)){
    ball.shapeColor="orange"
    ball.bounceOff(box4)
}

    //add condition to check if box touching surface and make it box
}
