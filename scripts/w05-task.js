/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");

    const h3 = document.createElement("h3")
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src =temple.imageUrl;
    img.alt =temple.location;

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch("temples-data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch temple data.");
    }
    templeList = await response.json();
    displayTemples(templeList);
  } catch (error) {
    console.error(error.message);
  }
};


/* reset Function */
const filterTemples = (temples) => {
  resizeTo();
  const filter = document.getElementById("filtered").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new  Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temple);
      break;
    default:
      break;

  }
};

/* Event Listner */
document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});


getTemples();

