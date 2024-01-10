particles = [];

canvasWidth = 400;
canvasHeight = 400;

canWidth = 200;
canHeight = 250;

canXOffset = 0;
canYOffset = 25;

scaleTimer = 0;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawCan();
    // Energy particles
    for (let i = 0; i < 50; i++) {
        let x = random(100, 300);
        let y = random(100, 350);
        particles.push(createVector(x, y));
    }
}

function drawCan() {
    background(30, 0, 0);

    // Text
    textSize(32);
    textAlign(CENTER);
    fill(240, 0, 0);
    text('p5.js Energy Drink', width / 2, 50);

    // Energy Drink Can
    fill(255, 0, 0); // Red color for the can
    // rect(width / 2 - canWidth, canWidth, height, 250, 20);
    rect((width / 2 - canWidth / 2) + canXOffset, (height / 2 - canHeight / 2) + canYOffset, canWidth, canHeight, 20);
    // Logo
    fill(255);
    textSize(Math.sin(millis() / 100) * 10 + 40);
    text('p5.js', width / 2, height / 2);
}

function inCan(x, y) {
    // Account for offsets
    x = x - canXOffset;
    y = y - canYOffset;
    return (x > width / 2 - canWidth / 2 && x < width / 2 + canWidth / 2 && y > height / 2 - canHeight / 2 && y < height / 2 + canHeight / 2);
}

function draw() {
    drawCan();
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        fill(random(255), random(255), 0);
        ellipse(p.x, p.y, 5, 5);
        // Push the particles away from the center of the can
        let force = createVector(p.x - width / 2, p.y - height / 2);
        force.mult(random(0.001, 0.005) * deltaTime);
        p.add(force);

        if (!inCan(p.x, p.y)) {
            p.x = random(100, 300);
            p.y = random(100, 350);
        }
    }

    describe("A can of p5.js Energy Drink");
}