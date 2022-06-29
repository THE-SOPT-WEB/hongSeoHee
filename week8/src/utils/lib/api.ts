import { client } from '.';

export const getAlbums = (pageData: number, limit: number) => {
  return client.get(`/albums?_page=${pageData}&_limit=${limit === 1 ? 15 : 10}`);
};
