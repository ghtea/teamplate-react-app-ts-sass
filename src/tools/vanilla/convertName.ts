

export const convertCamelToSnake = (str:string):string => str.replace(/[A-Z]/g, (letter:string):string => `_${letter.toLowerCase()}`);

export const convertPascalToSnake = (str:string):string => str.replace(/[A-Z]/g, (letter:string):string => `_${letter.toLowerCase()}`).replace(/^_/, '');
