// Film Website

fetch('https://api.tvmaze.com/shows').then(res => res.json()).then(data => {
    const cardsContainer = document.getElementById("cards-container");

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Create Title
        const title = document.createElement("h3");
        title.textContent = item.name;
        card.appendChild(title);

        // Create Language
        const language = document.createElement("p");
        language.textContent = `Language: ${item.language}`;
        card.appendChild(language);

        // Create Genre
        const genres = document.createElement("p");
        genres.textContent = `Genre: ${item.genres.join(', ')}`;
        card.appendChild(genres);

        //Create Image
        const image = document.createElement("img");
        image.src = item.image.medium;
        image.alt = item.name;
        card.appendChild(image);

        cardsContainer.appendChild(card);
    });
})
    .catch(error => console.error('ERROR!!!:', error));

