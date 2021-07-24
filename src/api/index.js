import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 5000,
});

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
};

const get = (url, query) => instance.get(url, {
  params: {
    ...query,
    ...baseQueryParams,
  },
});

function setDescription(description) {
  const descriptionTrimed = description.trim()

  return descriptionTrimed.length > 0 ? descriptionTrimed : 'No description available';
}

export async function getCharacters(params) {
  const { data: charactersData } = await get('characters', params);

  return charactersData.data.results.map((character) => ({
    id: character.id,
    description: setDescription(character.description),
    name: character.name,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));
}

export { instance as api, get };
