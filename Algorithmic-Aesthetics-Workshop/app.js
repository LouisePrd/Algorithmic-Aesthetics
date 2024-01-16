function setup() {
  createCanvas(1280, 720);
  c1 = color(0, 0, 65);
  c2 = color(0);
  setGradient(c1, c2);
}

function draw() {
  fill(100);
  strokeWeight(3);

  // wall left bottom
  quad(width / 2.8, height, 0, height, 0, height / 2, width / 2.8, height / 3);

  //wall left top
  quad(width / 2.8, 0, 0, 0, 0, height / 2, width / 2.8, height / 3);

  // wall right bottom
  quad(
    width - width / 2.8,
    height,
    width,
    height,
    width,
    height / 2,
    width - width / 2.8,
    height / 3
  );

  // wall right top
  quad(
    width - width / 2.8,
    0,
    width,
    0,
    width,
    height / 2,
    width - width / 2.8,
    height / 3
  );

  // ground 2
  fill(80);
  quad(
    width / 3,
    height - 200,
    width - width / 3,
    height - 200,
    width - 250,
    height,
    0 + 250,
    height
  );

  // perspective lines walls
  line(0, height / 1.45, width / 2.8, height / 2.5);
  line(width, height / 1.5, width - width / 2.8, height / 2.5);

  // window in ground 1
  fill(255, 255, 153);
  strokeWeight(3);
  quad(
    width / 18,
    height / 1.552,
    width - width / 1.15,
    height - 300,
    width / 7.5,
    height,
    0 + 75,
    height
  );

  // window 2 in ground 1
  fill(255, 255, 153);
  quad(
    width / 6.5,
    height / 1.77,
    width - width / 1.26,
    height - 345,
    width / 4.8,
    height,
    0 + 200,
    height
  );

  // same but in the other side
  // window in ground 2
  fill(255, 255, 153);
  quad(
    width - width / 18,
    height / 1.6,
    width - width / 7.5,
    height / 1.76,
    width - width / 7.5,
    height,
    width - 75,
    height
  );
  // window 2 in ground 2
  fill(255, 255, 153);
  quad(
    width - width / 6.5,
    height / 1.81,
    width - width / 4.8,
    height / 1.96,
    width - width / 4.8,
    height,
    width - 200,
    height
  );

  // ground 1
  fill(100);
  quad(
    width / 4,
    height - 150,
    width - width / 4,
    height - 150,
    width - 200,
    height,
    0 + 200,
    height
  );

  // shadows
  strokeWeight(0);
  // shadow window 2 left
  fill(255, 255, 153, 50);
  quad(
    width / 4,
    height,
    width / 6.4,
    height,
    width - width / 1.26,
    height - 80,
    width - width / 1.6,
    height
  );
  // shadow window 2 right
  fill(255, 255, 153, 50);
  quad(
    width - width / 2,
    height,
    width - width / 6.4,
    height,
    width - width / 4.8,
    height - 85,
    width - width / 2.65,
    height
  );

  // windows top left + 1 window
  fill(255, 255, 153);
  strokeWeight(2);
  quad(
    width / 22,
    0,
    width / 8,
    0,
    width / 8,
    height / 2.26,
    0 + 60, // ok
    height / 2.1
  );
  fill(255, 255, 153);
  quad(
    width / 6.5,
    0,
    width / 4.8,
    0,
    width / 4.8,
    height / 2.48,
    width / 6.5,
    height / 2.34
  );
  fill(255, 255, 153);
  quad(
    width / 4.2,
    0,
    width / 4.2,
    height / 2.57,
    width / 3.45,
    height / 2.75,
    width / 3.45,
    0
  );

  // windows top right
  fill(255, 255, 153);
  quad(
    width - width / 22,
    0,
    width - width / 8,
    0,
    width - width / 8,
    height / 2.28,
    width - 60, // ok
    height / 2.1
  );
  fill(255, 255, 153);
  quad(
    width - width / 6.5,
    0,
    width - width / 4.8,
    0,
    width - width / 4.8,
    height / 2.5,
    width - width / 6.5,
    height / 2.35
  );

  // stairs
  fill(60);
  strokeWeight(5);
  quad(
    width / 2.5,
    height - 100,
    width - width / 2.5,
    height - 100,
    width - 450,
    height,
    450,
    height
  );

  // stairs lines horizontal
  strokeWeight(3);
  for (let i = 0; i < 6; i++) {
    line(
      width / 2.8 + i * 11,
      height - i * 20,
      width - width / 2.8 - i * 11,
      height - i * 20
    );
  }

  // Columns grey
  strokeWeight(0);
  for (let i = 0; i < 7; i++) {
    if (i % 2 == 0) {
      fill(100);
    } else {
      fill(80);
    }
    quad(
      width / 2.8 + i * 50 + 15,
      0,
      width / 2.8 + i * 50 + 15,
      height / 2.3,
      width / 2.8 + i * 50 + 25,
      height / 2.3,
      width / 2.8 + i * 50 + 25,
      0
    );
  }

  // create lines in columns
  strokeWeight(3);
  for (let i = 0; i < 7; i++) {
    line(width / 2.8 + i * 50 + 15, 0, width / 2.8 + i * 50 + 15, height / 2.3);
  }

  // add wall next to the column left
  fill(80);
  strokeWeight(0);
  quad(
    width / 2.8,
    height / 1.48,
    width / 2.8,
    height / 2 + 13,
    width / 2.8 + 50,
    height / 2 + 13,
    width / 2.8 + 50,
    height / 1.48
  );

  // and posters in the wall
  fill(221, 109, 144);
  strokeWeight(0);
  quad(
    width / 2.8,
    height / 1.6,
    width / 2.8,
    height / 2 + 50,
    width / 2.8 + 30,
    height / 2 + 50,
    width / 2.8 + 30,
    height / 1.6
  );
  fill(80, 140, 154);
  quad(
    width / 2.8 + 10,
    height / 1.7,
    width / 2.8 + 10,
    height / 2 + 40,
    width / 2.8 + 40,
    height / 2 + 40,
    width / 2.8 + 40,
    height / 1.7
  );
  quad(
    width / 2.8 + 325,
    height / 2 + 13,
    width / 2.8 + 325,
    height / 1.45,
    width / 2.8 + 305,
    height / 1.45,
    width / 2.8 + 305,
    height / 2 + 13
  );

  // first ceiling
  fill(180);
  strokeWeight(3);
  quad(
    width / 2.8,
    height / 2.3,
    width / 2.8,
    height / 2.3 + 60,
    width / 2.8 + 365,
    height / 2.3 + 60,
    width / 2.8 + 365,
    height / 2.3
  );

  // light behind the smaller ceiling
  strokeWeight(0);
  fill(255, 255, 190);
  quad(
    width / 2.8 + 150,
    height / 2.3 + 60,
    width / 2.8 + 60,
    height / 2.3 + 205,
    width / 2.8 + 290,
    height / 2.3 + 205,
    width / 2.8 + 200,
    height / 2.3 + 80
  );

  // second ceiling smaller
  fill(140);
  quad(
    width / 2.8 + 50,
    height / 1.93,
    width / 2.8 + 50,
    height / 2 + 50,
    width / 2.8 + 315,
    height / 2 + 50,
    width / 2.8 + 315,
    height / 1.93
  );

  // column at the left and right of the smaller ceiling
  fill(100);
  quad(
    width / 2.8 + 50,
    height / 2 + 13,
    width / 2.8 + 50,
    height / 1.45,
    width / 2.8 + 60,
    height / 1.45,
    width / 2.8 + 60,
    height / 2 + 13
  );
  ellipse(width / 2.8 + 55, height / 1.45, 10, 10);
  quad(
    width / 2.8 + 325,
    height / 2 + 13,
    width / 2.8 + 325,
    height / 1.45,
    width / 2.8 + 305,
    height / 1.45,
    width / 2.8 + 305,
    height / 2 + 13
  );
  ellipse(width / 2.8 + 315, height / 1.45, 20, 20);

  // fill between line top and bottom
  fill(60, 127);
  quad(
    width / 2.8,
    height / 3 - 80,
    width - width / 2.8,
    height / 3 - 80,
    width - width / 2.8,
    height / 3 + 5,
    width / 2.8,
    height / 3 + 5
  );

  // line bottom of path
  fill(0);
  strokeWeight(0);
  quad(
    width / 2.8,
    height / 3,
    width - width / 2.8,
    height / 3,
    width - width / 2.8,
    height / 3 + 5,
    width / 2.8,
    height / 3 + 5
  );

  // line parallel to bottom of path
  fill(20, 255);
  strokeWeight(0);
  quad(
    width / 2.8 + 20,
    height / 3 - 25,
    width - width / 2.8 - 20,
    height / 3 - 25,
    width - width / 2.8 - 20,
    height / 3 - 20,
    width / 2.8 + 20,
    height / 3 - 20
  );

  fill(0);
  strokeWeight(3);
  line(width / 2.8, height / 3, width - width / 1.595, height / 3 - 22);
  line(width - width / 2.8, height / 3, width / 1.595, height / 3 - 22);

  strokeWeight(5);
  line(width / 2.8 + 20, height / 3 - 23.5, width / 2.8 + 20, height / 3 - 75);
  line(
    width - width / 2.8 - 20,
    height / 3 - 23.5,
    width - width / 2.8 - 20,
    height / 3 - 75
  );

  // line top of path
  fill(25);
  strokeWeight(3);
  quad(
    width / 2.8,
    height / 3 - 75,
    width - width / 2.8,
    height / 3 - 75,
    width - width / 2.8,
    height / 3 - 80,
    width / 2.8,
    height / 3 - 80
  );

  // fill between top and bottom of the path
  fill(100);
  strokeWeight(0);
  quad(
    width / 2.8 + 22,
    height / 3 - 22,
    width - width / 2.67,
    height / 3 - 22,
    width - width / 2.8,
    height / 3,
    width / 2.8,
    height / 3
  );

  // create windows in the path (top image)
  fill(80, 120);
  strokeWeight(0);
  for (let i = 0; i < 2; i++) {
    quad(
      width / 2.8 + 50 + i * 170,
      height / 3 - 65,
      width / 2.8 + 50 + i * 170,
      height / 3 - 10,
      width / 2.8 + 150 + i * 170,
      height / 3 - 10,
      width / 2.8 + 150 + i * 170,
      height / 3 - 65
    );
  }

  // global ceiling top
  fill(40);
  quad(0, 0, width, 0, width, height / 11, 0, height / 11);

  // barrier stairs
  strokeWeight(3);
  fill(190);
  quad(
    width / 2.9,
    height - 150,
    width / 2.9,
    height,
    width / 2.85,
    height,
    width / 2.85,
    height - 150
  );
  quad(
    width - width / 2.9,
    height - 150,
    width - width / 2.9,
    height,
    width - width / 2.85,
    height,
    width - width / 2.85,
    height - 150
  );

  fill(255);
  strokeWeight(0);
  quad(
    width / 3.8,
    height,
    width / 2.8,
    height - 180,
    width / 2.8,
    height - 160,
    width / 3.6,
    height
  );

  fill(255);
  quad(
    width / 2.8,
    height - 180,
    width / 2.8,
    height - 180,
    width / 2.8,
    height - 160,
    width / 2.3,
    height - 100
  );

  fill(255);
  quad(
    width - width / 3.8,
    height,
    width - width / 2.8,
    height - 180,
    width - width / 2.8,
    height - 160,
    width - width / 3.6,
    height
  );

  fill(255);
  quad(
    width - width / 2.8,
    height - 180,
    width - width / 2.8,
    height - 180,
    width - width / 2.8,
    height - 160,
    width - width / 2.3,
    height - 100
  );
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);
}

function switchOff() {
  
}

//Index 1 objet dans les références de P5 :
// le résumer en quelques termes/mots (pour aller plus loin dans la doc)
/* J'ai regardé dans les références de P5 et je me suis intéressée à la sphère. Elle est intéressante car contrairement à ce que l’on a vu pendant le cours, cette dernière nécessite l’appel à WebGL en paramètre lors de la création du canvas.

On utilise WEBGL car cette interface permet de créer et afficher de la 2D ou de la 3D dans un canvas.

Pour créer une sphère, on a plusieurs façon de faire. La fonction sphere() peut-être utilisée avec 3 paramètres optionnels :

- Le rayon (radius)
- detailX : pour subdiviser les parties dans l’axe des X
- detail Y : pour subdiviser les parties dans l’axe des X

De plus, on peut le faire tourner avec la fonction rotate() sur l’axe des X (rotateX) ou l’axe des Y (rotateY).*/
