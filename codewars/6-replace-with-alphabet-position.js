/**
 * In this kata you are required to, given a string, replace every letter with
 * its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

 */

const ALPHABET = new Set("abcdefghijklmnopqrstuvwxyz");

function alphabetPosition(text) {
  text = text.toLowerCase();
  const aUnicode ="a".charCodeAt(0);

  const unicodes = []
  for(let i = 0; i < text.length; i ++){
    if (ALPHABET.has(text[i])) {
      unicodes.push( text.charCodeAt(i) -aUnicode + 1); // figure out unicode relative to "a"
    }
  }
  console.log(unicodes);
  return unicodes.join(" ");
}