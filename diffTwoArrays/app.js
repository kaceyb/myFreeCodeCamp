function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  var first = '';
  var second = '';

  if (arr1.length > arr2.length) {
    first = arr1;
    second = arr2;
  } else {
    first = arr2;
    second = arr1;
  }

  first.forEach(function(item) {
    if (!second.includes(item)) {
      newArr.push(item);
    } else {
      return;
    }
  });
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
