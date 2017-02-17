
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
    str = str.repeat(num);
  } else {
    str = "";
  }
  console.log(str);
  return str;
}

repeatStringNumTimes("abc", 3);
