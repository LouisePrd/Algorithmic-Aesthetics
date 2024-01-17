function setup() {
  createCanvas(500, 500);
  background("#E3DAC9");
  createGrid();
  addSquares();
}

function draw() {}

function createGrid() {
  let gap = 50;
  square(gap, gap, width - 2 * gap);
}

function addSquares() {
  let gapRandomX = 100;
  let gapRandomY = 50;
  let randomHeight = 0;
  let randomWidth = 0;
  noStroke();

  // on divise l'image en 200 carrés de 10x10
  for (let i = 50; i < 250; i++) {
    for (let j = 50; j < 250; j++) {
      randomHeight = Math.floor(Math.random() * gapRandomY);
      randomWidth = Math.floor(Math.random() * gapRandomX);
      if (i % 2 == 0) {
        fill("#231E1A");
      } else {
        fill("#E3DAC9");
      }
      rect(i, j, randomWidth, randomHeight);
      i += randomWidth;
      j += randomHeight;
    }
  }
}
