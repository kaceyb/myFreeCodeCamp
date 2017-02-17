
function titleCase(str) {
    str = str.toLowerCase();
    console.log(str);
    var allJoin = '';
    var mySplit = str.split(' ');
      for (var i = 0; i < mySplit.length; i++) {
        var subSplit = mySplit[i].split('');
        //console.log(subSplit);
        subSplit[0] = subSplit[0].toUpperCase();
        var myJoin = subSplit.join('');
        console.log(myJoin);
        allJoin += myJoin+' ';
      }
      var ans = allJoin.toString();
      //var ans = String(allJoin);
      console.log(ans);
      return ans.trim();
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
