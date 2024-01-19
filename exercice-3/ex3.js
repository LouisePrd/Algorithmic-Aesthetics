let shape = "rectangle";

function setup() {
  // creation du canvas par défaut
  createCanvas(500, 500);
  background("#E3DAC9");
  //addShape("#E3DAC9", "#231E1A", shape);
  addShapeV2("#E3DAC9", "#231E1A", shape);
  createGrid("#E3DAC9");
  createContour("#231E1A");
  noStroke();
}

// création des bords
function createGrid(color) {
  noStroke();
  let gap = 20;
  fill(color);
  rect(0, 0, height, gap);
  rect(0, 0, gap, height);
  rect(0, height - gap, height, gap);
  rect(height - gap, 0, gap, height);
}

// création des contours
function createContour(color) {
  stroke(color);
  strokeWeight(2);
  line(20, 20, 20, 480);
  line(20, 20, 480, 20);
  line(480, 20, 480, 480);
  line(20, 480, 480, 480);
}

// création des blocs de couleur
function addShape(color1, color2, shape) {
  let gapRandomX = 300; // longueur
  let gapRandomY = 20; // hauteur
  let randomHeight = 0;
  let randomWidth = 0;
  let isBlack = false;

  color1 = color1.toString();
  color2 = color2.toString();
  noStroke();

  for (let i = 1; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      // alternance de couleur
      if (isBlack == false) {
        fill(color1); // "#231E1A" par défaut
        isBlack = true;
      } else {
        fill(color2); // "#E3DAC9" par défaut
        isBlack = false;
      }

      // blocs avec des hauteurs et largeurs aléatoires
      randomWidth = Math.floor(Math.random() * (gapRandomX - 50) + 50);

      if (shape == "triangle") {
        if (i == 1 && j == 0) {
          randomHeight = Math.floor(Math.random() * (2 - gapRandomY) + 2);
          fill(color1);
          triangle(j, i, j + randomWidth, i, j + randomWidth, i + randomHeight);
        } else {
          fill(color2);
          triangle(j, i, j + randomWidth, i, j + randomWidth, i + randomHeight);
          i += randomHeight;
        }
      }
      if (shape == "rectangle") {
        if (i == 1 && j == 0) {
          randomHeight = Math.floor(Math.random() * (2 - gapRandomY) + 2);
          rect(j, i, j + randomWidth, i + randomHeight);
        } else {
          rect(j, i, j + randomWidth, i);
          i += randomHeight;
        }
      }

      if (shape == "circle") {
        if (i == 1 && j == 0) {
          randomHeight = Math.floor(Math.random() * (2 - gapRandomY) + 2);
          ellipse(j, i, randomWidth, randomHeight);
        } else {
          ellipse(j, i, randomWidth, randomHeight);
          i += randomHeight;
        }
      }

      // évolution de la largeur pour la prochaine itération
      j += randomWidth;
    }

    // hauteur de + en + petite
    if (i % 2 == 0 && gapRandomX) gapRandomX -= 50;
    randomHeight = Math.floor(Math.random() * gapRandomY);
    // largeur de + en + petite
    if (i % 2 == 0 && gapRandomY - 2 > 0) gapRandomY -= 2;

    // évolution de la hauteur pour la prochaine itération
    i += randomHeight;
  }
}

// Animations bonus

// changement de couleur du fond
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
      }
    }
  }
}

// changement de couleur des blocs
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
  addShape(randomColor, randomColor2, shape);
  createGrid(randomColor);
  createContour("#231E1A");
  noStroke();
}

// changement de shape des blocs
function changeShape() {
  let tabShape = ["triangle", "rectangle", "circle"];
  shape = tabShape[Math.floor(Math.random() * (3 - 0) + 0)];
  background("#E3DAC9");
  addShape("#E3DAC9", "#231E1A", shape);
  createGrid("#E3DAC9");
  createContour("#231E1A");
  noStroke();
}

function saveImage() {
  saveCanvas("myArtwork", "jpg");
}

function addShapeV2(color1, color2, shape) {
  let gapRandomX = 300; // longueur
  let gapRandomY = 60; // hauteur
  let randomHeight = 0;
  let randomWidth = 0;
  noStroke();

    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < 500; j++) {
          if (isOdd(i)) {
            fill('#E1D9CC');
          } else {
            fill('#1D1A15');
          }
          randomHeight = Math.floor(Math.random() * (2 - gapRandomY) + 2);
          randomWidth = Math.floor(Math.random() * (2 - gapRandomX) + 2);
          rect(i, j, randomWidth, randomHeight);
          j += 20;
        }
        i += 40;
        
    }

    
}

function isOdd(num) { return num % 2;}
