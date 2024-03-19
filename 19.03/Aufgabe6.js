function taschenrechner(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  } else {
    return "Ungültige Operation";
  }
}

// Test
console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben
