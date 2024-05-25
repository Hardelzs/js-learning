let day;
// this switch uses something like if and else, it look and the day number and we assign the day number to evrycase so instead of 
//logginout the number it logout the case
switch(new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6 :
    day = "Saturday";
    break;
    // the default is only run if nothing matches 
    // just like if and else
    default:
      day ="It's just the weekend for evrybody";
      break;
}
document.getElementById("carta").innerHTML = "Today is " + day;