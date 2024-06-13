const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("e");

const care = letters.size;

let text = "";

for (const x of letters) {
  text += x + "\n";
}
document.getElementById("demo").innerHTML = text;
document.getElementById("carta").innerHTML = care;
