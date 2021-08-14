import './style.css';
import { layout, render, manageEvents } from './layout';
import Pokemon from './pokemon';
import { fetchLikes, pokelike, thispokelikes } from './likes';
import displaycounter from './pokecounter';

// import Api from './api';
const body = document.getElementById('body');
body.innerHTML = layout();

async function pokelist(num) {
  const list = await Pokemon.getlist(num, 0);
  const likes = await fetchLikes();
  list.results.forEach(async (element) => {
    const info = await Pokemon.getpokeinfo(element.name);
    const thislikes = await thispokelikes(likes, info.id);
    const pokemon = new Pokemon(info, thislikes);
    render(pokemon);
    const likebtn = document.getElementById(`${pokemon.id}-like`);
    likebtn.addEventListener('click', async () => {
      await pokelike(pokemon.id);
      likebtn.classList.add('liked');
      window.location.reload();
    });
    await displaycounter();
  });
}

pokelist(9);
manageEvents();
