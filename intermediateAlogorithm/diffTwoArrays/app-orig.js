

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  var first = '';
  var second = '';
  // var val;

  if (arr1.length > arr2.length) {
    first = arr1;
    second = arr2;
  } else {
    first = arr2;
    second = arr1;
  }

  // second.forEach(function(item) {
  //   console.log(item);
  // });

  // console.log(first[3]);

  // function noMatch() {
  //   for (var i = 0; i < first.length; i++) {
  //     // console.log(first[i]);
  //     if (!second.includes(first[i])) {
  //       console.log(first[i]);
  //       val = first[i];
  //     } else {
  //       // console.log(first[i]);
  //       val = '';
  //     }
  //   }
  //   // console.log(val);
  //   return val;
  // }

    first.forEach(function(item) {
      console.log(item);
      if (!second.includes(item)) {
        console.log(item);
        newArr.push(item);
      }
    });

  // newArr = first.filter(noMatch);
  // console.log(newArr);
  // for (var i = 0; i < first.length; i++) {
  //   // console.log(first[i]);
  //   function noMatch(value) {
  //     second.forEach(function(item) {
  //       // console.log(item);
  //       if (item !== first[i]) {
  //       }
  //     });
  //   }
  // }
  console.log(newArr);
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
