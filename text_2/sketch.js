var thefont = new Array(4);
var fsize = 9;
var insideColor = 0;
var fontCount = 0;


function preload() { //pull thefront0 out from the data level

 
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('./data/font' + i + '.otf');
  }

}

function setup() {
  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(thefont[0], fsize); //which font and size
}

function draw() {
  background(255);
  fill(insideColor, 0, 0);
  text('my cate has ticks', mouseX, mouseY);
  fsize++;
  textSize(fsize);

  if (fsize > 56) fsize = 9;

  if (frameCount % 20 === 0) { //when compare to 0
    insideColor = 255 - insideColor;
    fontCount = (fontCount + 1) % thefont.length;
    textFont(thefont[fontCount]); //font is going to switch fomr the arrary
  }
  
}
  
  