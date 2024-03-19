function findeMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min: min, max: max };
}

// Test
console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben
