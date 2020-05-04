import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 1000,
});

const baseQueryParams = {
  apikey: '8fb61ed0d8ae4cc76943c8d2b8e2ed9c',
};

const get = (url, query) => instance.get(url, {
  params: {
    ...query,
    ...baseQueryParams,
  },
});

export { instance as api, get };
