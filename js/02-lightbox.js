import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) =>
    renderMarkup(preview, original, description)
  )
  .join("");

listEl.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function renderMarkup(preview, original, description) {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}
