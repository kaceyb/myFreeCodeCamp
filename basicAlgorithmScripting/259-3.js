
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var ansArr = [];
  for (i = 0; i < arr.length; i += size) {
    var myArr = arr.slice(i,i+size);
    ansArr = ansArr.concat([myArr]);
  }
  arr = ansArr;
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
