import path from 'path';
import yaml from 'js-yaml';

const parseData = (filepath) => {
  if (path.extname(filepath) === '.json') {
    return JSON.parse;
  }
  if (path.extname(filepath) === '.yml') {
    return yaml.load;
  }
  if (path.extname(filepath) === '.yaml') {
    return yaml.load;
  }
  return '';
};
export default parseData;
