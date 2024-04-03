/* LESSON 3 - Programming Tasks */

/* Profile Object  */

// declare object literal
let myProfile = {};

// name property
myProfile.name = "Treasure Tambwanaye";

// photo property 
myProfile.photo = "images/treasureprofile.jpg"

// favourite foods property
myProfile.favoriteFoods = ["Burgers", "Pork", "Rice", "Brownies", "Chocolate Cake",];

// hobbies property
myProfile.hobbies = ["Drawing", "Exercing", "Singing"];

// places lived property
myProfile.placesLived = []


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({ place: "Bulawayo, Zimbabwe", length: "12 years" });
myProfile.placesLived.push({ place: "Johannesburg, South Africa", length: "19 years" });



/* DOM Manipulation - Output */
// Name
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;

document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement("li");
  li.textContent = food;

  document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let dt = document.createElement("dt");
  dt.textContent = hobby;

  document.getElementById("hobbies").appendChild(dt);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let dt = document.createElement("dt");
  dt.textContent = place.place;

  let dd = document.createElement("dd");
  dd.textContent = place.length;

  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);

});

