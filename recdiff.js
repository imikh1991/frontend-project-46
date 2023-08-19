import path from 'path';
import _ from 'lodash';
// import { Command } from 'commander';
import { getFileContent, dfsRecursive } from './fs.js';
import jsonParse from './src/formats/jsonFormat.js';

// потом отрефакторим
const filepath1 = '__fixtures__/rec/file1.json';
const filepath2 = '__fixtures__/rec/file2.json';
const absolutePath1 = path.resolve(process.cwd(), filepath1);
const absolutePath2 = path.resolve(process.cwd(), filepath2);

const data1 = getFileContent(absolutePath1);
const data2 = getFileContent(absolutePath2);

// входим и обрабатываем данные
const parsedData1 = jsonParse(data1);
const parsedData2 = jsonParse(data2);
console.log('parsed data........');
console.log(parsedData1);
// сортируем по алфавиту

const sortedKeys1 = dfsRecursive(parsedData1);
const sortedKeys2 = dfsRecursive(parsedData2);
console.log('recursive call........');
console.log(sortedKeys1);
// alphabetical order
const arraySortKey1 = _.sortBy(sortedKeys1, ([key]) => key);
const arraySortKey2 = _.sortBy(sortedKeys2, ([key]) => key);

// тестовые данные
console.log('-------МЫ-ИЗ-РЕКУРСИИ--ФУНКЦИИ-------');
console.log(arraySortKey1);
console.log(arraySortKey2);
