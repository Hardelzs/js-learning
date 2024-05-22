const number  =  [ 40, 1, 2, 3, 4, 5];

let txt = "";
number.forEach(myFunction);

function myFunction(value,){
    txt += value + "\n";
}
// console.log(txt);


const static  = [15, 16, 17, 18, 19]
const now = static.map(myFunction)

function myFunction(value){
    return value * 2;
}

console.log(now);