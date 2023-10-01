const apiKey = 'f471329cdb41485eb950299c82a0b543';
const movieId = 411;

const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const titleElement = document.getElementById('TitleOfTheMovie');
        const overviewElement = document.getElementById('Review');
        const releaseDateElement = document.getElementById('DateOfReleaced');
        const poster_pathElement = document.getElementById('poster_path');

        titleElement.textContent = data.title;
        overviewElement.textContent = data.overview;
        releaseDateElement.textContent = `Release Date: ${data.release_date}`;

        
        const baseUrl = "https://image.tmdb.org/t/p/w500";
        const posterUrl = baseUrl + data.poster_path;
        poster_pathElement.src = posterUrl;
    })
    .catch(error => console.error('Error:', error));
