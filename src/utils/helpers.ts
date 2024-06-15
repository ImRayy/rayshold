export function getWordsCount(content: string) {
  const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
  const numberOfWords = clean.split(/\s/g).length;
  return numberOfWords;
}
