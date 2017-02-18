

var store = [
  {
    quote: "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"", person: "- Albert Einstein"
  },
  {
    quote: "\"Good, better, best. Never let it rest. 'Til your good is better and your better is best.\"", person: "- St. Jerom"
  },
  {
    quote: "\"With the new day comes new strength and new thoughts.\"", person: "- Eleanor Roosevelt"
  },
  {
    quote: "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"", person: "- Thomas A. Edison"
  },
  {
    quote: "\"I have no special talent. I am only passionately curious.\"", person: "- Albert Einstein"
  },
  {
    quote: "\"It's sort of a mental attitude about critical thinking and curiosity. It's about mindset of looking at the world in a playful and curious and creative way.\"", person: "- Adam Savage"
  },
  {
    quote: "\"In the middle of difficulty lies opportunity\"", person: "- Albert Einstein"
  },
];

// Returns a random number between min (inclusive) and max (exclusive)
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function rand() {
  return random(0, store.length);
}
// console.log(rand());
// //rand = rand();
// var curQuote = store[rand()].quote;
// //console.log(curQuote);
// var curPerson = store[rand()].person;
// //console.log(curPerson);
//
// console.log(curQuote + " " + curPerson);
