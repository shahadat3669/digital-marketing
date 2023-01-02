const toggle = document.querySelector('.header__toggle-btn');
const collapse = document.querySelector('.header__nav-collapse');

const navbar = () => {
  toggle.addEventListener('click', () => {
    collapse.classList.toggle('header__nav-active');
  });
};

export default navbar;
