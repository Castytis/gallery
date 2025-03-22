const images = document.querySelectorAll('.cursor-pointer');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    const imageSrc = e.target.src;
    lightboxImage.src = imageSrc; // Set the lightbox image to the clicked image's src
    lightbox.classList.remove('opacity-0', 'pointer-events-none'); // Make the lightbox visible
    lightbox.classList.add('opacity-100', 'pointer-events-auto'); // Enable interaction with lightbox
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('opacity-100', 'pointer-events-auto'); // Hide the lightbox
  lightbox.classList.add('opacity-0', 'pointer-events-none');
});
