const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('#name-output');

 inputName.addEventListener("input", (event) => {
   outputName.textContent = event.currentTarget.value;
 });

inputName.addEventListener("blur", () => {
    if (outputName.textContent == "") {
         outputName.textContent = "Anonymous!";
     }
});
