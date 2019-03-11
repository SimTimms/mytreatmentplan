export const replaceHTMLTags = inStr => {
  const outStr = inStr
    .replace(/<p>/gi, '')
    .replace(/<\/p>/gi, '')
    .replace(/<bluebox>/gi, '')
    .replace(/<\/bluebox>/gi, '')
    .replace(/<b>/gi, '')
    .replace(/<\/b>/gi, '')
    .replace(/<\/ul>/gi, '')
    .replace(/<ul>/gi, '')
    .replace(/<li>/gi, '')
    .replace(/<\/li>/gi, '')
    .replace(/:lis/gi, '');

  return outStr;
};
