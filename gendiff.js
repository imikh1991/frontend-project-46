#!/usr/bin/env node
import path from 'path';
import _ from 'lodash';
import { Command } from 'commander';
import { getFileContent } from './fs.js';
import jsonParse from './src/formats/jsonFormat.js';
import ymlParse from './src/formats/ymlFormat.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .usage('[options] <filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ gendiff read file1.json file2.json');
    console.log('  $ gendiff -f plain file1.yml file2.yml');
  });

program.command('read')
  .description('read two configuration files and shows a difference.')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-f, --format <type>', 'format')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const data1 = getFileContent(absolutePath1);
    const data2 = getFileContent(absolutePath2);

    // get format file parser
    let parseFunction = null;
    if (absolutePath1.endsWith('.json') && absolutePath2.endsWith('.json')) {
      parseFunction = jsonParse;
    } else if (absolutePath1.endsWith('.yml') && absolutePath2.endsWith('.yml')) {
      parseFunction = ymlParse;
    } else {
      console.log('Unsupported file format. Try again!');
      return;
    }
    const parsedData1 = parseFunction(data1);
    const parsedData2 = parseFunction(data2);

    if (parsedData1 && parsedData2) {
      const sortedKeys1 = Object.keys(parsedData1);
      const sortedKeys2 = Object.keys(parsedData2);
      // alphabetical order
      const arraySortKey1 = _.sortBy(sortedKeys1, ([key]) => key);
      const arraySortKey2 = _.sortBy(sortedKeys2, ([key]) => key);

      const getResult = (sortKeys1, sortKeys2) => {
        const result = [];
        sortKeys1.forEach((key) => {
          const value1 = parsedData1[key];
          const value2 = parsedData2[key];
          if (sortKeys2.includes(key)) {
            if (value1 !== value2) {
              result.push(`- ${key}: ${value1}`);
              result.push(`+ ${key}: ${value2}`);
            } else {
              result.push(`  ${key}: ${value1}`);
            }
          } else {
            result.push(`- ${key}: ${value1}`);
          }
        });

        sortKeys2.forEach((key) => {
          const value2 = parsedData2[key];
          if (!sortKeys1.includes(key)) {
            result.push(`+ ${key}: ${value2}`);
          }
        });

        return result;
      };

      const res = getResult(arraySortKey1, arraySortKey2);
      console.log(`{\n${res.join('\n')}\n}`);
    }
  });

program.parse();
