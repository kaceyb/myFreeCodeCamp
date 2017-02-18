

function palindrome(str) {
	var low = str.toLowerCase();
	console.log(low);
	var repStr = low.replace(/\W/g, '');
	console.log(repStr);
	var repUnd = repStr.replace(/(_)/g, '');
	console.log(repUnd);
	var arSplit = repUnd.split('');
	console.log(arSplit);
	var rev = arSplit.reverse();
	var ans = rev.join('');
	console.log(ans);
	if (ans === repUnd) {
		console.log('true');
		return true;
	} else {
		console.log('false');
		return false;
	}
}

palindrome("My age is_ 0, 0 si ega ym.");
