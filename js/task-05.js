// const textRef = document.querySelector("input");
// const outputRef = document.querySelector("span");
// textRef.addEventListener("input", () => {
//     if (outputRef.textContent = '') {
//         return (outputRef.textContent = "незнакомец");
//                       }
// outputRef.textContent = textRef.value;
// });


const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) =>
    (nameRef.textContent =
      inputRef.value === "" ? "незнакомец" : event.currentTarget.value)
);