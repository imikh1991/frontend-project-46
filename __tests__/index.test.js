// import fs from 'fs';
// import { describe, expect, it } from 'jest';
// import { jest } from '@jest/globals';
import { getFileContent } from '../fs.js';
// Mock fs.readFileSync function

describe('getFileContent', () => {
  it('should handle file read error', () => {
    const filePath = '__fixtures__/file1.jso';
    const result = getFileContent(filePath);
    // const fileContent = 'This is the file content.';
    // fs.readFileSync.mockReturnValueOnce(fileContent);

    expect(result).toBe(null);
  });
});
