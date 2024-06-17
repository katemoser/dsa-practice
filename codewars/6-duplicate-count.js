/**
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
  const freqs = freqCounter(text.toLowerCase());
  let dupeCount = 0;
  for (let char in freqs) {
    if (freqs[char] > 1) {
      dupeCount += 1;
    }
  }
  return dupeCount;
}

function freqCounter(str) {
  const freqs = {};

  for (let char of str) {
    freqs[char] = char in freqs ? freqs[char] + 1 : 1;
  }
  return freqs;
}