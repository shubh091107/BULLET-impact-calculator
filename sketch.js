var bullet
var wall
var speed 
var weight
var thickness
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50, 200, 50, 5);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83)
  bullet.velocityX = speed
  bullet.shapeColor = "white"
  wall.shapeColor = "white"
}

function draw() {
  background(0);  
  
if (collide(bullet,wall)){
  bullet.velocityX = 0 
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if (damage<10){
    bullet.shapeColor = "green"
  }
  if (damage>10){
    bullet.shapeColor = "red"
  
  }
console.log(damage)  
}

drawSprites();  


 /*if (wall.x - bullet.x < bullet.width/+ wall.width/2){
   bullet.velocityX = 0
   var deformation = 0.5*weight*speed*speed/22500
   if(deformation < 100){
     bullet.shapeColor =  "green"
   }
   if (deformation =>100 && deformation<=180){
     bullet.shapeColor = "yellow"
   }
   if(deformation > 180){
     bullet.shapeColor="red"
   }

 }
*/
}
function collide(bullet,wall){
  bulletedge = bullet.x + bullet.width
  walledge = wall.x
  if (bulletedge>= walledge){
    return true;
  }
else{
  return false
}



}
