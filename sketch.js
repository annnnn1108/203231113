var sound1
function preload(){
  sound1 = loadSound("mixaund-feel.mp3") //先把音樂檔載入到sound1程式碼中
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#faf3dd")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#caf0f8");
}

var w=100
var s_w=50
function draw() {

background("#caf0f8");
noFill()
for(var y=50;y<=height+50;y=y+w){
for(var x=50;x<=width+50;x=x+w){

stroke("#03045e")
rectMode(CENTER)
rect(x,y,w)
strokeWeight(2)

stroke("#0077b6")
ellipse(x,y,100,w+mouseY/20)
strokeWeight(2)

stroke("#ffcad4")
ellipse(x,y+50,50,s_w+mouseY/10)
strokeWeight(2)

}
}

}




//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}

