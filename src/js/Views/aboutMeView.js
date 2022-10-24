class AboutMe {
  _parentElement1 = document.querySelector('.button');
  _aboutMeId = document.querySelector('#about-me');

  addHandlerSmoothScroll(handler) {
    this._parentElement1.addEventListener('click', handler);
  }
}

export default new AboutMe();
