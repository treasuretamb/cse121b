/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Treasure Tambwanaye";
let currentYear = "2004";
let profilePicture = "images/TreasureProfile.jpg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")[0];





/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = `${currentYear}`
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);



/* Step 5 - Array */

let favouriteFoods = ["pap", "burgers", "Pizza", "Pasta", "Rice", "Pork", "Fruits", "Chicken", "Beef", "Vegetables", "Brownies", "Chocolate Cake", "ribs"];
foodElement.textContent = `Favorite Foods: ${favouriteFoods.join(', ')}`;

const newFavouriteFood = 'Cereal';
favouriteFoods.push(newFavouriteFood);

// Update the display after adding the new favorite food with line breaks
foodElement.innerHTML += `<br>${favouriteFoods[0]}`;

// Remove the first element in the favorite food array
const removedFirstFood = favouriteFoods.shift();

// Append the array output showing the modified array after removing the first element
foodElement.innerHTML += `<br> ${favouriteFoods.join(', ')}`;

// Step 8: Remove the last element in the favorite food array
const removedLastFood = favouriteFoods.pop();

// Step 9: Append the array output showing the final modified favorite foods array
foodElement.innerHTML += `<br>${favouriteFoods.join(', ')}`;


