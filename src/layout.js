const layout = () => `
<header>
      <nav class="navbar">
        <a href="./"><img src="/src/pokeballs.png" alt="Icons made by Darius Dan" class="logo"></a>
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
  ul.appendChild(document.createElement('div')).setAttribute('id', pokemon.id);
  const poke = document.getElementById(pokemon.id);
  poke.classList.add('pokemon');
  poke.innerHTML = `
  <span>${pokemon.id}</span>
          <img src="${pokemon.image}" alt="" class="poke-img" width="200px" height="200px">
          <div><span>${pokemon.name}</span></div>
          <i class="fas fa-heart" id="${pokemon.id}-like"></i>
          <span>${pokemon.likes} likes</span>
          <button id="${pokemon.id}-combtn">Comments</button>
          <button id="${pokemon.id}-resbtn">Reservations</button>`;
}

export { render, layout };