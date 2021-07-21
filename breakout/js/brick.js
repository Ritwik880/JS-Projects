class Brick {
  constructor(xPos, yPos, color) {
    this.width = 80;
    this.height = 20;
    this.position = createVector(xPos, yPos);
    this.color = color;
    this.scoreValue = 10;
  }

  draw() {
    strokeWeight(2);
    stroke(61);
    fill(this.color);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
