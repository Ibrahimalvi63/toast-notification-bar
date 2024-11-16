let tostBox = document.querySelector(".tost-box");

let successMsg =
  '<i class="fa-solid fa-circle-check"></i>Message send successfully';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>Input is invalid';

function showTost(msg) {
  let tost = document.createElement("div");
  tost.classList.add("tost");
  tost.innerHTML = msg;
  tostBox.appendChild(tost);

  if (msg.includes("error")) {
    tost.classList.add("error");
  }
  if (msg.includes("invalid")) {
    tost.classList.add("invalid");
  }

  setTimeout(() => {
    tost.remove();
  }, 5000);
}
