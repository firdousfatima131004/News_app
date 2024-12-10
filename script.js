// Your API key and endpoint
const API_KEY = "b380ceda406247aab3bc091881805b81";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// Fetch news data from the API
let allArticles = []; // Store articles globally for search

function fetchNews() {
  fetch(API_URL)
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      console.log(data); // Display the JSON data in the console
      allArticles = data.articles; // Store all articles for search
      displayNews(allArticles); // Pass the articles to the display function
    })
    .catch(error => {
      console.error("Error fetching data:", error); // Log errors, if any
    });
}

// Display news on the page
function displayNews(articles) {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ""; // Clear existing content

  // Filter out articles with missing description or image
  const validArticles = articles.filter(article => article.description && article.urlToImage);

  validArticles.forEach(article => {
    const image = article.urlToImage; // Guaranteed to have a value
    const title = article.title || "[No Title]"; // Title fallback
    const description = article.description; // Guaranteed to have a value
    const url = article.url || "#"; // Fallback for URL

    // Create a Bootstrap card
    const newsHTML = `
      <div class="col-md-4">
        <div class="card mb-4" id ="cardd">
          <img src="${image}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" target="_blank" class="btn btn-danger">Read More</a>
          </div>
        </div>
      </div>
    `;
    newsContainer.innerHTML += newsHTML; // Add the card to the container
  });

  // Display a message if no valid articles are found
  if (validArticles.length === 0) {
    newsContainer.innerHTML = `<p class="text-center">No news articles available with sufficient information.</p>`;
  }
}

// Add search functionality
document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const query = document.getElementById("search-input").value.trim().toLowerCase();

  if (!query) {
    alert("Please enter a search term!");
    return;
  }

  // Filter articles based on the search query
  const filteredArticles = allArticles.filter(article =>
    (article.title && article.title.toLowerCase().includes(query)) ||
    (article.description && article.description.toLowerCase().includes(query))
  );

  // Display filtered articles or show a message if no results
  if (filteredArticles.length > 0) {
    displayNews(filteredArticles);
  } else {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = `<p class="text-center text-danger">No results found for "${query}".</p>`;
  }
});

// Call the fetchNews function when the page loads
fetchNews();
