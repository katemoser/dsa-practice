"use strict";
/**
 * The maximum sum subarray problem consists in finding the maximum sum of a
 * contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum
sum is the sum of the whole array. If the list is made up of only negative
numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or
array is also a valid sublist/subarray.
 */

var maxSequence = function(arr){

  // best subsequence is not going to start or end with a negative number
  // so a simple solution is to have one pointer search for first pos number
  //
  // n^2 solution is to have two pointer
  // while first pointer is not past end
  // first pointer finds "next" pos number after next neg
  // ...

  //check first if all pos -- return sum

  console.log(arr)
  let left = 0;
  let maxSum = 0;

  while (left < arr.length){
    console.log("arr[left]:", arr[left])
    if(arr[left] < 0){
      left ++;
    }
    else{
      let right = arr.length-1;
      while(right >= left){
        if (arr[right] < 0){
          right --;
        }
        else{
          console.log("checking:", arr.slice(left, right+1))
          const subarraySum = sumArray(arr.slice(left, right+1))
          console.log("sum:", subarraySum)
          maxSum = Math.max(maxSum, subarraySum);
          right --;
        }
      }
      left ++;
    }
  }
  return maxSum;
}

function sumArray(nums){
  let sum = 0;
  for(let num of nums){
    sum += num
  }
  return sum;
}