#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];

// Defining the Star Wars API URL for movies
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);

    if (!movieData.characters || movieData.characters.length === 0) {
      console.log('No characters found for this movie.');
      process.exit(0);
    }

    // Fetching and printing the names of all characters in the movie
    Promise.all(movieData.characters.map((characterUrl) => {
      return new Promise((resolve, reject) => {
        request.get(characterUrl, (error, response, characterBody) => {
          if (error) {
            reject(error);
          } else {
            const characterData = JSON.parse(characterBody);
            resolve(characterData.name);
          }
        });
      });
    }))
    .then((characterNames) => {
      characterNames.forEach((name) => {
        console.log(name);
      });
    })
    .catch((err) => {
      console.error(`Error fetching character data: ${err.message}`);
    });
  } catch (e) {
    console.error(`Error parsing JSON response: ${e.message}`);
    process.exit(1);
  }
});
