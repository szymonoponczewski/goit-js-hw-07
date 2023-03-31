import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

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

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();

  const instance = basicLightbox.create(
    ` <img src="${e.target.dataset.source}" alt="${e.target.alt}" />
    `
  );

  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && instance.visible()) {
      instance.close();
    }
  });
});
