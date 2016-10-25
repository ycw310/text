var thefont = new Array(4);

var fphases = new Array(4); //add on
var testphase = 0; //add on
var speed = 0.01; //add on

var phrase = 'my cat has ticks'; //make an array out of a string //this is an array
var phrasearray = phrase.split('');//parsing the array for spaces, making new indices from


function preload() { //pull thefront0 out from the data level
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('./data/font' + i + '.otf'); //concatenating the name of the file
  }

}


function setup() {}
createCanvas(800, 600);
      background(255);
      fill(0);
      stroke(0);
      textFont(thefont[0], fsize); //which font and size
      
      for(var i=0; i<fphases.length;i++){
        fphases[i]=random(0.0,TWO_PI);

function draw() {

}