/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import _ from 'lodash';

export const getFileContent = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data;
  } catch (error) {
    console.log('Error occured', error.message);
    return null;
  }
};

export const getSortedKeys = (data) => {
  try {
    const sortedKeys = _.fromPairs(_.sortBy(Object.entries(data), ([key]) => key));
    return sortedKeys;
  } catch (error) {
    console.log('Error occured', error.message);
    return null;
  }
};

export const dfsRecursive = (obj, indent = '.') => {
  try {
    const result = [];
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result.push(`${indent}${key}`);
        dfsRecursive(obj[key], `${indent}.`);
      } else {
        result.push(`${indent}${key}: ${obj[key]}`);
      }
    }
    return result;
  } catch (error) {
    console.log('Error occured', error.message);
    return null;
  }
};
