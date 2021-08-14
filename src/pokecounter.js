const displaycounter = async () => {
  const pokemons = document.querySelectorAll('.pokemon').length;
  const pokenav = document.getElementById('pokenav');
  pokenav.innerHTML = `<span>Pokemons (${pokemons})</span>`;
};

export default displaycounter;