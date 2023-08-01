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
    // const obj = JSON.parse(data);
    const sortedKeys = _.fromPairs(_.sortBy(Object.entries(data), ([key]) => key));
    return sortedKeys;
  } catch (error) {
    console.log('Error occured', error.message);
    return null;
  }
};
