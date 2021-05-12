var hr, mn, sc;
var scAngle, mnAngle, hrAngle;
function setup() {
  createCanvas(400,450);
  angleMode(DEGREES)
 }

function draw() {
  background("cyan");  
  hr = hour();
  mn = minute();
  sc = second();

  textSize(40);
  strokeWeight(3);
  stroke(225, 0, 139);
  fill(225, 0, 139);
  text(hr + " : " + mn + " : "+ sc, 100, 420)

  translate(200, 200);
  rotate(-90);

  strokeWeight(7);
  noFill();
  
  text("second: " + sc , 200, 300);
  text("mintue: " + mn , 200, 320);
  text("hour: " + hr , 200, 340);
  scAngle = map(sc, 0, 60, 0, 360);
  stroke("red");
  arc(0, 0, 300, 300, 0, scAngle);

  mnAngle = map(mn, 0, 60, 0, 360);
  stroke("green");
  arc(0, 0, 280, 280, 0, mnAngle);

  hrAngle = map(hr%12, 0, 12, 0, 360);
  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngle);
  
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 225, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  push();
  stroke("white");
  strokeWeight(7);
  line(0, 0, 0, 0);
  pop();
 
  drawSprites();
  
}