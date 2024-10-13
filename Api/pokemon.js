document.addEventListener('DOMContentLoaded', function () {
    let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=10'; // Adjust limit for more Pokémon

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const pokemons = data.results;
            fetchPokemonDetails(pokemons);
        })
        .catch(error => console.error('Error fetching data:', error));

    function fetchPokemonDetails(pokemons) {
        const container = document.getElementById('pokemonContainer');

        pokemons.forEach(pokemon => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    displayPokemon(pokemonData, container);
                });
        });
    }

    function displayPokemon(pokemonData, container) {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add('pokemon');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemonData.sprites.front_default;
        pokemonImage.alt = `${pokemonData.name} image`;

        // Pokémon Name
        const pokemonName = document.createElement('p');
        pokemonName.textContent = `Name: ${pokemonData.name}`;

        // Pokémon Height
        const pokemonHeight = document.createElement('p');
        pokemonHeight.textContent = `Height: ${pokemonData.height}`;

        // Pokémon Weight
        const pokemonWeight = document.createElement('p');
        pokemonWeight.textContent = `Weight: ${pokemonData.weight}`;

        // Pokémon Abilities
        const abilities = pokemonData.abilities.map(ability => ability.ability.name).join(', ');
        const pokemonAbilities = document.createElement('p');
        pokemonAbilities.textContent = `Abilities: ${abilities}`;

        // Pokémon Stats
        const pokemonStats = document.createElement('ul');
        pokemonData.stats.forEach(stat => {
            let statItem = document.createElement('li');
            statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            pokemonStats.appendChild(statItem);
        });

        pokemonDiv.appendChild(pokemonImage);
        pokemonDiv.appendChild(pokemonName);
        pokemonDiv.appendChild(pokemonHeight);
        pokemonDiv.appendChild(pokemonWeight);
        pokemonDiv.appendChild(pokemonAbilities);
        pokemonDiv.appendChild(pokemonStats);

        container.appendChild(pokemonDiv);
    }
});
