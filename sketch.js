var astronaut, iss, issImg;
var sleep, brush, gym, eat, drink, move;

function preload(){
    sleep = loadAnimation("sleep.png");
    brush = loadAnimation("brush.png");
    gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
    eat = loadAnimation("eat1.png","eat2.png");
    drink = loadAnimation("drink1.png","drink2.png");
    bath = loadAnimation("bath1.png","bath2.png");
    issImg = loadImage("iss.png");
}
function setup(){ 
    createCanvas(800,600);
  

astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;
}
function draw(){
   background(issImg);

    drawSprites();
    if(keyDown(UP_ARROW)){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
    }
    if(keyDown(DOWN_ARROW)){
        astronaut.addAnimation("gymming",gym);
        astronaut.changeAnimation("gymming");
        astronaut.y = 500;
        astronaut.x = 400;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
            }
            if(keyDown(RIGHT_ARROW)){
                astronaut.addAnimation("eating",eat);
                astronaut.changeAnimation("eating");
                astronaut.y = 350;
                astronaut.x = 350;
                astronaut.velocityX = 0;
                astronaut.velocityY = 0;
                    }
                    if(keyDown(LEFT_ARROW)){
                        astronaut.addAnimation("bathing",bath);
                        astronaut.changeAnimation("bathing");
                        astronaut.y = 350;
                        astronaut.velocityX = 0;
                        astronaut.velocityY = 0;
                            }
}
