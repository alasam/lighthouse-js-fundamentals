// Array with the listed kitchen items
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
// for loop that lists each item in the array
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

packingList[3];

console.log("Kitchen stuff to pack:");
// valling the variable i and using a while loop to list the array
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
