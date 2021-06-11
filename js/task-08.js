const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="render"]');
const removeFocusBtn = document.querySelector('[data-action="destroy"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", (event) => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", (event) => {
  textInput.value = "";
});