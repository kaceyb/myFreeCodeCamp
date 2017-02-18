
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  if (str.substr(-target.length) === target) {
    str = true;
  } else {
    str =false;
  }
  console.log(str);
  return str;
}

confirmEnding("Bastian", "n");
