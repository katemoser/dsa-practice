/**
 * The goal of this exercise is to convert a string to a new string where each
 * character in the new string is "(" if that character appears only once in the
 * original string, or ")" if that character appears more than once in the
 * original string. Ignore capitalization when determining if a character is a
 * duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
 */

function duplicateEncode(word) {
  word = word.toLowerCase();
  const freqs = freqCounter(word);

  const encoded = word.split("").map(char => {
    return freqs[char] >= 2 ? ")" : "(";
  }).join("");

  return encoded;
}

function freqCounter(str) {
  const freqs = {};

  for (let char of str) {
    freqs[char] = char in freqs ? freqs[char] + 1 : 1;
  }
  return freqs;
}