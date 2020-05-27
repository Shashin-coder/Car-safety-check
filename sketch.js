var car,wall,Speed,weight;





function setup() {
  createCanvas(1400,400);
  car=createSprite(50,200,30,20)
  
wall=createSprite(1300,200,60,height/2);

Speed=random(70,200);
weight=random(500,3000)

}

function draw() {
  background(0); 
  
 car.velocityX=Speed;

 
  if(wall.x-car.x < car.width/2+wall.width/2 ){
      car .velocityX=0;
   var destruction=0.5*Speed*weight/22500;
   fill("red")
 textSize(50);
 text(Math.round(destruction),100,100)
   
   if(destruction>=1) {
     car.shapeColor=color(0,255,0);
    wall.shapeColor=color(0,255,0);
   }
   if( destruction>=4 ) {
    car.shapeColor=color(223,230,0);
    wall.shapeColor=color(223,230,0);
  }
  if( destruction>=7 ) {
    car.shapeColor=color(255,0,0);
    wall.shapeColor=color(255,0,0);
  }
   
  
  }
  drawSprites();
}