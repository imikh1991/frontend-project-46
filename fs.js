/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import _ from 'lodash';

export const readFileData = (filePath) => {
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
    const obj = JSON.parse(data);
    const sortedKeys = _.fromPairs(_.sortBy(Object.entries(obj), ([key]) => key));
    return sortedKeys;
  } catch (error) {
    console.log('Error occured', error.message);
    return null;
  }
};
// начните с чтения файлов V
// получите данные из файлов, V
// распарсите данные в объекты и массивы, V
// чтобы их можно было сравнивать. V
// Затем нужно сформировать строку для вывода.
// параметр ф-ции -> c относительными, так и абсолютными путями V
// до файлов (полезные функции: path.resolve() и process.cwd()) V
// Сравниваются данные, а не строки файлов V
// Две строчки дифа, отвечающие за различия поля, V
// должны находиться рядом. Причём вначале должна выводиться
// строка относящаяся к первому файлу, а затем строка относящаяся
// ко второму файлу (см. пример с timeout)
// Результатом работы функции genDiff() является строка
