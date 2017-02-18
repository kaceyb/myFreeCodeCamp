
function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  function isFalse(value) {
    if (value !== Boolean()) {
      return value;
    }
  }

  arr = arr.filter(isFalse);
  //console.log(newArr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
