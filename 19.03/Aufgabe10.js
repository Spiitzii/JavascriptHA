function filterGeradeZahlen(arr) {
  let geradeZahlen = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      geradeZahlen.push(arr[i]);
    }
  }
  return geradeZahlen;
}

// Test
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); // Sollte [2, 4, 6] ausgeben
