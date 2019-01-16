import * as swapi from '../../connectors/swapi';

type ObjectsByType = {
  objects: Object[],
  totalCount: number,
};

/**
  * Given a type, fetch all of the pages, and join the objects together
  */
const byType = async (type: string): Promise<ObjectsByType> => {
  const typeData = await swapi.getObjectsFromType(type);
  let objects: Object[] = [];
  let nextUrl = typeData.next;

  objects = objects.concat(typeData.results.map(swapi.objectWithId));
  while (nextUrl) {
    const pageData = await swapi.getObjectFromUrl(nextUrl);
    objects = objects.concat(pageData.results.map(swapi.objectWithId));
    nextUrl = pageData.next;
  }

  objects = sortObjectsById(objects);
  return { objects, totalCount: objects.length };
};

const byTypeAndId = async (type: string, id: string): Promise<Object> => swapi.getObjectFromTypeAndId(type, id);

const byUrl = async (url: string): Promise<any> => {
  const data = await swapi.getObjectFromUrl(url);
  return swapi.objectWithId(data);
};

const byUrls = async (urls: string[]): Promise<any[]> => {
  const array = await swapi.getObjectsFromUrls(urls);
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
