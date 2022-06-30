export const toSnakeCase = (str: string): string =>
  str.trim().toLowerCase().replaceAll(' ', '-');
