
function findLongestWord(str) {
  var mySplit = str.split(' ');
  console.log(mySplit);
  var cmp = 1;
  for (var i = 0; i < mySplit.length; i++) {
  	console.log(mySplit[i]);
    if (mySplit[i].length > cmp) {
      cmp = mySplit[i].length;
      console.log(cmp);
    }
  }
  console.log(cmp);
  return cmp;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
