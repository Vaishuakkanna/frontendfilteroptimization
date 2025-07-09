import Papa, { ParseResult } from 'papaparse';

export const loadCSV = async (path: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(path, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<any>) => {
        resolve(results.data);
      },
      error: (err: Error) => {
        reject(err);
      },
    });
  });
};

