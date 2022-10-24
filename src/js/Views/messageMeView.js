class MessageMe {
  _parentElement = document.querySelector('.contact-me-modal');
  _modal = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _btnClose = document.querySelector('.close-modal');

  addHandlerShowModal(handler) {
    this._parentElement.addEventListener('click', handler);
  }

  addHandlerCloseModal(handler) {
    this._btnClose.addEventListener('click', handler);
  }

  addHandlerOverlay(handler) {
    this._overlay.addEventListener('click', handler);
  }
}
export default new MessageMe();
