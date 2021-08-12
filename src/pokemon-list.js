const apiBase = 'https://pokeapi.co/api/v2/';

export async function getlist1(limit, offset) {
  const res = await fetch(`${apiBase}pokemon/?limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data;
}

export async function getpokeinfo(name) {
  const res = await fetch(`${apiBase}pokemon/${name}/`);
  const data = await res.json();
  return data;
}