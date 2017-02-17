
function destroyer(arr) {
  // Remove all the values

  var argLength = arguments.length;
  //console.log(arr);
  var myArr = [];
  var argTotal = [];
  //console.log(myArr);
  //var newArr = [];

  for (var args = 1; args < arguments.length; args++) {
    argTotal.push(arguments[args]);
  }

  for (a = 0; a < argTotal.length; a++) {
    //for (i = 0; i < arr.length; i++) {
      console.log(argTotal[a]);


      myArr = arr.filter(function(val) {
        console.log(val !== argTotal[a]);
        return val !== argTotal[a];
      });
      // function remove(value) {
      //   if (value !== arguments[arg]) {
      //     //console.log(value);
      //     return value;
      //   }
      // }
      // myArr = arr.filter(remove);
      console.log(myArr);
    //}
  }




  // for (arg = 1; arg < argLength; arg++) {
  //   for (i = 0; i < arr.length; i++) {
  //     console.log(arguments[arg]);
  //
  //     myArr = arr.filter(function(val) {
  //       console.log(val !== arguments[arg]);
  //       return val !== arguments[arg];
  //     });
  //     // function remove(value) {
  //     //   if (value !== arguments[arg]) {
  //     //     //console.log(value);
  //     //     return value;
  //     //   }
  //     // }
  //     // myArr = arr.filter(remove);
  //     console.log(myArr);
  //   }
  // }

  console.log(myArr);
  //console.log(arguments.length);

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
