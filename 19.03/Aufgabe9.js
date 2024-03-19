function zaehleBuchstaben(str, buchstabe) {
  str = str.toLowerCase();
  buchstabe = buchstabe.toLowerCase();

  let zaehler = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === buchstabe) {
      zaehler++;
    }
  }

  return zaehler;
}

// Test
console.log(zaehleBuchstaben("Hallo Welt", "l")); // Sollte 3 ausgeben
