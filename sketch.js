let vertices=[];
// Canvas Resolution
function setup() {
  createCanvas(1280, 500);
}
// Check for mouse click
function mousePressed()
{

var v=createVector(mouseX,mouseY);
vertices.push(v);
  
}
// Drawing Nodes and line for Spanning Tree
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
    ellipse(vertices[i].x, vertices[i].y,40,40);
    fill(255, 255, 255);
    text(i,vertices[i].x-5, vertices[i].y+4);
    
  }
}