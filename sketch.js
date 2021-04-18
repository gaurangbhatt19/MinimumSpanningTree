let vertices=[];
function setup() {
  createCanvas(1280, 500);
}
function Reset(){
 clear();
}
function mousePressed()
{
  if(mouseX+mouseY<1680){
var v=createVector(mouseX,mouseY);
vertices.push(v);
console.log("MousePressed");
  }
}

function draw() {
  background(10);
  var reached =[];
  var unreached =[];
  for(var i=0;i<vertices.length;i++) {
    unreached.push(vertices[i]);
  }
  reached.push(unreached[0]);
  unreached.splice(0,1);
  while(unreached.length>0){
    var record=Number.MAX_VALUE;
    var rIndex;
    var uIndex;
    for(var i=0;i<reached.length;i++)
    {
       for(var j=0;j<unreached.length;j++){
         var v1= reached[i];
         var v2= unreached[j];
         var d= dist(v1.x,v1.y,v2.x,v2.y);
         if(d<record)
         {
           record=d;
           rIndex=i;
           uIndex=j;
         }
         
       }

    }
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x,unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
    
  }

  for(var i=0; i< vertices.length; i++){
    fill(255,128,0);
   stroke(255);
    ellipse(vertices[i].x, vertices[i].y,16,16);
    
  }
}