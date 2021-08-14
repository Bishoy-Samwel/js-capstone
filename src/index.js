import './style.css';
import { layout, render } from './layout';
import { getlist1, getpokeinfo } from './pokemon-list';
import Pokemon from './pokemon';
import { fetchLikes, pokelike, thispokelikes } from './likes';
// import Api from './api';
const body = document.getElementById('body');
body.innerHTML = layout();

async function pokelist(num) {
  // async function pokelist() {
  // const list = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard'];
  const list = await getlist1(num, 0);
  const likes = await fetchLikes();
  console.log(likes);
  list.results.forEach(async (element) => {
    const info = await getpokeinfo(element.name);
    const thislikes = await thispokelikes(likes, info.id);
    const pokeimage = info.sprites.other.dream_world.front_default;
    const pokemon = new Pokemon(info.id, info.name, thislikes, pokeimage);
    render(pokemon);
    const likebtn = document.getElementById(`${pokemon.id}-like`);
    likebtn.addEventListener('click', async () => {
      await pokelike(pokemon.id);
      likebtn.classList.add('liked');
      window.location.reload();
    });
  });
}

pokelist(9);
