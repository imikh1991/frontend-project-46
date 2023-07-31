#!/usr/bin/env node
import { Command } from 'commander';

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
    console.log('  $ gendiff file1.json file2.json');
    console.log('  $ gendiff -f plain file1.yml file2.yml');
  });

program.command('split')
  .description('Compares two configuration files and shows a difference.')
  .argument('<string>', 'string to split')
  .option('-f, --format <type>', 'format of pizza')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
