# Watched Movie List

Watched Movie List is a React application that allows users to search for movies, view detailed information, rate movies, and maintain a list of watched movies. It uses the [OMDB API](http://www.omdbapi.com/) to fetch movie data and includes features like local storage for saving watched movies and a star rating system. I built this application as a guided project for the Udemy course "The Ultimate React Course 2025: React, Next.js, Redux & More" taught by Jonas Schmedtmann.

## Features

- **Search Movies**: Search for movies by title using the OMDB API.
- **View Details**: Display detailed information about a selected movie, including title, year, poster, runtime, IMDb rating, plot, actors, director, and genre.
- **Rate Movies**: Add a personal rating to movies and save them to a watched list.
- **Watched List**: View and manage a list of watched movies, with options to delete or revisit movie details.
- **Local Storage**: Persist watched movies across sessions using browser local storage.
- **Responsive UI**: A clean, responsive interface with collapsible sections for movie lists and details.

## Screenshots
https://github.com/mikkelsons/watched-movie-list/blob/main/screenshots/Screenshot%202025-05-24%20175610.png?raw=true

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (version 14 or higher recommended)
- **npm** (usually included with Node.js) or **yarn**
- A modern web browser (e.g., Chrome, Firefox)

## Getting Started

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/mikkelsons/watched-movie-list.git
cd watched-movie-list
```

### 2. Obtain an OMDB API Key
The application uses the OMDB API to fetch movie data. You need an API key to use it:
Visit the OMDB API website.

Click "Get an API Key" and follow the instructions to sign up.

You’ll receive an API key via email (e.g., "1234abcd").

### 3. Set Up Environment Variables
The project requires an environment variable for the OMDB API key. Follow these steps:
Copy the provided .env.example file to create a new .env file:

```bash
cp .env.example .env
```

Open the .env file in a text editor.

Replace the placeholder with your OMDB API key:
env

REACT_APP_API_KEY=your-omdb-api-key

Example:
env

REACT_APP_API_KEY="1234abcd"

Save the .env file. Do not commit the .env file to version control, as it contains sensitive data. The .gitignore file already includes .env to prevent this.

### 4. Install Dependencies
Install the required Node.js packages:

```bash
npm install
```

### 5. Run the Application
Start the development server:

```bash
npm start
```

The app will open in your default browser at http://localhost:3000.

Search for movies, view details, rate them, and manage your watched list.

### 6. Build for Production (Optional)
To create a production-ready build:

```bash
npm run build
```

The optimized files will be generated in the build folder.
Project Structure
src/App.js: Main component containing the application logic, including movie search, watched list, and movie details.

src/useMovies.js: Custom hook for fetching movie search results from the OMDB API.

src/useLocalStorageState.js: Custom hook for managing state with local storage.

src/useKey.js: Custom hook for handling keyboard events (e.g., Enter to focus search, Escape to close movie details).

src/StarRating.js: Component for rating movies with a star-based UI.

.env.example: Template for the .env file with the required REACT_APP_API_KEY variable.

## Usage
Search Movies: Type a movie title in the search bar and press Enter. Results appear in the left panel.

View Details: Click a movie to see its details, including plot, actors, and IMDb rating.

Rate Movies: Use the star rating component to rate a movie, then click "Add to list" to save it to your watched list.

Manage Watched List: View your watched movies, including average ratings and runtime, in the right panel. Click a movie to revisit its details or use the "X" button to remove it.

### Keyboard Shortcuts:
Press Enter to focus the search bar and clear the current query.

Press Escape to close the movie details view.

## Troubleshooting
API Key Issues:
If you see an "Invalid API key" error, ensure REACT_APP_API_KEY is correctly set in the .env file and matches your OMDB API key.

Restart the development server after modifying .env:

```bash
npm start
```

No Movies Found:
Ensure your search query is at least 3 characters long (required by the app’s logic).

Check your internet connection and the OMDB API status.

Compilation Errors:
If you encounter Webpack errors related to dotenv, ensure you haven’t manually imported dotenv in your code (e.g., import dotenv from 'dotenv'). Create React App handles environment variables automatically.

Clear the cache and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

## Security Notes
The OMDB API key is exposed in client-side code, which is acceptable for this public API. For sensitive APIs, use a backend server to proxy requests and hide the key.

Ensure the .env file is not committed to your repository. The .gitignore file already excludes it.
