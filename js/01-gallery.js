import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(creatingPictureAccordingTemplate(galleryItems));

// function creatingPictureAccordingTemplate(flower) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//     <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>
//     `;
//     })
//     .join("");
// }

// const galleryFlower = document.querySelector(".gallery");
// const galleryLayout = creatingPictureAccordingTemplate(galleryItems);

// galleryFlower.insertAdjacentHTML("beforeend", galleryLayout);

const creatingPictureAccordingTemplate = (flower) =>
  flower.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `,
    ""
  );

const galleryFlower = document.querySelector(".gallery");

const galleryLayout = creatingPictureAccordingTemplate(galleryItems);

galleryFlower.insertAdjacentHTML("beforeend", galleryLayout);

galleryFlower.addEventListener("click", clickGallery);

function clickGallery(e) {
  e.preventDefault();
  const { target } = e;
  const isFlowerSwatchEl = target.classList.contains("gallery__image");
  if (!isFlowerSwatchEl) {
    return;
  }
  console.log(target.dataset.source);

  const targetUrl = target.dataset.source;
  console.log(targetUrl);

  instance.show();
}

const instance = basicLightbox.create(`
    <img src = '${targetUrl}'>
`);
