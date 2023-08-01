#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';
import { getSortedKeys, readFileData } from './fs.js';

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
  .option('-s, --separator <char>', 'separator character', ',')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1);
    const absolutePath2 = path.resolve(process.cwd(), filepath2);

    const data1 = readFileData(absolutePath1);
    const data2 = readFileData(absolutePath2);

    if (data1 && data2) {
      const sortedKeys1 = Object.keys(getSortedKeys(data1));
      const sortedKeys2 = Object.keys(getSortedKeys(data2));

      const getResult = (sortKeys1, sortKeys2) => {
        const result = [];
        sortKeys1.forEach((key) => {
          const value1 = getSortedKeys(data1)[key];
          const value2 = getSortedKeys(data2)[key];
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
          const value2 = getSortedKeys(data2)[key];
          if (!sortKeys1.includes(key)) {
            result.push(`+ ${key}: ${value2}`);
          }
        });

        console.log(`{\n${result.join('\n')}\n}`);
      };

      getResult(sortedKeys1, sortedKeys2);
    }
  });

program.parse();
