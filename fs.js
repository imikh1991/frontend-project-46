import fs from 'fs';

const { promises: fsp } = fs;

const foo = async (filepath) => {
  try {
    const data = await fsp.readFile(filepath, 'utf-8');
    console.log(`Data read asynchronously:\n${data}`);
  } catch (error) {
    console.log(error);
  }
};

foo('src/files/file1.json');
foo('src/files/file2.json');
