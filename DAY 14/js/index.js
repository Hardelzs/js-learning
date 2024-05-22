const number = [40, 1, 2, 3, 4, 5];

document.getElementById("list").innerHTML = txt;
document.getElementById("multiply").innerHTML = text;

let txt = "";

number.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "\n";
}

console.log(txt);

const number1 = number.map(multiplyIt);

let text = "";

function multiplyIt(value) {
  text += value * 2;
}

console.log(number1);
