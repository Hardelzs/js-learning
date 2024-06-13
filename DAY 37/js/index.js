document.getElementById("demo").innerHTML =
  "'John' is " +
  typeof "John" +
  "<br><br>" +
  "('John' + 'Doe') is " +
  typeof ("John" + "Doe") +
  "<br><br>" +
  "3.14 is " +
  typeof 3.14 +
  "<br><br>" +
  "(33 + 66) is " +
  typeof (33 + 66) +
  "<br><br>" +
  "NaN is " +
  typeof NaN +
  "<br><br>" +
  "1234n is " +
  typeof 1234n +
  "<br><br>" +
  "true is " +
  typeof true +
  "<br><br>" +
  "false is " +
  typeof false +
  "<br><br>" +
  "[1, 2, 3, 4] is " +
  typeof [1, 2, 3, 4] +
  "<br><br>" +
  "{name:'John', age:34} is " +
  typeof { name: "John", age: 34 } +
  "<br><br>" +
  "new Date() is " +
  typeof new Date() +
  "<br><br>" +
  "new Set() is " +
  typeof new Set() +
  "<br><br>" +
  "new Map() is " +
  typeof new Map() +
  "<br><br>" +
  "Symbol() is " +
  typeof Symbol() +
  "<br><br>" +
  "function () {} is " +
  typeof function () {} +
  "<br><br>" +
  "x is " +
  typeof x +
  "<br><br>" +
  "null is " +
  typeof null;
