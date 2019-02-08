export const replaceHTMLTags = inStr => {
  const outStr = inStr
    .replace(/<p>/gi, '')
    .replace(/<\/p>/gi, '')
    .replace(/<b>/gi, '')
    .replace(/<\/b>/gi, '');

  return outStr;
};
