'use strict';

// if (module.hot) {
//   module.hot.accept();
// }

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const contactMe = document.querySelector('.contact-me-modal');

const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const navLink = document.querySelector('.nav-links');

const btnScrollTo = document.querySelector('.button');
const aboutMe = document.querySelector('#about-me');

const toggleButton = function () {
  navList.classList.toggle('show');
};

// Event Listeners

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const smoothScroll = function (e) {
  const s1coords = aboutMe.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
};

// Page navigation
// Event delegation

// 1.Add the eventlistener to a common parent element
// 2. Determine which element originated the event
navLink.addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

hamburgerButton.addEventListener('click', toggleButton);

contactMe.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

btnScrollTo.addEventListener('click', smoothScroll);
