import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// galleryFlower.addEventListener("click", clickGallery);

// function clickGallery(e) {
//   e.preventDefault();
//   const { target } = e;
//   const isFlowerSwatchEl = target.classList.contains("gallery__image");
//   if (!isFlowerSwatchEl) {
//     return;
//   }

//   const targetUrl = target.dataset.source;

//   console.log(targetUrl);
// }

const creatingPictureAccordingTemplate = (flower) =>
  flower.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <li class="gallery__list">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
    `,
    ""
  );

const galleryFlower = document.querySelector(".gallery");
const galleryLayout = creatingPictureAccordingTemplate(galleryItems);

galleryFlower.insertAdjacentHTML("beforeend", galleryLayout);
