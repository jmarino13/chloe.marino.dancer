const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightboxBtn = document.getElementById("closeLightbox");
const closeX = document.getElementById("closeX");

function openLightbox(src, alt=""){
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox(){
  if (!lightbox || !lightboxImg) return;
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  lightboxImg.alt = "";
}

document.getElementById("openLightbox")?.addEventListener("click", () => {
  const img = document.querySelector(".heroCard img");
  if (img) openLightbox(img.src, img.alt);
});

document.getElementById("photoGrid")?.addEventListener("click", (e) => {
  const img = e.target?.closest("button")?.querySelector("img");
  if (img) openLightbox(img.src, img.alt);
});

closeLightboxBtn?.addEventListener("click", closeLightbox);
closeX?.addEventListener("click", closeLightbox);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
