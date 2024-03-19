function summeZahlen(arr) {
  // Verwende reduce(), um die Summe der Zahlen im Array zu berechnen
  arr.reduce((summe, zahl) => summe + zahl, 0);
}

// Test
console.log(summeZahlen([1, 2, 3, 4, 5, 6])); // Sollte 21 ausgeben
