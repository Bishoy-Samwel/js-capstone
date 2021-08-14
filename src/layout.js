import Comment from './comment';
import Modal from './modal';
import Pokemon from './pokemon';

const layout = () => `
<header>
      <nav class="navbar">
        <a href="./"><img src="/src/img/pokeballs.png" alt="Icons made by Darius Dan" class="logo"></a>
        <ul class="nav">
          <li><a href="#Pokemons">Pokemons</a></li>
          <li><a href="#Evolutions">Evolutions</a></li>
          <li><a href="#Gym">Gym</a></li>
        </ul>
      </nav>
    </header>
    <main id="main">
      <div class="main-wrapper">
        <ul class="list" id="pokelist">
        </ul>
      </div>
    </main>

    <footer id="footer">
      <div>
        <p>Created By microverse under CC lisense</p>
      </div>
    </footer>`;

function render(pokemon) {
  const ul = document.getElementById('pokelist');
  ul.appendChild(document.createElement('div')).setAttribute('id', pokemon.name);
  const poke = document.getElementById(pokemon.name);
  poke.classList.add('pokemon');
  poke.innerHTML = `
          <img src="${pokemon.image}" alt="" class="poke-img" width="200px" height="200px">
          <span>${pokemon.name}</span><i class="fas fa-heart"></i>
          <span>${pokemon.likes} likes</span>
          <button id="${pokemon.id}-combtn" class="comment-btn">Comments</button>
          <button id="${pokemon.id}-resbtn" class="reserve-btn">Reservations</button>`;
}

const manageEvents = () => {
  document.querySelector('#pokelist').onclick = (event) => {
    if (event.target.classList.value.includes('comment-btn')) {
      const pokeId = event.target.parentElement.id;
      // eslint-disable-next-line no-use-before-define
      modalContent(pokeId, 'comment');
      // we have id
      // we show the window that has details, comments, commentForm
    } else if (event.target.classList.value.includes('reserve-btn')) {
      //
    }
  };
};

const getDetailsDiv = async (id) => {
  const div = document.createElement('div');
  const info = await Pokemon.getpokeinfo(id);
  const heightP = document.createElement('p');
  heightP.innerHTML = `<b>Height:</b> ${await info.height}`;
  const weightP = document.createElement('p');
  weightP.innerHTML = `<b>Weight:</b> ${await info.weight}`;
  const snameP = document.createElement('p');
  snameP.innerHTML = `<b>Species Name:</b> ${await info.species.name}`;
  div.append(heightP, weightP, snameP);
  return div;
};

const modalContent = async (id, requestType) => {
  const info = await Pokemon.getpokeinfo(id);
  const modal = new Modal();
  let commentsP = '';
  const imgDiv = document.createElement('div');
  imgDiv.innerHTML = `<img src=${info.sprites.other.dream_world.front_default} alt=""class="poke-img" width="200px" height="200px">`;
  if (requestType === 'comment') {
    let commentsDiv = '';
    try {
      commentsDiv = await Comment.loadComments(id);
      const n = Comment.numOfComments;
      commentsP = document.createElement('p');
      commentsP.innerHTML = `<b>Comments: </b> ${n}`;
    } catch (error) {
      console.error(error);
    }
    const form = Comment.generateForm(id);
    modal.create([commentsP, imgDiv, await getDetailsDiv(id), form, commentsDiv]);
    modal.pop(modal.boxDiv);
  } else if (requestType === 'reseve') {
    //
  }
  document.querySelector('body').append(modal.boxDiv);
};

export { render, layout, manageEvents };