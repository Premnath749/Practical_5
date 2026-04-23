// Array of numbers
let arr = [10, 25, 5, 40, 15];

// Assume first element is largest
let largest = arr[0];

// Loop through array
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

// Output result
console.log("Largest number is: " + largest);