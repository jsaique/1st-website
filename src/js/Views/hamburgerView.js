class HamburgerToggle {
  _parentElement = document.getElementById('hamburger');
  _navList = document.getElementById('nav-list');

  addHandlerToggle(handler) {
    this._parentElement.addEventListener('click', handler);
  }
}

export default new HamburgerToggle();
