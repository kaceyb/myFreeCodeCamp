
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tmp = [];

  for (var i = 0; i < arr.length; i++) {
    tmp = arr.shift(size);
    console.log(tmp);
    //var tmp2 = tmp.push(tmp);
    //  console.log(tmp);
  }
  // while (arr.length > 0) {
  //   tmp += arr.slice(0,size-1);
  //   console.log(tmp);
  // }
  arr = tmp;
  //console.log(arr);
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
