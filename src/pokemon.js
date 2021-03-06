export default class Pokemon {
  static apiBase = 'https://pokeapi.co/api/v2/';

  constructor(info, likes) {
    this.id = info.id;
    this.name = info.name;
    this.likes = likes;
    this.image = info.sprites.other.dream_world.front_default;
  }

  static async getlist(limit, offset) {
    const res = await fetch(`${Pokemon.apiBase}pokemon/?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
  }

  static async getpokeinfo(name) {
    const res = await fetch(`${Pokemon.apiBase}pokemon/${name}/`);
    const data = await res.json();
    return data;
  }
}