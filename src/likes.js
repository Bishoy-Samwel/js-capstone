const apiKey = 'd2sFS7omvjcEYYrcoBUH';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const post = (endpoint, body = {}) => fetch(`${baseUrl}${endpoint}`, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const fetchLikes = async () => {
  const response = await fetch(`${baseUrl}apps/${apiKey}/likes`);
  return response.json();
};

export const pokelike = async (pokeid) => {
  const response = await post(`apps/${apiKey}/likes`, {
    item_id: pokeid,
  });

  return response.status === 201;
};

export const thispokelikes = async (arr, pokeid) => {
  let thislikes = 0;
  arr.forEach(async (obj) => {
    if (obj.item_id === pokeid) {
      thislikes = obj.likes;
    }
  });
  return thislikes;
};