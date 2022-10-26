import messageMeView from './Views/messageMeView.js';
import hamburgerView from './Views/hamburgerView.js';
import aboutMeView from './Views/aboutMeView.js';
import navView from './Views/navView.js';

if (module.hot) {
  module.hot.accept();
}

const controlNav = function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
};

// Smooth Scroll About Me
const controlSmoothScroll = function () {
  const s1coords = aboutMeView._aboutMeId.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
};

const init = function () {
  navView.addHandlerNav(controlNav);
  aboutMeView.addHandlerSmoothScroll(controlSmoothScroll);
};
init();
