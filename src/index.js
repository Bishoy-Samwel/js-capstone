import './style.css';
import Api from './api';
import Comment from './comment';

const Pokedex = require('pokeapi-js-wrapper');

const P = new Pokedex.Pokedex();

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