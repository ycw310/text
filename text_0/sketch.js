//text
//image

//global variables(make variables that is accessible when is needed)
var thefont;
var fsize = 9;
var insideColor=155;

// reminder good habits to catagory in differenct directory
//special function that loads first before out sketch
//put things we don't want the rest of our sketch to get help up by 
//preload is an asychronous function

function preload() { //pull thefront0 out from the data level

  thefont = loadFont('data/font3.otf');
}

function setup() {

  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(thefont, fsize); //specifying which font and the size, which we have declare in the begining

}

function draw() {
  background(255);
  //fill(0); //fill color of the text
  //4 parameters forms a box, with the latter two being the coordinates of the lower crnr
  text("who jackhammers at 3 am???", 10, height / 2, 50, height / 2 + 50);
  // text('what the hell?', 10,200);
  text("who jackhammers at 3am", mouseX, mouseY);
  fill(insideColor, 0, 0);
  fsize++;
  //textSize(fsize);
  textSize(50);
  if (fsize > 96) fsize = 9;

  if (frameCount % 20 === 0) { //when compare to 0
    insideColor = 255 - insideColor;
  }
}