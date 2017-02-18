
function reverseString(str) {
	var mySplit = str.split('');
	console.log(mySplit);
	mySplit.reverse();
	console.log(mySplit);
	var myJoin = mySplit.join('');
	console.log(myJoin);
	return str;
}

reverseString("hello");
