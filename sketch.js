var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var bg;
function preload(){
    // load sound here
    music = loadSound("music.mp3")
   
        bg = loadImage("rainbow.png")
    
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,190,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(500, 580, 190, 30);
    block3.shapeColor = "red";

    block4 = createSprite(700, 580, 190, 30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 12;
    ball.velocityY = 12;
    //write code to add velocityX and velocityY

}

function draw() {
    background(bg);

    edges=createEdgeSprites();
    ball.bounceOff(edges);
  
   camera.position.x=ball.x;
    camera.position.y = ball.y;
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor = "blue";
      music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY =0;
        //write code to stop music
        music.stop();
        fill("red")
        textSize(28)
        text("Game Over ",50, 500)
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
    ball.shapeColor = "red";
   music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
    ball.shapeColor = "green"
   music.play();
    }




    drawSprites();
}
