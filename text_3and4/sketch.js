var thefont = new Array(4);

var fphases=new Array(4);//add on
var testphase=0;//add on
var speed=0.01;//add on

var fsize = 9;
var insideColor = 0;
var fontCount = 0;

function preload() { //pull thefront0 out from the data level

  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('./data/font' + i + '.otf');//concatenating the name of the file
  }
}
    function setup() {

      createCanvas(800, 600);
      background(255);
      fill(0);
      stroke(0);
      textFont(thefont[0], fsize); //which font and size
      
      for(var i=0; i<fphases.length;i++){
        fphases[i]=random(0.0,TWO_PI);
      }

    }

    function draw() {
      background(255);
      var thex = 50;
      var they = height / 2;
      
      speed=mouseX/width *0.5;
      testphase=(testphase +speed)%TWO_PI;
      var h=map(sin(testphase),-1.0,1.0,height,0);
      ellipse(width/2,h,20,20);
      
      var s;
      s=map(sin(fphases[0]),-1.0,1.0,9,64);
      
      textFont(thefont[0],36);
      text('my',thex, they);
      thex +=textWidth('my ');
      fphases[0]=(fphases[0]+speed)%TWO_PI;
      
      
      
      // textFont(thefont[0], 36);
      // text('my', thex, they);
      // thex += textWidth('my');

      textFont(thefont[1], s);
      text('cat', thex, they);
      thex += textWidth('cat ');
      fphases[1]=(fphases[0]+speed)%TWO_PI;
      
      textFont(thefont[2],36);
      text('has',thex,they);
      thex +=textWidth('has ');
      
      textFont(thefont[3],36);
      text('ticks',thex,they);
      thex +=textWidth('ticks ');
      
    }