var drops = [];
var dropCount;
function setup() {
  createCanvas(400, 400);
  dropCount = (width + height);
  for (var i = 0; i < dropCount; i++) {
    drops[i] = new Drop();
  }

}

function draw() {
  background(0);
  for (var i = 0; i < dropCount; i++) {
    drops[i].fall();
    drops[i].display();
  }
  drawSprites();
}