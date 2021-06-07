const catigor = document.querySelector('ul').children.length;

console.log(`В списке ${catigor} категории.`);
const ulRef = Array.from(document.querySelector('#categories').children);
for (const elem of ulRef) {
    const category = elem.firstElementChild.textContent;   
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};