let myNumbers = ["a", "b", "c", "d"];
let text;
for (const x of myNumbers) {
  text += x;
}
console.log(text);

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 5;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

let tet = "";
while (true) {
  const result = iterator.next();
  if (result.done) break;
  tet += result.value + "<br>";
}
console.log(tet);

document.getElementById("demo").innerHTML = tet;
