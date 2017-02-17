
function mutation(arr) {
  var str1 = arr[0];
  str1 = str1.toLowerCase();
  var str2 = arr[1];
  str2 = str2.toLowerCase();

  var strArr = str2.split('');
  console.log(strArr);

  for (var i = 0; i < strArr.length; i++) {
    if (str1.indexOf(strArr[i]) !== -1) {
      arr = true;
    } else {
      arr = false;
      console.log(arr);
      return arr;
    }
  }
  console.log(arr);
  return arr;
}

mutation(["hello", "hey"]);
