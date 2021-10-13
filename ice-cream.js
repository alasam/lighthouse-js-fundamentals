// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

//Add a Flavor
iceCreamFlavours.splice(5,0,"root beer"); // Add "root bear" to the end of the array
console.log(iceCreamFlavours);

// Get the First Flavor
console.log(iceCreamFlavours[0]); // Output the first flavour, "chocolate"

// Get the Last Flavor
console.log(iceCreamFlavours[iceCreamFlavours.length -1]); // Output the 5th and last flavour, "root bear"

//Total Number of Flavours
console.log(iceCreamFlavours.length); // Out the amount of flavours(Elements) in the Array.
