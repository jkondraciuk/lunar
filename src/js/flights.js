document.addEventListener('DOMContentLoaded', () => {
  //images that will be lazy loaded
  const flightImgs = document.querySelectorAll('.flights__image');
  
  flightImgs.forEach(el => {
    const img = document.createElement('img');
    img.src = el.dataset.source;
    //if an image is loaded change the source of given image
    img.addEventListener('load', () => {
      el.src = img.src;
      el.classList.add('flights__image--loaded');
    });
  });
});