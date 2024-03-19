function entferneDuplikate(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}

// Test
console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben
