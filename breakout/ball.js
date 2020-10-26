class Ball {
  constructor() {
    this.radius = 15;
    this.position = createVector(WIDTH / 2, height - 30);
    this.randomXVelocity = Math.floor(Math.random() * 10 - 5);
    this.velocity = createVector(this.randomXVelocity, 5);
    this.color = color(195, 168, 255);
    this.offset = 10;
    this.initialLives = 3;
    this.lives = 0;
  }

  draw() {
    strokeWeight(2);
    stroke(51);
    fill(this.color);
    circle(this.position.x, this.position.y, this.radius);
  }

  boundaries() {
    if (
      this.position.x < this.radius ||
      this.position.x > WIDTH - this.radius
    ) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.position.y < this.radius) {
      this.velocity.y = -this.velocity.y;
    }
    if (this.position.y > HEIGHT + this.radius) {
      this.lives--;
      this.reset();
    }
  }

  collision(object) {
    if (
      this.position.x > object.position.x &&
      this.position.x < object.position.x + object.width &&
      this.position.y > object.position.y &&
      this.position.y < object.position.y + object.height
    ) {
      return true;
    }
    return false;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y;
  }

  reset() {
    this.randomXVelocity = Math.floor(Math.random() * 10 - 5);
    this.position = createVector(WIDTH / 2, height - 30);
    this.velocity = createVector(this.randomXVelocity, 5);
  }
}
