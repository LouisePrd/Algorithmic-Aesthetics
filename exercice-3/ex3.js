function setup() {
  createCanvas(500, 500);
  background("#E3DAC9");
  addSquares();
  createGrid();
}

function draw() {}

// creation de grille avec les marges mais
// enlevée car problèmes de dépassement des carrés
function createGrid() {
  let gap = 20;
  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
        if (i == 0 || j == 0 || i == 499 || j == 499) {
            fill("#E3DAC9");
            rect(i, j, i + gap, j + gap);
        }
        if (i == 499 || j == 499 || i == 0 || j == 0) {
            fill("#E3DAC9");
            rect(i, j, i + gap, j + gap);
            rect(i - gap , j - gap , i + gap, j + gap);
            line(i - gap , j - gap , i + gap, j + gap);
        }

        // create line around grid
        if (i == gap || j == gap || i == 499 - gap || j == 499 - gap) {
            fill(0);
            line(i, j, i + gap, j + gap);
        }
    }
  }
}

function addSquares() {
  let gapRandomX = 350; // longueur
  let gapRandomY = 12; // hauteur
  let randomHeight = 0;
  let randomWidth = 0;
  let isBlack = false;
  noStroke();

  for (let i = 1; i < 500; i++) {
    // hauteur
    for (let j = 0; j < 500; j++) {
      // longueur

      randomWidth = Math.floor(Math.random() * (gapRandomX - 50) + 50);

      // alternance verticale
      if (isBlack == false) {
        fill("#231E1A");
        isBlack = true;
      } else {
        fill("#E3DAC9");
        isBlack = false;
      }

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
