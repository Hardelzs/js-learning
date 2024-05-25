let text = "";
let today = new Date();
let someday = new Date();
someday.setFullYear("2100, 0, 15");


function myFunction () {
    if(someday > today){
        text = "someday" ;
    } else{
        text = "today" ;
    }
}
myFunction()


console.log();