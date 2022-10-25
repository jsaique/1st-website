class HamburgerToggle {
  _parentElement = document.getElementById('hamburger');
  _navList = document.getElementById('nav-list');

  constructor() {
    this._addHandlerToggle();
  }

  toggleHamburger() {
    this._navList.classList.toggle('show');
  }

  _addHandlerToggle() {
    this._parentElement.addEventListener(
      'click',
      this.toggleHamburger.bind(this)
    );
  }
}

export default new HamburgerToggle();
