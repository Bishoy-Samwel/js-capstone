import './style.css';
import { layout, render, manageEvents } from './layout';
import { getlist1, getpokeinfo } from './pokemon-list';
import Pokemon from './pokemon';

const body = document.getElementById('body');
body.innerHTML = layout();

async function pokelist(num) {
// async function pokelist() {
// const list = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard'];
  const list = await getlist1(num, 0);
  list.results.forEach(async (element) => {
  // list.forEach(async (element) => {
    const info = await getpokeinfo(element.name);
    const pokeimage = info.sprites.other.dream_world.front_default;
    const pokemon = new Pokemon(info.id, info.name, 0, pokeimage);
    render(pokemon);
  });
}

pokelist(100);
manageEvents();
