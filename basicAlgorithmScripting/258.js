
function truncateString(str, num) {
  // Clear out that junk in your trunk

  if (str.length > num) {
    if (num <= 3) {
      str = str.slice(0, num) + "...";
    } else {
      num -= 3;
      str = str.slice(0, num) + "...";
    }
  }
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14)
truncateString("Absolutely Longer", 2)
