function setup() {
  createCanvas(500, 500);
  background("#E3DAC9");
  addSquares("#E3DAC9", "#231E1A");
  createGrid("#E3DAC9");
}

function draw() {}

function createGrid(color) {
  let gap = 20;
  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      if (i == 0 || j == 0 || i == 499 || j == 499) {
        fill(color);
        rect(i, j, i + gap, j + gap);
      }
      if (i == 499 || j == 499 || i == 0 || j == 0) {
        fill(color);
        rect(i, j, i + gap, j + gap);
        rect(i - gap, j - gap, i + gap, j + gap);
        line(i - gap, j - gap, i + gap, j + gap);
      }

      // create line around grid
      if (i == gap || j == gap || i == 499 - gap || j == 499 - gap) {
        fill(0);
        line(i, j, i + gap, j + gap);
      }
    }
  }
}

function addSquares(color1, color2) {
  let gapRandomX = 350; // longueur
  let gapRandomY = 12; // hauteur
  let randomHeight = 0;
  let randomWidth = 0;
  let isBlack = false;

  color1 = color1.toString();
  color2 = color2.toString();
  noStroke();

  for (let i = 1; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      if (isBlack == false) {
        fill(color1); // "#231E1A"
        isBlack = true;
      } else {
        fill(color2); // "#E3DAC9"
        isBlack = false;
      }

      randomWidth = Math.floor(Math.random() * (gapRandomX - 50) + 50);
      if (i == 1 && j == 0) {
        randomHeight = Math.floor(Math.random() * (2 - gapRandomY) + 2);
        rect(j, i, j + randomWidth, i + randomHeight);
      } else {
        rect(j, i, j + randomWidth, i);
        i += randomHeight;
      }
      j += randomWidth;
    }

    // on diminue 1 fois sur 2
    if (i % 2 == 0) gapRandomX -= 1;
    randomHeight = Math.floor(Math.random() * gapRandomY);
    i += randomHeight;
  }
}

function changeBackGround() {
  let randomR = Math.floor(Math.random() * (255 - 0) + 0);
  let randomG = Math.floor(Math.random() * (255 - 0) + 0);
  let randomB = Math.floor(Math.random() * (255 - 0) + 0);

  let randomColor = color(randomR, randomG, randomB);

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      if (i == 0 || j == 0 || i == 499 || j == 499) {
        fill(randomColor);
        rect(i, j, i + 20, j + 20);
      }
      if (i == 499 || j == 499 || i == 0 || j == 0) {
        fill(randomColor);
        rect(i, j, i + 20, j + 20);
        rect(i - 20, j - 20, i + 20, j + 20);
        line(i - 20, j - 20, i + 20, j + 20);
      }

      // create line around grid
      if (i == 20 || j == 20 || i == 499 - 20 || j == 499 - 20) {
        fill(0);
        line(i, j, i + 20, j + 20);
      }
    }
  }
}

function changeColor() {
  let randomR = Math.floor(Math.random() * (255 - 0) + 0);
  let randomG = Math.floor(Math.random() * (255 - 0) + 0);
  let randomB = Math.floor(Math.random() * (255 - 0) + 0);

  let randomR2 = Math.floor(Math.random() * (255 - 0) + 0);
  let randomG2 = Math.floor(Math.random() * (255 - 0) + 0);
  let randomB2 = Math.floor(Math.random() * (255 - 0) + 0);

  let randomColor = color(randomR, randomG, randomB);
  let randomColor2 = color(randomR2, randomG2, randomB2);

  background(randomColor);
  addSquares(randomColor, randomColor2);
  createGrid(randomColor);
}
