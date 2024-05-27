// explanation fro the loops 
// loops dosen't consider maybe using 3 expression or two you can use as more expression you like 


// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

const cars = ["toyota", "benz", "ferari","camry"];
let i, len, text;
for(i = 0, len = cars.length, text = ""; i < len; i++){
    text += cars[i];
}


let y = 2, lepn = cars.length, tert = "";
for(; y < len; y++){
    tert += cars[y];
}

let teyt = "";
for(let t = 0; t < 5; t--){

    teyt += t;

}


document.getElementById("carta").innerHTML = text,tert,teyt;