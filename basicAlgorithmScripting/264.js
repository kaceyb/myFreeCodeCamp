
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var myArr = arr.push(num);

  myArr = arr.sort(function(a,b) {
    return a - b;
  });

  num = myArr.indexOf(num);

  //console.log(myArr);
  //console.log(num);
  return num;
}

getIndexToIns([40, 60], 50);
