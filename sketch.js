//object syntax//
let ball = {x: 200, y: 200, size: 50, vx: 5, vy: 5, color: [0, 166, 80]}

let sun = {x: 760, y: 175, size: 100, vx: 3, vy: 3, color: [0, 166, 80], angle: 15}

let bouncing_balls = []


function setup() {
    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas


    for (let i=0; i<1000; i++) {
    let random_ball = {x: random(0, width), y: random(0, height), size: random(3), vx: random(2, 10), vy: random(2,10), color: [random(0, 255), random(0,166), random(0,80)]}

    bouncing_balls.push(random_ball)

  }
}


function draw() {

  angleMode(DEGREES)
  stroke(1)
  noFill()
  sun.x += sun.vx * cos(sun.angle)
  sun.y += sun.vy * sin(sun.angle)
  sun.angle += 1
  ellipse(sun.x, sun.y, 100, 100)


for (let ball of bouncing_balls) {

    fill(ball.color)
    stroke(1)
    circle(ball.x, ball.y, ball.size)
    ball.x = ball.x + ball.vx
    ball.y = ball.y + ball.vy

    if (ball.x >= width) {
       ball.vx = -ball.vx
    }
    if (ball.x <= 0) {
       ball.vx = -ball.vx
    }

    if (ball.y >= height) {
      ball.vy = -ball.vy
    }

    if (ball.y <= 0) {
      ball.vy = -ball.vy
    }

}

    fill(255, 122, 107, 50)
    rect(570, 0, 300, 1000)

    fill(186, 255, 248, 50)
    rect(0, 230, 1550, 248)

    // fill(255, 254, 176)
    // ellipse(sun.x, sun.y, 100, 100)

}

//frameCount p5 if statement

// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function mouseClicked() {

    print(int(mouseX), int(mouseY))

  }
