import './style.css';
// import Api from './api';
import Comment from './comment';
import Modal from './modal';

// const Pokedex = require('pokeapi-js-wrapper');

// const P = new Pokedex.Pokedex();

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

const modal = new Modal();
modal.create(Comment.generateForm());
document.querySelector('body').append(modal.boxDiv);
document.querySelector('body').append(modal.showBtn);

Comment.manageEvents();

const viewComments = async () => {
  document.querySelector('body').append(await Comment.loadComments());
};

viewComments();

document.querySelector('button').addEventListener('click', console.log('clicked'));
