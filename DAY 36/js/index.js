const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

let numb = fruits.get("apples");

let clear = fruits.clear();
document.getElementById("demo").innerHTML = "There are " + numb + " apples.";
document.getElementById("clear").innerHTML = `There are   ${clear}  ${
  (apples, bananas, oranges)
}`;
