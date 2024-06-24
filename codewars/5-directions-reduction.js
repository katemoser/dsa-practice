/**
 * Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions
were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite,
"WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a
needless effort. Since this is the wild west, with dreadful weather and not
much water, it's important to save yourself some energy, otherwise you might
die of thirst!
*/

function dirReduc(arr){
  // make a new array
  // while original directions is not empty
  //    check if last entry in new directions "matches" with first in old
//           if not, push onto new
//           if so, pop from old

  const redundencies = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST",
  }
  const newDirections = []

  for(let i = 0; i <arr.length; i++){
    if( newDirections.length === 0 || redundencies[newDirections[newDirections.length-1]] !== arr[i]){
      newDirections.push(arr[i])
    }
    else{
      newDirections.pop()
    }
  }
  return newDirections;
}