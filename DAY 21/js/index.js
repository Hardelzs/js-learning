// function myFunction(){
//     if(new Date().getHours > 18){
//         return "Good Evening!"
//     }else{
//         return "Good Day"
//     }
// }

// myFunction(console.log)

if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
  }

