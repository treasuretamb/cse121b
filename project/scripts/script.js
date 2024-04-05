const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('ingredient-input');
const recipesContainer = document.getElementById('recipes-container');
const searchComplete = document.getElementById('searchComplete');

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the search query from the input field
  const query = searchInput.value.trim();

  // Check if the search query is empty
  if (!query) {
    alert('Please enter an ingredient to search for recipes.');
    return;
  }

  // Construct the API endpoint URL with the search query
  const apiKey = 'b6d547c6983747e7856c5454e1255ede';
  const endpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}`;

  // Fetch data from the Spoonacular API
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // clear previous search results
      recipesContainer.innerHTML = '';

      // search results
      data.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image}" alt="${recipe.title}" />
          <p>Missing Ingredients: ${recipe.missedIngredients.length}</p>
        `;
        recipesContainer.appendChild(recipeElement);
      });

      // search complete message
      showSearchCompleteMessage();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to fetch recipe data. Please try again later.');
    });
}

// search complete message
function showSearchCompleteMessage() {
  searchComplete.style.display = 'block';
}

// event listener for form submission
searchForm.addEventListener('submit', handleFormSubmit);
