function setup() {
  createCanvas(500, 500);
  background("#E3DAC9");
  addSquares();
}

function draw() {}

function createGrid() {
  let gap = 50;
  square(gap, gap, width - 2 * gap);
}

function addSquares() {
  let gapRandomX = 200; // hauteur
  let gapRandomY = 120; // longueur
  let randomHeight = 0;
  let randomWidth = 0;
  noStroke();

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      randomHeight = Math.floor(Math.random() * gapRandomY);
      randomWidth = Math.floor(Math.random() * gapRandomX);
      if (j % 2 == 0 && i % 2 == 0) {
        fill("#231E1A");
      } else {
        fill("#E3DAC9");
      }

      rect(j, i, j + randomWidth, i + randomHeight);
      j += randomWidth;
    }
    i += 11;
  }
}
