import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", (e) => e.preventDefault());

galleryItems.forEach((image) => {
  const listEl = `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
      />
    </a>
  </div>`;

  galleryEl.insertAdjacentHTML("beforeend", listEl);
});

galleryEl.querySelectorAll(".gallery__link").forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();
    basicLightbox
      .create(
        `
      <img src="${e.target.dataset.source}" alt="${e.target.alt}" />
    `
      )
      .show();
  };
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && basicLightbox.visible()) {
    basicLightbox.close();
  }
});
