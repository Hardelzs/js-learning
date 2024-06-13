const firstNameInput = document.getElementById('input1');
const secondNameInput = document.getElementById('input2');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  const firstNameLength = firstNameInput.value.length;
  const secondNameLength = secondNameInput.value.length;

  if (firstNameLength < secondNameLength) {
    document.querySelector('h1').innerHTML = "Checked: firstname is shorter than secondname";
  } else {
    document.querySelector('h1').innerHTML = "Checked: secondname is shorter than firstname";
  } if(firstNameInput & secondNameInput == null){
    document.querySelector('h1').innerHTML = 'Checked: Please input words'
  }
});
