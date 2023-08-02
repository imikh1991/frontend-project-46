// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const ymlParse = (content) => yaml.load(content);

export default ymlParse;

/*
import fs from 'fs';
import yaml from 'js-yaml';

const readFileData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = yaml.load(data);
    console.log('Parsed YAML data:', parsedData);
    return parsedData;
  } catch (error) {
    console.log('Error occurred:', error.message);
    return null;
  }
};

export default readFileData; */
