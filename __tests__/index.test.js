import fs from 'fs';
// import { describe, expect, it } from 'jest';
// eslint-disable-next-line import/no-extraneous-dependencies

import { jest } from '@jest/globals';

import { getFileContent } from '../fs.js';
// Mock the fs module
jest.mock('fs');

describe('getFileContent', () => {
  it('should read file content successfully', () => {
    const filePath = 'example.txt';
    const fileContent = 'This is the file content.';

    // Mock the readFileSync function to return the file content
    fs.readFileSync.mockReturnValueOnce(fileContent);

    const result = getFileContent(filePath);
    // Expect the result to match the file content
    expect(result).toBe(fileContent);

    // Verify that readFileSync was called with the correct arguments
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
  });
});
