// Movie data
const movieData = [
    {
      id: 1,
      title: "Inception",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8hhNmdMK5hvZRj9vbyReg7LiFrtfMBzWyA&s",
      categories: ["Sci-Fi", "Action", "Thriller"],
      rating: 8.8,
      year: 2010,
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      posterUrl: "https://www.closeup-shop.com/media/oart_0/oart_s/oart_13753/thumbs/1269408_4552416.jpg",
      categories: ["Drama", "Crime"],
      rating: 9.3,
      year: 1994,
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      id: 3,
      title: "The Dark Knight",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      categories: ["Action", "Crime", "Drama"],
      rating: 9.0,
      year: 2008,
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      id: 4,
      title: "Pulp Fiction",
      posterUrl: "https://m.media-amazon.com/images/I/91rBDOlN5BL._AC_UF894,1000_QL80_.jpg",
      categories: ["Crime", "Drama"],
      rating: 8.9,
      year: 1994,
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
      id: 5,
      title: "The Notebook",
      posterUrl: "https://i.pinimg.com/736x/ff/2b/ae/ff2bae022d628fd505838bdd0c3f1b33.jpg",
      categories: ["Romance", "Drama"],
      rating: 7.8,
      year: 2004,
      description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
    },
    {
      id: 6,
      title: "The Conjuring",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNmUwOTg1YzYtZTRmYS00ZjU1LThjZjQtY2ZmMzQwYWFjOGNhXkEyXkFqcGc@._V1_.jpg",
      categories: ["Horror", "Thriller"],
      rating: 7.5,
      year: 2013,
      description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    },
    {
      id: 7,
      title: "Finding Nemo",
      posterUrl: "https://m.media-amazon.com/images/I/71sagYqGN-L._AC_UF1000,1000_QL80_.jpg",
      categories: ["Animation", "Adventure", "Family"],
      rating: 8.1,
      year: 2003,
      description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      posterUrl: "https://m.media-amazon.com/images/I/81KJ-sK0YpS._AC_UF894,1000_QL80_.jpg",
      categories: ["Action", "Adventure", "Sci-Fi","Animation"],
      rating: 8.4,
      year: 2019,
      description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      id: 9,
      title: "The Silence of the Lambs",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFqlM8kPOIZmPk9YBpFZL8FaJ7c7XaaaBQw&s",
      categories: ["Crime", "Drama", "Thriller"],
      rating: 8.6,
      year: 1991,
      description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
    },
    {
      id: 10,
      title: "La La Land",
      posterUrl: "https://m.media-amazon.com/images/I/81L+uXlv5CL._AC_UF1000,1000_QL80_.jpg",
      categories: ["Comedy", "Drama", "Music", "Romance"],
      rating: 8.0,
      year: 2016,
      description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
    },
    {
      id: 11,
      title: "The Great Gatsby",
      posterUrl: "https://m.media-amazon.com/images/I/71m6mdQL7IS.jpg",
      categories: ["Drama", "Romance"],
      rating: 7.2,
      year: 2013,
      description: "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby."
    },
    {
      id: 12,
      title: "Get Out",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
      categories: ["Horror", "Mystery", "Thriller"],
      rating: 7.7,
      year: 2017,
      description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    },
    {
      id: 13,
      title: "Rockstar",
      posterUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/source/4043e614960772.56037a57ed74f.jpg",
      categories: ["Romance","Music","Family"],
      rating: 9.6,
      year: 2011,
      description: "A college student, as he transforms into a rock star after a tumultuous love story and a period of grief. The movie explores themes of love, loss, artistic growth, and the power of music. ."
    },
    {
      id: 14,
      title: "Tron:Legacy",
      posterUrl: "https://lumiere-a.akamaihd.net/v1/images/p_tronlegacy_19298_7b1ec957.jpeg",
      categories: ["Action", "Sci-fi", "Thriller","Animation"],
      rating: 8.1,
      year: 2010,
      description: "Sam Flynn, the son of Kevin Flynn, who ventures into the digital world where his father has been living for 25 years."
    },
    {
      id: 15,
      title: "Walking Dad",
      posterUrl: "https://staticeu.sweet.tv/images/cache/v2/movie_poster/eyJJRCI6Mjc0NjMsIkxvY2FsZSI6ImVuIiwiQ291bnRyeUNvZGUiOiJVUyIsIkFwcGxpY2F0aW9uVHlwZSI6MiwiRGV2aWNlVHlwZUlEIjoyMiwiRGV2aWNlU3VidHlwZUlEIjozOCwiRGV2aWNlSGVpZ2h0IjowLCJEZXZpY2VSZXNvbHV0aW9uIjowLCJFUEdJbWFnZVBhcmFtcyI6bnVsbCwiR2VucmVJbWFnZVBhcmFtcyI6bnVsbCwiU3ViZ2VucmVJbWFnZVBhcmFtcyI6bnVsbH0=/27463-the-walking-dead.jpg",
      categories: ["Horror", "Mystery", "Thriller","Adventure"],
      rating: 7.6,
      year: 2010,
      description: "A post-apocalyptic horror drama that follows Sheriff Deputy Rick Grimes as he leads a group of survivors in a world overrun by zombies.",
    },
    {
      id: 16,
      title: "The Hangover",
      posterUrl: "https://image.tmdb.org/t/p/original/A0uS9rHR56FeBtpjVki16M5xxSW.jpg",
      categories: ["Comedy", "Mystery", "Drama"],
      rating: 9.5,
      year: 2009,
      description: "A group of friends who wake up in Las Vegas with no memory of the previous night's events, including the groom who is missing."
    }

  ];
  
  // DOM elements
  const categorySelector = document.querySelector('.category-selector');
  const getRecommendationsBtn = document.getElementById('get-recommendations-btn');
  const movieRecommendations = document.getElementById('movie-recommendations');
  const movieCategoriesContainer = document.getElementById('movie-categories-container');
  
  // Available categories (extracted from movieData)
  const allCategories = [...new Set(movieData.flatMap(movie => movie.categories))].sort();
  
  // State
  let selectedCategories = [];
  
  // Function to create a toast notification
  function showToast(title, message, isError = false) {
    // Remove any existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      document.body.removeChild(existingToast);
    }
  
    // Create new toast
    const toast = document.createElement('div');
    toast.classList.add('toast');
    if (isError) {
      toast.classList.add('toast-error');
    }
  
    toast.innerHTML = `
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    `;
  
    document.body.appendChild(toast);
  
    // Show the toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
  
    // Hide the toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }
  
  // Function to create a category button
  function createCategoryButton(category) {
    const button = document.createElement('button');
    button.classList.add('category-btn');
    button.textContent = category;
    
    button.addEventListener('click', () => {
      toggleCategory(category, button);
    });
    
    return button;
  }
  
  // Function to toggle a category selection
  function toggleCategory(category, button) {
    const index = selectedCategories.indexOf(category);
    
    if (index === -1) {
      // Add category
      selectedCategories.push(category);
      button.classList.add('active');
    } else {
      // Remove category
      selectedCategories.splice(index, 1);
      button.classList.remove('active');
    }
    
    updateGetRecommendationsButton();
  }
  
  // Function to update the "Get Recommendations" button state
  function updateGetRecommendationsButton() {
    getRecommendationsBtn.disabled = selectedCategories.length === 0;
  }
  
  // Function to create a movie card
  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    
    card.innerHTML = `
      <div class="movie-poster-container">
        <img src="${movie.posterUrl}" alt="${movie.title} Poster" class="movie-poster">
        <div class="movie-overlay">
          <h3 class="overlay-title">${movie.title}</h3>
          <div class="movie-meta">
            <span class="rating">
              <i data-lucide="star" class="rating-icon"></i>
              ${movie.rating}
            </span>
            <span class="year">${movie.year}</span>
          </div>
          <p class="movie-description">${movie.description}</p>
        </div>
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span class="rating">
            <i data-lucide="star" class="rating-icon"></i>
            ${movie.rating}
          </span>
          <span class="year">${movie.year}</span>
        </div>
      </div>
    `;
    
    return card;
  }
  
  // Function to get movies by category
  function getMoviesByCategory(category) {
    return movieData.filter(movie => movie.categories.includes(category));
  }
  
  // Function to display movies by category
  function displayMoviesByCategories() {
    if (selectedCategories.length === 0) {
      showToast('No Categories Selected', 'Please select at least one category to get recommendations.', true);
      return;
    }
  
    // Clear previous recommendations
    movieCategoriesContainer.innerHTML = '';
    
    // Show recommendation section
    movieRecommendations.style.display = 'block';
    
    // Create a section for each selected category
    selectedCategories.forEach(category => {
      const movies = getMoviesByCategory(category);
      
      // Create category section
      const categorySection = document.createElement('div');
      categorySection.classList.add('category-section');
      
      // Create category title
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.textContent = `${category} Movies`;
      categorySection.appendChild(categoryTitle);
      
      // Create movie grid for this category
      const movieGrid = document.createElement('div');
      movieGrid.classList.add('movie-grid');
      
      // Add movies to the grid
      movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
      });
      
      categorySection.appendChild(movieGrid);
      movieCategoriesContainer.appendChild(categorySection);
    });
    
    // Re-initialize Lucide icons for the newly created elements
    lucide.createIcons();
    
    // Show success toast
    showToast('Recommendations Ready!', `Showing movies for: ${selectedCategories.join(", ")}`);
    
    // Scroll to recommendations
    movieRecommendations.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add event listener for Get Recommendations button
  getRecommendationsBtn.addEventListener('click', displayMoviesByCategories);
  
  // Initialize category buttons
  allCategories.forEach(category => {
    const button = createCategoryButton(category);
    categorySelector.appendChild(button);
  });
  
  // Initialize Lucide icons
  document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
  });