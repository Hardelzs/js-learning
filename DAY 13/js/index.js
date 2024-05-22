const name = [400, 23, 2, 34, 41, 1, 3];

document.getElementById("change").innerHTML = myArray(name);

function myArray(cast) {

  let far = cast.length;

  let lol = Infinity;

  while (far--) {

    if (cast[far] < lol) {

      lol = cast[far];

    }

  }

  return lol;

}

myArray();

