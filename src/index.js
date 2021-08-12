import './style.css';
<<<<<<< Updated upstream
import Api from './api';
import Comment from './comment';
=======
import { layout, render } from './layout';
import { getlist1, getpokeinfo } from './pokemon-list';
import Pokemon from './pokemon';
>>>>>>> Stashed changes

const body = document.getElementById('body');
body.innerHTML = layout();

async function pokelist(num) {
// async function pokelist() {
  // const list = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise'];
  const list = await getlist1(num, 0);
  list.results.forEach(async (element) => {
  // list.forEach(async (element) => {
    const info = await getpokeinfo(element.name);
    const pokeimage = info.sprites.other.dream_world.front_default;
    const pokemon = new Pokemon(info.id, info.name, 0, pokeimage);
    console.log(pokemon);
    render(pokemon);
  });
}

<<<<<<< Updated upstream
// let list;

// (async () => {
//   list = await P.getPokedexsList();
//   console.log(list.results[3].name);
// })();

// const obj = { item_id: '222', username: 'Jane', comment: 'Hello' };
// Api.postComment(obj);

// (async () => {
//   await Api.getComments('item1').then(
//     (data) => console.log(data),
//   );
// })();

// const loadComments = async (name) => {
//   await Api.getComments(name);
//   console.log(Api.data);
// };

// loadComments('item1');

document.querySelector('body').append(Comment.generateForm());
Comment.manageEvents();

const viewComments = async () => {
  document.querySelector('body').append(await Comment.loadComments());
};

viewComments();
=======
pokelist(100);
>>>>>>> Stashed changes
