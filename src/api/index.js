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

function formatDate(rawDate) {
  const date = new Date(rawDate);
  let day = date.getDate().toString();
  let month = (1 + date.getMonth()).toString();
  let year = date.getFullYear();

  day = day.length > 1 ? day : '0' + day;
  month = month.length > 1 ? month : '0' + month;

  return ([day, month, year].includes(NaN) ? "Unknown" : `${day}/${month}/${year}`);
}

export async function getCharacterComics(params) {
  const { data: characterComicsData } = await get('comics', params);

  console.log(characterComicsData.data);
  return characterComicsData.data.results.map((comic) => ({
    title: comic.title,
    price: comic.prices[0].price,
    onsale: formatDate(comic.dates.find((date) => date.type === "onsaleDate").date),
  }));
}

export { instance as api, get };
