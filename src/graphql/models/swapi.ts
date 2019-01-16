import {
    getObjectFromUrl,
    getObjectsFromUrls,
    getObjectFromTypeAndId,
    getObjectsFromType,
    objectWithId,
} from '../../connectors/swapi';

type ObjectsByType = {
  objects: Object[],
  totalCount: number,
};

/**
  * Given a type, fetch all of the pages, and join the objects together
  */
const byType = async (type: string): Promise<ObjectsByType> => {
  const typeData = await getObjectsFromType(type);
  let objects: Object[] = [];
  let nextUrl = typeData.next;

  objects = objects.concat(typeData.results.map(objectWithId));
  while (nextUrl) {
    // eslint-disable-next-line no-await-in-loop
    const pageData = await getObjectFromUrl(nextUrl);
    objects = objects.concat(pageData.results.map(objectWithId));
    nextUrl = pageData.next;
  }

  objects = sortObjectsById(objects);
  return { objects, totalCount: objects.length };
};

/**
 * Given a type and ID, get the object with the ID.
 */
const byTypeAndId = async (type: string, id: string): Promise<Object> => {
  return await getObjectFromTypeAndId(type, id);
};

/**
 * Given an object URL, fetch it, append the ID to it, and return it.
 */
const byUrl = async (url: string): Promise<any> => {
  return await getObjectFromUrl(url);
};

/**
 * Given an objects URLs, fetch it, append the ID to it, sort it, and return it.
 */
const byUrls = async (urls: string[]): Promise<any[]> => {
  const array = await getObjectsFromUrls(urls);
  return sortObjectsById(array);
};

const sortObjectsById = (array: any[]): Object[] => {
  return array.sort((a, b) => a.id - b.id);
};

const convertToNumber = (value: string): number | null => {
  if (['unknown', 'n/a'].indexOf(value) !== -1) {
    return null;
  }

  // remove digit grouping
  const numberString = value.replace(/,/, '');
  return Number(numberString);
};

export {
    byTypeAndId,
    byType,
    byUrl,
    byUrls,
    convertToNumber,
};
