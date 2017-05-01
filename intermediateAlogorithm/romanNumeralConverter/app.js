var rn = {
  0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX',
  40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC',
  700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM'
};

function convertToRoman(num) {

  var splitArray = num.toString().split('').map(Number);
  // console.log(splitArray);
  // console.log(splitArray[2]);

  var an = '';
  var x, y, z;
  var digits = splitArray.length;
  // console.log(digits);

    if (digits == 1) {
      an = rn[splitArray];
    } else if (digits == 2) {
      x = splitArray[0] * 10;
      an += rn[x];
      an += rn[splitArray[1]];
    } else if (digits == 3) {
      x = splitArray[0] * 100;
      y = splitArray[1] * 10;
      an += rn[x];
      an += rn[y];
      an += rn[splitArray[2]];
    } else if (digits == 4) {
      x = splitArray[0] * 1000;
      y = splitArray[1] * 100;
      z = splitArray[2] * 10;
      an += rn[x];
      an += rn[y];
      an += rn[z];
      an += rn[splitArray[3]];
    }

  // console.log(an);

 return an;
}

convertToRoman(306);
