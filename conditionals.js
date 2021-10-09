// Checking to see if umbrella is needed
const raining = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

// Checking to see if scarf is needed
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

// Checking using temperature variable
const temperature = 30;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// Using Logical AND (&&)
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// Using Logical OR (||)
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// Using Logical NOT (!)
if (!raining) {
  console.log("Leave your umbrella at home!");
}
