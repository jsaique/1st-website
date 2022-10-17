'use strict';

if (module.hot) {
  module.hot.accept();
}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const contactMe = document.querySelector('.contact-me-modal');
console.log(contactMe);

const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

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

hamburgerButton.addEventListener('click', toggleButton);

contactMe.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
