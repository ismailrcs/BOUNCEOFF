
var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 200, 50, 30);
  movingRect.debug =true;
  movingRect.shapeColor="green"

  fixedRect = createSprite(200,200,50,80)
  fixedRect.debug =true;
  fixedRect.shapeColor ='green'
  
  movingRect.velocityX=+3;

  fixedRect.velocityX=-3;

}

function draw() {
  background(0);  
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 )
    {
   
    movingRect.velocityX=movingRect.velocityX+1;
    fixedRect.velocityX=fixedRect.velocityX-1;
  
  }

  else if(fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2)
  {

    movingRect.velocityX=movingRect.velocityX-1;
    fixedRect.velocityX=fixedRect.velocityX+1;
  

  }



  // if(movingRect.y<movingRect.height/2+fixedRect.height/2&&
    // movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2) {
      // movingRect.velocityX=-5;
      // movingRect.velocityY=-5;
    //}

drawSprites();
}