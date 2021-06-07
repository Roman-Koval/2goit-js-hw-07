const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsList = document.querySelector("#ingredients");

  const createItems = () => {
    return ingredients.map((item) => {
      const liEl = document.createElement("li");
      liEl.textContent = item;
      return liEl;
    });
  };
  
  const itemsEl = createItems(ingredients);
  
  ingredientsList.append(...itemsEl);








//  const items = ingredients.map((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   return item; 
// });
// console.log(...items);
// ingredients.appendChild(...items);




  // const liListRef1 = document.createElement('li');
  // liListRef1.textContent = 'Картошка';
  
  // const liListRef2 = document.createElement('li');
  // liListRef2.textContent = 'Грибы';
  
  // const liListRef3 = document.createElement('li');
  // liListRef3.textContent = 'Чеснок';
  
  // const liListRef4 = document.createElement('li');
  // liListRef4.textContent = 'Помидоры';
  
  // const liListRef5 = document.createElement('li');
  // liListRef5.textContent = 'Зелень';
  
  // const liListRef6 = document.createElement('li');
  // liListRef6.textContent = 'Приправы';
  
  // ulRef.append(liListRef1, liListRef2, liListRef3, liListRef4, liListRef5, liListRef6)
