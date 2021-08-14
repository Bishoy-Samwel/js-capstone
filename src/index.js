import './style.css';
import { layout, render, manageEvents } from './layout';
import Pokemon from './pokemon';

const body = document.getElementById('body');
body.innerHTML = layout();

async function pokelist(num) {
// async function pokelist() {
// const list = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard'];
  const list = await Pokemon.getlist(num, 0);
  list.results.forEach(async (element) => {
  // list.forEach(async (element) => {
    const info = await Pokemon.getpokeinfo(element.name);
    const pokemon = new Pokemon(info);
    render(pokemon);
  });
}

pokelist(100);
manageEvents();
