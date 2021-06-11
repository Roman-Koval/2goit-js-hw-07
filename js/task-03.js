const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


// const imageList =document.querySelector('#gallery');
// const items = [];
// const createElement = (images) => {
//   images.forEach(image => {
//     const { url, alt } = image;
//     const itemRef = document.createElement('li');
//     const imageRef = document.createElement('img');
//     imageRef.src = `${url}`;
//     imageRef.alt = `${alt}`;
//     itemRef.insertAdjacentElement('afterbegin', imageRef);
//     items.push(itemRef);
//     itemRef.classList.add('item');
//   });
// };
// createElement(images);
// imageList.prepend(...items);
// imageList.classList.add('gallery');

const listEl = document.querySelector("#gallery");

const createGalleryItem = (item) => {
  const { url, alt } = item;
  return `<li><img src="${url}" alt="${alt}" width="300" height="200"></li>`;
};

const makeGaleryItems = images.map(createGalleryItem);

listEl.insertAdjacentHTML("beforeend", makeGaleryItems);

listEl.classList.add("list");