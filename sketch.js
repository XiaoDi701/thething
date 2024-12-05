//Just Airpods
//It makes sounds :D
let musicSound;
let playing = false;

function preload() {
  song = loadSound("Music.mp3");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(3, 7, 252, 10);
  translate(300, 300);
  textSize(20);
  textStyle(BOLD);
  fill(255);
  textAlign(CENTER, CENTER);
  text("TRY CLICKING ON THE AIRPODS", 0, -211);

  console.log(mouseX - 300, mouseY - 300);
 // console.log(mouseX, mouseY);
  //the case
  push();
  rectMode(CENTER);
  noStroke();
  fill(233, 233, 247);
  rect(0, -90, 200, 90, 30);
  fill(211, 211, 237);
  rect(0, -90, 190, 80, 30);
  fill(137, 145, 173);
  rect(0, -40, 40, 25);
  rect(-20, -40, 30, 15);
  rect(20, -40, 30, 15);
  fill(233, 233, 247);
  rect(0, 30, 200, 150, 10);
  fill(211, 211, 237);
  rect(0, -10, 190, 60, 20);
  fill(193, 201, 232);
  rect(0, 25, 70, 10, 20);
  fill(230, 5, 19);
  circle(0, 80, 5);
  pop();

  push();
  fill(194, 204, 237);
  noStroke();
  beginShape();
  curveVertex(77, -11);
  curveVertex(77, -11);
  curveVertex(62, 10);
  curveVertex(23, 4);
  curveVertex(11, -21);
  curveVertex(68, -32);
  curveVertex(77, -11);
  curveVertex(77, -11);
  endShape();
  pop();

  push();
  fill(194, 204, 237);
  noStroke();
  beginShape();
  curveVertex(-77, -11);
  curveVertex(-77, -11);
  curveVertex(-62, 10);
  curveVertex(-23, 4);
  curveVertex(-11, -21);
  curveVertex(-68, -32);
  curveVertex(-77, -11);
  curveVertex(-77, -11);
  endShape();
  pop();

  push();
  if (mouseIsPressed === true) {
    if (!playing) {
      song.play();
      playing = true;
      // } else {
      //  song.pause();
      // playing = false;
    }

    if (mouseX > 89 && mouseX < 169 && mouseY > 212 && mouseY < 330) {
      r = random(140, 255);
      g = random(140, 255);
      b = random(140, 255);
      circleX = random(0, 400);
      fill(0, g, b, 150);
      noStroke();
      circle(-170, -53, circleX);
    }
    if (mouseX > 431 && mouseX < 510 && mouseY > 212 && mouseY < 330) {
      r = random(140, 255);
      g = random(140, 255);
      b = random(140, 255);
      circleX = random(0, 400);
      fill(0, g, b, 150);
      noStroke();
      circle(170, -53, circleX);
    }
  }
  pop();

  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  translate(-170, -56);
  rotate(-70);
  fill(233, 233, 247);
  rect(-50, -17, 90, 25, 10);
  fill(211, 211, 237);
  rect(-30, -17, 40, 25, 10);
  fill(233, 233, 247);
  rect(0, 0, 60, 80, 30);
  fill(16, 18, 102);
  ellipse(0, 24, 40, 15);
  rect(0, -17, 20, 30, 10);
  pop();

  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  translate(170, -56);
  rotate(70);
  fill(233, 233, 247);
  rect(50, -17, 90, 25, 10);
  fill(211, 211, 237);
  rect(30, -17, 40, 25, 10);
  fill(233, 233, 247);
  rect(0, 0, 60, 80, 30);
  fill(16, 18, 102);
  ellipse(0, 24, 40, 15);
  rect(0, -17, 20, 30, 10);
  pop();
}
