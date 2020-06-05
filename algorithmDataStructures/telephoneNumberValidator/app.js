function telephoneCheck(str) {
  // Booleans
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = false;

  let reTen = /\d{10}/;
    console.log('TenDigitTest');
    console.log(reTen.test(str));

  let reEleven = /\d{11}/;
    console.log('ElevenDigitTest');
    console.log(reEleven.test(str));

  let reStartOne = /^[1]/;
    console.log('StartsWithOneTest');
    console.log(reStartOne.test(str));

  let rePermitted = /\d+|\s|\(|\)|\-[^a-zA-Z]/;
    console.log('PermittedTest');
    console.log(rePermitted.test(str));

    //return true;
  }
  
  // telephoneCheck("a555-555-5555");
  // telephoneCheck("5555555555");
  telephoneCheck("15b55555");
