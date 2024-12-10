# News Application

This is a **news aggregation application** that fetches top headlines from the **NewsAPI** and displays them in a user-friendly format using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**. The application also includes a search feature to filter news articles based on user input. Additionally, it integrates image generation using **Krea.ai** for placeholders when images are not available.

---

## Features

1. **Top Headlines**:
   - Fetches and displays the latest news headlines from the **United States** using the [NewsAPI](https://newsapi.org/).

2. **Responsive UI**:
   - Built with **Bootstrap**, the layout is responsive and adapts to different screen sizes.

3. **Search Functionality**:
   - Allows users to search articles by title or description.
   - Displays results dynamically or notifies users if no results are found.

4. **Image Support**:
   - Displays news images provided by the API.
   - Placeholder images generated using **Krea.ai** in case of missing images.

5. **Error Handling**:
   - Handles API errors gracefully and notifies users if something goes wrong.

---

## Technologies Used

- **Frontend**:
  - **HTML**
  - **CSS**
  - **JavaScript**
  - **Bootstrap** (for styling and layout)

- **API Integration**:
  - [NewsAPI](https://newsapi.org/) for fetching news articles.
  - [Krea.ai](https://krea.ai/) for image generation.

---

## How to Run the Project

### Prerequisites
- A modern web browser.
- An active internet connection.

### Steps to Run
1. Clone this repository or download the source files.
2. Open the `index.html` file in your browser.
3. The application will load and display the latest top headlines.
4. Use the search bar to filter articles by keywords.

---

## Code Overview

### API Integration
- The application fetches data from the `NewsAPI`:
  
  ```javascript
  const API_KEY = "your-api-key-here";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const newsHTML = `
  <div class="col-md-4">
    <div class="card mb-4">
      <img src="${image}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a href="${url}" target="_blank" class="btn btn-danger">Read More</a>
      </div>
    </div>
  </div>
`;
### News Display

News articles are displayed using **Bootstrap cards**. Below is the code snippet used to create and display the cards dynamically:



Search Functionality
Filters articles based on user input:
javascript
Copy code
const filteredArticles = allArticles.filter(article =>
  (article.title && article.title.toLowerCase().includes(query)) ||
  (article.description && article.description.toLowerCase().includes(query)));

  

## Usage Notes

1. Replace the placeholder `API_KEY` in `app.js` with your own key from [NewsAPI](https://newsapi.org/).
2. Ensure that **Krea.ai** is used for generating placeholder images where applicable.

---

## Future Improvements

- Add category-based news filtering.
- Include pagination for better navigation.
- Implement user authentication for personalized news feeds.

---

## License

This project is open-source and available for personal or educational use. If you use or modify this project, consider crediting the original author.
### Project Structure

The project follows a simple structure:

```plaintext
.
├── index.html       # Main HTML file
├── styles.css       # Custom CSS for styling
├── script.js        # JavaScript file for fetching and displaying news
├── README.md        # Project documentation







