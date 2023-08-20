// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const ymlParse = (content) => yaml.load(content);

export default ymlParse;
