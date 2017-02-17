// You can use the method sort to easily sort the values in an array alphabetically or numerically.

/* 
sort can be passed a compare function as a callback. 
The compare function should return a negative number if
a should be before b, a positive number if a should be after b, or 0 if they are equal.
*/

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a, b) {
  return b - a;
});
