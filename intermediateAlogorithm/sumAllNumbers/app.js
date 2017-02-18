
function sumAll(arr) {
  var newArr = [];
  var x = arr[0];
  var y = arr[1];
  var max = Math.max(x, y);
  var min = Math.min(x, y);

  for (var i = min; i < (max + 1); i++) {
    newArr.push(i);
    // console.log(newArr);
  }
  return newArr.reduce( (a, b) => a + b);
}
// var arr = [4, 1];
// var newArr = [];
// var x = arr[0];
// var y = arr[1];
// var max = Math.max(x, y);
// var min = Math.min(x, y);
// console.log(max);
// console.log(min);

// newArr.push(min, max);
// console.log(newArr);

// for (var i = min; i < (max + 1); i++) {
//   newArr.push(i);
//   // console.log(newArr);
// }
//
//
// var ans = newArr.reduce( (a, b) => a + b);
// console.log(ans);
