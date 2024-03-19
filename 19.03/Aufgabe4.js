function bestimmeJahreszeit(monat) {
  if (monat >= 3 && monat <= 5) {
    return "Frühling";
  } else if (monat >= 6 && monat <= 8) {
    return "Sommer";
  } else if (monat >= 9 && monat <= 11) {
    return "Herbst";
  } else {
    return "Winter";
  }
}

// Test
console.log(bestimmeJahreszeit(5)); // Sollte "Frühling" ausgeben

