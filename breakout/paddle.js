class Paddle {
  constructor() {
    this.width = 120;
    this.height = 10;
    this.position = createVector(
      (WIDTH - this.width) / 2,
      HEIGHT - this.height - 10
    );
    this.xvel = 8;
    this.color = color(61, 61, 61);
    this.score = 0;
  }

  draw() {
    strokeWeight(2);
    stroke(61);
    fill(this.color);
    rect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    if (this.position.x > 10 && keyIsDown(LEFT_ARROW)) {
      this.position.x -= this.xvel;
    }
    if (this.position.x < width - this.width - 10 && keyIsDown(RIGHT_ARROW)) {
      this.position.x += this.xvel;
    }
  }

  reset() {
    this.position = createVector(
      (WIDTH - this.width) / 2,
      HEIGHT - this.height - 10
    );
    this.score = 0;
  }
}
