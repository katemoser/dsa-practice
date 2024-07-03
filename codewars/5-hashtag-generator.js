/**
 * The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

 */

function generateHashtag (str) {
  //split str on spaces
  // capitalize first letters of each word
  //rejoin with hashtag
  //check length

  const words = str.split(" ").filter(word => word != "") //only collect non empty strings
  console.log("words", words);
  const hashtag = "#" + words.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join("");
  console.log("hashtag:", hashtag);
  if (hashtag.length <= 1 || hashtag.length >140) return false;
  return hashtag;
}