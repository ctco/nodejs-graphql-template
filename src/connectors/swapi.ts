import DataLoader from 'dataloader';
import { createClient } from 'flashheart';
import logger from '../logger';

const http = createClient({ logger, timeout: 5000 });

async function getFromUrl(url) {
  const response = await http.getAsync(url);
  return response;
}

export const dataLoader = new DataLoader(urls =>
  Promise.all(urls.map(getFromUrl)),
);

export const getObjectFromUrl = async (url: string): Promise<any> => dataLoader.load(url);

export const getObjectsFromType = async (type: string): Promise<any> => {
  return await getObjectFromUrl(`${process.env.SWAPI_SERVICE_URL}/${type}/`);
};

export const getObjectFromTypeAndId = async (type: string, id: string): Promise<any> => {
  const data = await getObjectFromUrl(`${process.env.SWAPI_SERVICE_URL}/${type}/${id}/`);
  return objectWithId(data);
};

export const getObjectsFromUrls = async (urls: string[]): Promise<any[]> => {
  const array = await Promise.all(urls.map(getObjectFromUrl));
  return array.map(objectWithId);
};

/**
 * Objects returned from SWAPI don't have an ID field, so add one.
 */
export const objectWithId = (obj: {id: number, url: string}): Object => {
  obj.id = parseInt(obj.url.split('/')[5], 10);
  return obj;
};
