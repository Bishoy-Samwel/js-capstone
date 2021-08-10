import './style.css';

const Pokedex = require('pokeapi-js-wrapper');

const P = new Pokedex.Pokedex();

let list;

(async () => {
  list = await P.getPokedexsList();
  console.log(list.results[3].name);
})();
