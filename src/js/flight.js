document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelector('#details');
  const containers = document.querySelectorAll('.info__container');
  const itemsMain = document.querySelector('#itemsMain');
  const imgBox = document.querySelector('#imgBox');
  const description = document.querySelector('#description');
  const itemsDetails = document.querySelector('#itemsDetails');
  const asideImg = document.querySelector('#asideImg');
  details.addEventListener('click', function () {
    if (this.dataset.open === 'false') {
      this.dataset.open = 'true';
      this.textContent = 'General';
      if (window.innerWidth < 880) {
      [...containers].forEach(el => {
        el.classList.add('info__container--active');
      });
      } else {
        itemsMain.classList.add('info__items--moved');
        imgBox.classList.add('info__img-box--moved');
        description.classList.add('info__description--moved');
        itemsDetails.classList.add('info__items--moved-right');
        asideImg.classList.add('info__aside-img--moved');
      } 
    } else {
      this.dataset.open = 'false';
      this.textContent = 'Details';
      if (window.innerWidth < 880) {
        [...containers].forEach(el => {
          el.classList.remove('info__container--active');
        });
      } else {
        itemsMain.classList.remove('info__items--moved');
        imgBox.classList.remove('info__img-box--moved');
        description.classList.remove('info__description--moved');
        itemsDetails.classList.remove('info__items--moved-right');
        asideImg.classList.remove('info__aside-img--moved');
      }
    }
  });
});