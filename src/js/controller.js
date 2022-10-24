import messageMeView from './Views/messageMeView.js';
import hamburgerView from './Views/hamburgerView.js';
import aboutMeView from './Views/aboutMeView.js';
import navView from './Views/navView.js';

if (module.hot) {
  module.hot.accept();
}

// Event Listeners

const controlNav = function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
};

// Smooth Scroll
const controlsmoothScroll = function () {
  const s1coords = aboutMeView._aboutMeId.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
};
// Hamburger Toggle
const controlToggleButton = function () {
  hamburgerView._navList.classList.toggle('show');
};
// Modal control
const controlShowModal = function () {
  messageMeView._modal.classList.remove('hidden');
  messageMeView._overlay.classList.remove('hidden');
};

const controlCloseModal = function () {
  messageMeView._modal.classList.add('hidden');
  messageMeView._overlay.classList.add('hidden');
};

// Overlay
const controlOverlay = function () {
  controlCloseModal();
};

const init = function () {
  navView.addHandlerNav(controlNav);
  aboutMeView.addHandlerSmoothScroll(controlsmoothScroll);
  hamburgerView.addHandlerToggle(controlToggleButton);
  messageMeView.addHandlerShowModal(controlShowModal);
  messageMeView.addHandlerCloseModal(controlCloseModal);
  messageMeView.addHandlerOverlay(controlOverlay);
};
init();
