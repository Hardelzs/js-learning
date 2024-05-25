// Random
const grate = Math.floor(Math.random() * 10);

function callLog(callback){

    callback(grate)
}

document.getElementById("carta").innerHTML = callLog(console.log);
