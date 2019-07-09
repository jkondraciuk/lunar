const inputs = [...document.querySelectorAll('.contact__input')];

inputs.forEach(el => {
  el.addEventListener('focusout', e => {
    if (e.currentTarget.value) {
      e.currentTarget.nextElementSibling.classList.add('contact__label--active');
    } else {
      e.currentTarget.nextElementSibling.classList.remove('contact__label--active');
    }
  });
})

textarea.addEventListener('focusout', e => {
  if (e.currentTarget.value) {
    e.currentTarget.nextElementSibling.classList.add('contact__label--textarea');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('contact__label--textarea');
  }
});