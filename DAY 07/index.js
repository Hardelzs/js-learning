const output = document.querySelector(".output");
const createBtn = document.querySelector(".btn");

function showNotes() {
  if (typeof localStorage !== "undefined") {
    output.innerHTML = localStorage.getItem("input");
  }
}
showNotes();

function updateStorage() {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("input", output.innerHTML);
  }
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  inputBox.addEventListener("keyup", updateStorage); 
  output.appendChild(inputBox).appendChild(img);
});

output.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    input = document.querySelectorAll(".input");
    input.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event. preventDefault();
  }
});
