const input = document.querySelector('#searchInput');
const questionsHeaders = [...document.querySelectorAll('.questions__header')];

input.addEventListener('keyup', () => {
  questionsHeaders.forEach(el => {
    if (el.textContent.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
      el.parentElement.classList.remove('questions__question--hidden');
    } else {
      el.parentElement.classList.add('questions__question--hidden');
    }
  });
});