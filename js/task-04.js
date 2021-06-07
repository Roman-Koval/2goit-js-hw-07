const wrap_button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    wrapper: document.querySelector('#counter'),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  wrap_button.sub.addEventListener('click', increment);
  wrap_button.add.addEventListener('click', decrement);

// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
// const value = document.querySelector("#value");

// let result = Number(value.textContent);
// console.log(result);

// const add = () => {
//   result += Number(1);
//   return (value.textContent = result);
// };
// const rem = () => {
//   result -= Number(1);
//   return (value.textContent = result);
// };

// increment.addEventListener("click", add);
// decrement.addEventListener("click", rem);