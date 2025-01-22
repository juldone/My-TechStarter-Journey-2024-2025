// 4.1 Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1 bis 9 gefüllt ist.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // 4.2 Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links nach unten rechts) berechnet.
  function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i][i];  // Zugriff auf die diagonalen Elemente, es wird die summe gebildet aus der automatiscehen diagonalen addition.
    }
    return sum;
  }
  
  console.log("Diagonalsumme:", diagonalSum(matrix));
  
  // 4.3 Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken.
  matrix[0][0] = 0;  // Oben links
  matrix[0][2] = 0;  // Oben rechts
  matrix[2][0] = 0;  // Unten links
  matrix[2][2] = 0;  // Unten rechts
  
  console.log("Matrix mit Nullen in den Ecken:", matrix);
  