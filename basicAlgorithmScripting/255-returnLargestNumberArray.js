
function largestOfFour(arr) {
  // You can do this!
  var maxArray = [];
  var i = 0;

  function getMaxofArray(numArray) {
    return Math.max.apply(null, numArray);
  }

    for (var s = 0; s < 4; s++) {
       var max = getMaxofArray(arr[i,s]);
       maxArray.push(max);
       i++;
    }
    arr = maxArray;
    //console.log(arr);
    return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
