const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const toggleButton = function () {
  navList.classList.toggle('show');
};

hamburgerButton.addEventListener('click', toggleButton);
