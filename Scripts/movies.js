const movies = [
    {
        title: "Aravindha Sametha Veera Raghava",
        description: "",
        image: "https://via.placeholder.com/200x300?text=AVSR",
        playing: true
    },
    {
        title: "Shakthi",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Shakthi",
        playing: false
    },
    {
        title: "Devara",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Devara",
        playing: false
    },
    {
        title: "Rabhasa",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Rabhasa",
        playing: false
    },
    {
        title: "Dammu",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Dammu",
        playing: true
    },
    {
        title: "Simhadri",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Simhadri",
        playing: true
    },
    {
        title: "Hello",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Hello",
        playing: true
    },
    {
        title: "Pushpa2",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Pushpa2",
        playing: false
    },
    {
        title: "Rudra",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Rudra",
        playing: true
    },
    {
        title: "Animal",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Animal",
        playing: false
    },
    {
        title: "Spirit",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Spirit",
        playing: false
    },
    {
        title: "Salaar",
        description: "",
        image: "https://via.placeholder.com/200x300?text=Salaar",
        playing: true
    }
];

function loadMovies() {
    const playingContainer = document.getElementById('playing-carousel');
    const upcomingContainer = document.getElementById('upcoming-carousel');
    
    playingContainer.innerHTML = '';
    upcomingContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = `
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
        `;

        if (movie.playing) {
            playingContainer.innerHTML += movieCard;
        } else {
            upcomingContainer.innerHTML += movieCard;
        }
    });
}

window.onload = loadMovies;