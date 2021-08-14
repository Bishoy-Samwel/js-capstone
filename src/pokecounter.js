const displayedpokemons = async () => {
  const pokemons = document.querySelectorAll('.pokemon').length;
  return pokemons;
};

const displaycounter = async (num) => {
  const pokenav = document.getElementById('pokenav');
  pokenav.innerHTML = `<span>Pokemons (${num})</span>`;
};

export { displayedpokemons, displaycounter };
