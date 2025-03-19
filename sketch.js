// this one just draws

let fixedColor = [0, 0, 0]; // Fixed brush color
let fixedSize = 2;           // Fixed diameter for the circle

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set a white background
}

function draw() {
  // Only draw when the mouse is pressed
  if (mouseIsPressed) {
    noStroke();
    fill(fixedColor);
    fixedSize = random (4,6);
    
    // Calculate the distance between the current and previous mouse positions
    let d = dist(mouseX, mouseY, pmouseX, pmouseY);
    
    // Determine the number of interpolation steps based on the distance.
    // This ensures that circles are drawn close enough together.
    let steps = ceil(d / (fixedSize * .5));
    
    // Draw circles along the path between the previous and current mouse positions
    for (let i = 0; i <= steps; i++) {
      let t = i / steps;
      let x = lerp(pmouseX, mouseX, t);
      let y = lerp(pmouseY, mouseY, t);
      ellipse(x, y, fixedSize);
    }
  }
}
