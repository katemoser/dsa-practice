/**ROT13 is a simple letter substitution cipher that replaces a letter with the
 * letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar
 * cipher.
 * Create a function that takes a string and returns the string ciphered with
 * Rot13. If there are numbers or special characters included in the string,
 * they should be returned as they are. Only letters from the latin/english
 * alphabet should be shifted, like in the original Rot13 "implementation".
 */

const ALPHA = "abcdefghijklmnopqrstuvwxyz";
function rot13(message) {
  return message.split("").map(function (char) {
    const lower = char.toLowerCase();
    const i = ALPHA.indexOf(lower);
    if (i >= 0) {
      const newIndx = i + 13 >= 26 ? i + 13 - 26 : i + 13;
      return char === lower ? ALPHA[newIndx] : ALPHA[newIndx].toUpperCase();
    }
    return char;
  }).join("");
  //your code here
}