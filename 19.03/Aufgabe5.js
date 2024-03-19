function istPasswortGueltig(passwort) {
  if (passwort.length < 8) {
    return false;
  }
  
  if (!/\d/.test(passwort)) {
    return false;
  }
  
  if (!/[A-Z]/.test(passwort)) {
    return false;
  }
  
  return true;
}

// Test
console.log(istPasswortGueltig("GutesPasswort123")); // Sollte true ausgeben
