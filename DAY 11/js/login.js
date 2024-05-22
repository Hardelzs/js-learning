const imageBtn = document.getElementById("imageBtn");

const insertInput = document.getElementById("insert");

const message = document.getElementById("message");

const popup = document.getElementById("popup");


let attemptsLeft = 4;

imageBtn.addEventListener("click", function() {

  const userInput = insertInput.value.toLowerCase();

  if (userInput === "admin") {

    message.textContent = "Login Successful!";

    attemptsLeft = 4; 

  } else {

    attemptsLeft--;

    if (attemptsLeft > 0) {

      insertInput.value = ""; 

      setTimeout(() => {

        popup.style.display = "block";

      }, 1000)
      
    } else {

      message.textContent = "Login failed. No more attempts remaining.";

      imageBtn.disabled = true; 
    }
  }
});


insertInput.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
  
    imageBtn.click(); 
  }
});
