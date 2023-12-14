// Introduction to Arrays

let superheros = ["Superman", "Batman", "Joker", "Spiderman", "Wonder Woman"];

console.log("Hero 5 is", superheros[4]);

superheros[2] = "Doctor Strange";

// Push method
superheros.push("Deadpool");
console.log(superheros);

// Pop method
superheros.pop();
console.log(superheros);

// Array Iteration
for (let i = 0; i <= 4; i++){
  console.log("Hero ", i, "is", superheros[i]);
}

// forEach method
superheros.forEach(function(hero) {
  console.log("Hero is", hero);
});

// Array Methods
console.log("Array length is", superheros.length);
console.log("Index of Wonder Woman is", superheros.indexOf("Wonder Woman"));
console.log("Joined Array:", superheros.join("-"));

let slicedArray = superheros.slice(0, 3);
console.log("Sliced Array:", slicedArray);
console.log("Superheros Array:", superheros);

let removedElements = superheros.splice(2, 2);
console.log("Removed Elements:", removedElements);
console.log("Updated array:", superheros);