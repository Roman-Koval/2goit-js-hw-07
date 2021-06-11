const catigor = document.querySelector('ul').children.length;
console.log(`В списке ${catigor} категории.`);
const ulRef = document.querySelectorAll('li.item');
ulRef.forEach((elem) => {
    let title = elem.firstElementChild.textContent;
    console.log(`Категория: ${title}`);
    let quantity = elem.lastElementChild.children.length;
    console.log(`Количество элементов: ${quantity}`)
});