function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxLocation = document.getElementById('lightbox-location');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxLocation.textContent = img.dataset.location;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
