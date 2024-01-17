// 4 mots : rêves, chauchemars, sommeil, éveil

/* Description :
Ce petit programme génère une grille de 10x10 carrés de 60px de côté. Au départ, les couleurs sont pastelssssss, douces et agréablesssssss.
Elles rassurent, comme un rêve. Petit à petit, les couleurs vont devenir plus sombres, plus agressives, comme si le rêve passait au cauchemar.
On passe donc du sommeil profond et confortable à l'éveil brutal et désagréable. */

function setup() {
  createCanvas(1000, 1000);
  background(200);
}

function draw() {
  if (frameCount % 15 == 0) {
    background(255 - frameCount / 2, 105 - frameCount / 3, 115, 127);
    createColorPalette();
  }
}

function createColorPalette(evolution) {
  let tabColorBright = [
    "FFADAD",
    "FFD6A5",
    "FDFFB6",
    "CAFFBF",
    "9BF6FF",
    "A0C4FF",
    "BDB2FF",
    "FFC6FF",
  ];
  let tabColorDark = ["80586D", "030637", "720455", "910A67"];
  createGrid(tabColorBright, tabColorDark);
}

function createGrid(tabColorBright, tabColorDark) {
  let randomColor;
  let gap = canvas.width / 10;
  let colorBefore = "";

  noStroke();
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (colorBefore == "") {
        randomColor = random(tabColorBright);
      } else {
        let randomNumber = Math.floor((Math.random() * frameCount) / 12);
        if (randomNumber < 10) {
          randomColor = random(tabColorBright);
        } else {
          randomColor = random(tabColorDark);
        }
      }

      fill("#" + randomColor);
      square(i * 60 + gap, j * 60 + gap, 60);

      colorBefore = randomColor;
    }
  }
}
