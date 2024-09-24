const movies = [
    {
        title: "Aravindha Sametha Veera Raghava",
        description: "",
        image: "",
        playing: true
    },
    {
        title: "Shakthi",
        description: "",
        image: "",
        playing: false
    },
    {
        title: "Devara",
        description: "",
        trailerId: "HNYA6bqL6bU",
        image: "",
        playing: false,
        synopsis: "ahjdgfuwebc;jibweucvpw;eicbouwegcpiwbeuocygwihecvouwevciyvwoueycviweevcouvwuecvwqougvcuhv"
    },
    {
        title: "Rabhasa",
        description: "",
        image: "",
        playing: false
    },
    {
        title: "Dammu",
        description: "",
        image: "",
        playing: true
    },
    {
        title: "Simhadri",
        description: "",
        image: "",
        playing: true
    },
    {
        title: "Hello",
        description: "",
        image: "",
        playing: true
    },
    {
        title: "Pushpa2",
        description: "",
        image: "",
        playing: false
    },
    {
        title: "Rudra",
        description: "",
        image: "",
        playing: true
    },
    {
        title: "Animal",
        category: "Violence",
        description: "",
        image: "",
        playing: false
    },
    {
        title: "Spirit",
        description: "",
        image: "",
        playing: false
    },
    {
        title: "Salaar",
        description: "",
        image: "",
        playing: true
    }
];

// Function to handle movie click
function handleMovieClick(movie) {
    // Store selected movie data in localStorage
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    
    // Redirect to the movie details page
    window.location.href = 'movie_detail.html';
}


function loadMovies() {
    const playingContainer = document.getElementById('playing-carousel');
    const upcomingContainer = document.getElementById('upcoming-carousel');
    
    playingContainer.innerHTML = '';
    upcomingContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = `

            <a href="#" onclick = 'handleMovieClick(${JSON.stringify(movie)})'>
            
                <div
                    class="bg-white
                        p-4
                        rounded-lg
                        shadow">

                    <img
                        src="${movie.image}"
                        alt="${movie.title}"
                        class="w-full
                            rounded-lg
                            mb-2">
                    
                    <h3
                        class="font-bold
                            text-base">
                        ${movie.title}
                    </h3>

                    <p
                        class="text-sm
                            text-gray-500">
                        ${movie.description}    
                    </p>

                </div>

            </a>
        `;

        if (movie.playing) {
            playingContainer.innerHTML += movieCard;
        } else {
            upcomingContainer.innerHTML += movieCard;
        }
    });
}


function loadMovieDetails() {
    // Get the selected movie data from localStorage
    const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
    
    if (selectedMovie) {
        // Select the container where movie details will be displayed
        const detailContainer = document.getElementById('movie-details-container');
        
        // Create movie detail layout
        const movieDetail = `
            <div
                class="bg-white
                    shadow-lg
                    rounded-lg
                    p-6">

                <!-- Main Content Wrapper -->
                <div
                    class="flex
                        flex-col
                        md:flex-row">
                    
                    <!-- Movie Image Section (Left) -->
                    <img
                        src="${selectedMovie.image}"
                        alt="${selectedMovie.title}"
                        class="w-full
                            md:w-1/3
                            rounded-lg
                            mb-4
                            md:mb-0">

                    <!-- Movie Details Section (Right) -->
                    <div
                        class="md:ml-6
                            w-full
                            md:w-2/3
                            flex
                            flex-col">
                        
                        <!-- Title Row -->
                        <h1
                            class="text-4xl
                            font-bold
                            mb-4">
                            ${selectedMovie.title}
                        </h1>
                        
                        <!-- First Row: Category, Cast, Director, Producer -->
                        <div
                            class="flex
                                flex-col
                                md:flex-row
                                w-full">

                            <div
                                class="md:w-1/2
                                    mb-4
                                    md:mb-0">

                                <p
                                    class="text-lg
                                        mb-2">
                                    <strong>
                                        Category: 
                                    </strong>
                                    ${selectedMovie.category}
                                </p>

                                <p
                                    class="text-lg
                                        mb-2
                                        break-words">
                                    <strong>
                                        Cast: 
                                    </strong>
                                    ${selectedMovie.cast}
                                </p>

                                <p
                                    class="text-lg
                                        mb-2">
                                    <strong>
                                        Director: 
                                    </strong>
                                    ${selectedMovie.director}
                                </p>

                                <p
                                    class="text-lg
                                        mb-2">
                                    <strong>
                                        Producer: 
                                    </strong> 
                                    ${selectedMovie.producer}
                                </p>

                            </div>


                            <!-- Synopsis and Rating -->
                            <div
                                class="md:w-1/2
                                    md:ml-6">

                                <p
                                    class="text-lg
                                        mb-2
                                        break-words">
                                    <strong>
                                        Synopsis: 
                                    </strong> 
                                    
                                    ${selectedMovie.synopsis}
                                </p>

                                <p
                                    class="text-lg
                                        mb-4">
                                    <strong>
                                        Rating: 
                                    </strong> 
                                    ${selectedMovie.rating}
                                </p>

                            </div>
                        </div>

                        <!-- Trailer Section -->
                        <div
                            class="mt-6">

                            <h2
                                class="text-2xl
                                    font-semibold
                                    mb-4">
                                Watch Trailer
                            </h2>

                            <iframe
                                class="w-full h-64 md:h-80"
                                src="https://www.youtube.com/embed/${selectedMovie.trailerId}" 
                                title="YouTube trailer"
                                frameborder="0" 
                                allow="autoplay" 
                                allowfullscreen>
                            </iframe>

                        </div>

                        <!-- Book Now Button -->
                        <div
                            class="mt-6
                                text-center">

                            <button
                                class="bg-blue-600
                                    text-white
                                    py-2
                                    px-4
                                    rounded-lg
                                    text-lg">
                                Book Now
                            </button>

                        </div>
                        
                    </div>
                </div>

            </div>
        `;
        
        // add movie details to the container
        detailContainer.innerHTML = movieDetail;
    }
}




document.addEventListener(
    'DOMContentLoaded', () => {
    // Check if we are on the movie detail page
    if (document.getElementById('movie-details-container')) {
        loadMovieDetails();
    } else {
        // Otherwise, shows movies on the homepage
        loadMovies();
    }
});