
function rot13(str) { // LBH QVQ VG!

  //ASCII range for CAPS = 65 - 90
  var arr = str;
  var ans = [];
  var range = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

  for (i = 0; i < arr.length; i++) {
    var code;
    code = arr[i].charCodeAt(0);

    if (code < 65 || code > 90) {
      ans.push(arr[i]);
    } else {
      var index = range.indexOf(code);
      index -= 13;
      if (index < 0) {
        index += index * -2;
        code = range[range.length - index];
      } else {
        code = range[index];
      }
      code = String.fromCharCode(code);
      ans.push(code);
    }
  }
  str = ans.join('');
  //console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
