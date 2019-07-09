document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('#menuOpen');
  const menu = document.querySelector('#nav');
  const menuItems = menu.querySelectorAll(':scope .nav__menu-item');
  const menuLastItem = menu.querySelector(':scope .nav__menu-item:last-child');
  const menuClose = menu.querySelector(':scope #menuClose');
  //Closes the menu
  function closeMenu () {
    menu.classList.remove('nav--active');
    [].forEach.call(menuItems, (e) => {
      e.classList.remove('nav__menu-item--close');
      document.body.style.overflowY = 'auto';
      this.removeEventListener('animationend', closeMenu);
    });
  }
  //Opening
  menuOpen.addEventListener('click', () => {
    menu.classList.add('nav--active');
    [].forEach.call(menuItems, (e) => {
      e.classList.add('nav__menu-item--open');
    });
    document.body.style.overflowY = 'hidden';
  });
  //Closing
  menuClose.addEventListener('click', () => {
    [].forEach.call(menuItems, (e) => {
      e.classList.remove('nav__menu-item--open');
      e.classList.add('nav__menu-item--close');
    });
    menuLastItem.addEventListener('animationend', closeMenu);
  });
});