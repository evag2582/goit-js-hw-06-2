const input = document.querySelector('input');

input.addEventListener("blur", () => {
  if (input.value.length >= input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    // input.classList.remove("invalid");
  }
});
 