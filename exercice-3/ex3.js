function setup() {
  createCanvas(500, 500);
  background("#E3DAC9");
  addSquares();
}

function draw() {}

// creation de grille avec les marges mais 
// enlevée car problèmes de dépassement des carrés
function createGrid() {
  let gap = 50;
  square(gap, gap, width - 2 * gap);
}

function addSquares() {
  let gapRandomX = 160; // longueur
  let gapRandomY = 350; // hauteur
  let randomHeight = 0;
  let randomWidth = 0;
  let isBlack = false;
  noStroke();

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      randomHeight = Math.floor(Math.random() * gapRandomX);
      randomWidth = Math.floor(Math.random() * gapRandomY);

      // alternance verticale
      if (isBlack == false) {
        fill("#231E1A");
        isBlack = true;
      } else {
        fill("#E3DAC9");
        isBlack = false;
      }

      // 2 ranges car dans le dessin ceux du milieu 
      // semblent plus grands horizontalement
      if (j > 150 || j > 275) {
        randomHeight = Math.floor((Math.random() * gapRandomX) / 2);
        randomWidth = Math.floor((Math.random() * gapRandomY) / 2);
      }

      // plus on descend, plus les carrés sont petits
      if (i > 150) {
        randomHeight = Math.floor((Math.random() * gapRandomX) / 2);
        randomWidth = Math.floor((Math.random() * gapRandomY) / 2);
      }
      rect(j, i, j + randomWidth, i + randomHeight);
      j += randomWidth;
    }
    i += 12; // problème ici car i fixe alors qu'il doit dépendre du carré précédent
  }
}
