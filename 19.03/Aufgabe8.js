function umkehrenArray(arr) {
  let umgekehrt = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    umgekehrt.push(arr[i]);
  }
  
  return umgekehrt;
}

// Test
console.log(umkehrenArray([1, 2, 3, 4, 5])); // Sollte [5, 4, 3, 2, 1] ausgeben
