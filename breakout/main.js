const WIDTH = 800;
const HEIGHT = 600;
let ball;
let player;
let bricks = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  ball = new Ball();
  player = new Paddle();
  generateBricksField();
}

function draw() {
  background(220);

  player.draw();
  gameInfo();
  ball.draw();

  if (ball.lives > 0) {
    bricks.forEach((brick) => {
      brick.draw();
    });
    player.update();
    ball.update();
    ball.boundaries();
    if (ball.collision(player)) {
      ball.velocity.y = -ball.velocity.y;
      ball.velocity.mult(1.1);
    }
    bricks.forEach((brick, index) => {
      if (ball.collision(brick)) {
        bricks.splice(index, 1);
        player.score += brick.scoreValue;
        ball.velocity.y = -ball.velocity.y;
      }
    });
  } else {
    fill(155, 0, 0);
    text("Press 'enter' to start the game", (width - 340) / 2, height / 2);
  }

  if (bricks.length < 1) {
    generateBricksField();
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    ball.lives = ball.initialLives;
    player.reset();
    ball.reset();
    generateBricksField();
  }
}

function gameInfo() {
  textSize(24);
  noStroke();
  fill(61, 61, 61);
  text(`Score: ${player.score}`, WIDTH - 140, 35);
  text(`Lives: ${ball.lives}`, 15, 35);
}

function generateBricksField() {
  bricks = [];
  for (let i = 0; i < 10; i++) {
    randomColor = color(
      Math.floor(Math.random() * 155 + 100),
      Math.floor(Math.random() * 155 + 100),
      Math.floor(Math.random() * 155 + 100)
    );
    for (let j = 0; j < 10; j++) {
      let brick = new Brick(80 * j, 20 * i + 50, randomColor);
      bricks.push(brick);
    }
  }
}
