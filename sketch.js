function setup() {
  createCanvas(400, 400);
  frameRate(30);

}

function draw() {
  background(255);
  noStroke();
  rectMode(CENTER);
  fill(0);
  text('red bean bubble tea',150,80);
  if (mouseX>width/2){
    //bubble body
    ellipse(width-50-mouseX,height/2+10,140,140);

    //bubble face
    fill(180,100,100);
    ellipse(width-mouseX-50,height/2+15,40,40);
    // ellipse(width-mouseX-15,height/2+25,40,40);

    //eyebrows, eyes, mouth
    fill(255);
    ellipse(width-mouseX-30,height/2-20,10,5);
    ellipse(width-mouseX-10,height/2-30,10,5);

    ellipse(width-mouseX-35,height/2-10,15,10);
    ellipse(width-mouseX,height/2-15,15,10);

    ellipse(width-mouseX-15,height/2,10,15);

    //apple
    fill(0);
    ellipse(width-mouseX-35,height/2-10,5,10);
    ellipse(width-mouseX,height/2-15,5,10);

    //ice
    fill(230,200,150);
    rect(mouseX+70,height/2+25,90,65);

    //red bean
    fill(240,100,120);
    ellipse(mouseX+70,height/2,70,50);

    //bubble legs
    stroke(50);
    strokeWeight(5);
    line(width-mouseX-60,height/2+70, width-pmouseX-60,height/2+90);
    line(width-mouseX-30,height/2+70, width-pmouseX-30,height/2+90);

    //bubble arms
    line(width-mouseX+10,height/2+20, width-pmouseX+40,height/2+15);
    line(width-mouseX+10,height/2+20, width-pmouseX+40,height/2+25);

    //red bean arms
    line(mouseX+45,height/2+05, pmouseX+35,height/2+25);

    //red bean legs
    line(mouseX+100,height/2+5, mouseX+110,height/2+5);
    line(mouseX+95,height/2-10, mouseX+110,height/2-10);
    noStroke();




  }else{
    //bubble body
    ellipse(width/2-50,height/2+10,140,140);

    //bubble face
    fill(180,100,100);
    ellipse(width/2-80,height/2+25,40,40);
    ellipse(width/2-15,height/2+25,40,40);

    //eyebrows, eyes, mouth
    fill(255);
    ellipse(width/2-70,height/2-15,10,5);
    ellipse(width/2-30,height/2-15,10,5);

    ellipse(width/2-70,height/2,15,10);
    ellipse(width/2-25,height/2,15,10);

    ellipse(width/2-50,height/2+10,10,15);

    //apple
    fill(0);
    ellipse(width/2-70,height/2,5,10);
    ellipse(width/2-25,height/2,5,10);

    //ice
    fill(230,200,150);
    rect(width/2+70,height/2+25,90,65);

    //red bean
    fill(240,100,120);
    ellipse(width/2+70,height/2,70,50);

    //legs
    stroke(50);
    strokeWeight(5);
    line(width/2-60,height/2+70, width/2-60,height/2+90);
    line(width/2-30,height/2+70, width/2-30,height/2+90);

    //arms
    line(width/2-110,height/2+20, width/2-140,height/2+20);
    line(width/2+10,height/2+20, width/2+40,height/2+25);

    //red bean legs
    line(width/2+100,height/2+5, width/2+110,height/2+5);
    line(width/2+95,height/2-10, width/2+110,height/2-10);

    //red bean arms
    line(width/2+45,height/2+05, width/2+35,height/2+25);
    noStroke();



  }
  fill(255,230,200,100);
  rect(width/2,height*3/4+20,400,150);
}
