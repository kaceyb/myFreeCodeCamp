
function destroyer(arr) {
  // Remove all the values

  var argTotal = [];

  for (var args = 1; args < arguments.length; args++) {
    argTotal.push(arguments[args]);
  }

  function remove(val) {
    return val !== argTotal[a];
  }

  for (a = 0; a < argTotal.length; a++) {
      //console.log(argTotal[a]);
      arr = arr.filter(remove);
  }

  //console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
